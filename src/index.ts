import * as Color from 'colors';
import * as Koa from 'koa';
import * as Router from 'koa-router';
const app = new Koa();
const router = new Router();

router.get('/*',async (ctx) => {
  const request = ctx.request;
  const response = ctx.response;
  ctx.response.body = 'Hello World';
  console.log('#######');
  console.log(JSON.stringify(ctx));
  console.log('#######');
  console.log(JSON.stringify(request));
  console.log('#######');
  console.log(JSON.stringify(response));
  console.log('#######');
});

app.use(router.routes());
app.listen(3000);
console.info(`Pleace visited ${Color.green('loaclhost:3000')} or ${Color.red('127.0.0.1:3000')}`);