"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Color = require("colors");
const Koa = require("koa");
const app = new Koa();
app.use(async (ctx) => {
    ctx.body = 'Hello World';
    console.log(ctx);
    console.log('#######');
});
app.listen(3000);
console.info(`Pleace visited ${Color.green('loaclhost:3000')} or ${Color.red('127.0.0.1:3000')}`);
//# sourceMappingURL=index.js.map