const Koa         = require('koa');
const KoaRouter   = require('koa-router');
const json        = require('koa-json');
const path        = require('path');
const render      = require('koa-ejs');
const bodyParser  = require('koa-bodyparser');

const app = new Koa();
const router = new KoaRouter();

// TODO Replace with DB
const things = ['My Family', 'Nottingham Forest', 'Guitar'];

// JSON prettier middleware
app.use(json());

// Router middleware
app.use(router.routes()).use(router.allowedMethods());

// Body parser middleware
app.use(bodyParser());

// Simple example
// app.use(async ctx => ctx.body = { msg: 'Hello world' });

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'layout',
  viewExt: 'html',
  cache: false,
  debug: false
});

// Routes
router.get('/', index);
router.get('/add', showAdd);
router.post('/add', add);

// List of things
async function index(ctx) {
  await ctx.render('index', {
    title: "Things I Love",
    things: things
  });
}

// Show add page
async function showAdd(ctx) {
  await ctx.render('add');
}

// Add thing
async function add() {

}


router.get('/test', ctx => (ctx.body = 'Test'));


app.listen(3000, () => console.log('server started'));