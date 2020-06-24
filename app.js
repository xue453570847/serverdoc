const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa-cors');
const  config  = require('./config')
const index = require('./routes/index')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))

if (process.env.NODE_ENV == 'development') {
  app.use(cors());
}
// var port = normalizePort(process.env.PORT || '3000');

app.use(json())
app.use(logger())
const KoaStatic = require('koa-static')
app.use(KoaStatic(__dirname + '/views/dist'))

// app.use(require('koa-static')('/views'))

app.use(views(__dirname + '/views/dist', {
  extension: 'html'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

/**
 * 启动服务，监听端口
 */
var port = config.port;
app.listen(port, function () {
    console.log("http://localhost:" + port);
});

module.exports = app
