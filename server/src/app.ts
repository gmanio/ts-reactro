import Koa from 'koa';
import koaBody from 'koa-body';
import cors from '@koa/cors';
import serve from 'koa-static';

import { config } from './config';
import { routes } from './routes';

const app = new Koa();

app.use(koaBody());
app.use(cors());
app.use(routes);
app.use(serve('public'));

export const server = app.listen(config.port);
