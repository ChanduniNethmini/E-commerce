import koa from 'koa';
import bodyparser from 'koa-bodyparser';
import postRouter from './router/postrouter.js';
import itemRouter from './router/itemsroute.js';
import customerRouter from './router/customerRoute.js';
import traderRouter from './router/traderroute.js';
import promotionroute from './router/promoroute.js';


// import 'cors' from 'koa/cors';
import cors from "@koa/cors";

const app =new koa();

app.use(
    cors({
      origin: "*",
      credentials: true, //access-control-allow-credentials:true
      optionSuccessStatus: 200,
    })
  );

app.use(bodyparser())
app.use(postRouter.routes())
    .use(postRouter.allowedMethods());
app.use(itemRouter.routes())
    .use(itemRouter.allowedMethods());
app.use(customerRouter.routes())
    .use(customerRouter.allowedMethods());
app.use(traderRouter.routes())
    .use(traderRouter.allowedMethods());
app.use(promotionroute.routes())
    .use(postRouter.allowedMethods());


app.use(ctx =>{
    ctx.set('content-Type', 'text/html');
    ctx.body='hello world 1';
    ctx.status=404;
});



app.listen(3000);