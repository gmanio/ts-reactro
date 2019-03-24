import Koa from 'koa';
import send from 'koa-send';
import serve from 'koa-static';
import koaBody from 'koa-body';
import compress from 'koa-compress';
import cors from '@koa/cors';

import { config } from './config';
import { routes } from './routes';

import { EmployeeController } from './controllers/employees';
import { createConnection, getConnectionManager } from 'typeorm';

const app = new Koa();

app.use(compress());
app.use(koaBody());
app.use(async (ctx, next) => {
  if (!getConnectionManager().has('default')) {
    await createConnection();
  }

  await next();
})
app.use(cors());
app.use(routes);
app.use(EmployeeController.routes());
app.use(serve('public'));
app.use(async (ctx) => {
  if (ctx.status === 404) await send(ctx,
    'index.html',
    { root: './public' });
});


export const server = app.listen(config.port);
