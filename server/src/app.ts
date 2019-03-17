import Koa from 'koa';
import compress from 'koa-compress';
import koaBody from 'koa-body';
import cors from '@koa/cors';
import serve from 'koa-static';
import send from 'koa-send';

import { config } from './config';
import { routes } from './routes';

import EmployeeController from './controllers/employees';
import { createConnection, getConnectionManager } from 'typeorm';

const app = new Koa();

app.use(compress());
app.use(koaBody());
app.use(async (ctx, next) => {
  if ( !getConnectionManager().has('default') ) {
    await createConnection();
  }

  await next();
})
app.use(cors());
app.use(routes);
app.use(EmployeeController);
app.use(serve('public'));
app.use(async (ctx) => {
  if (ctx.status === 404) await send(ctx,
    'index.html',
    { root: './public' });
});


export const server = app.listen(config.port);
