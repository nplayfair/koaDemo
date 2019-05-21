const Koa       = require('koa');
const KoaRouter = require('koa-router');
const json      = require('koa-json');
const path      = require('path');
const render    = require('koa-ejs');

const app = new Koa();
const router = new KoaRouter();

// JSON prettier middleware
app.use(json());

// Router middleware
app.use(router.routes()).use(router.allowedMethods());

// Simple example
// app.use(async ctx => ctx.body = { msg: 'Hello world' });

router.get('/test', ctx => (ctx.body = 'Test'));


app.listen(3000, () => console.log('server started'));