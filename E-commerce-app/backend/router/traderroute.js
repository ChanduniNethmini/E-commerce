import Router from "@koa/router";
import{get, getAll, save, update, deletetrader} from "../api/trader.api.js";


//declaring the prefix
const traderRouter = new Router({

    prefix:'/traders'
});

//post route
traderRouter.post('/',(ctx)=>{
    const data = ctx.request.body;
    ctx.body = save(data);
    ctx.set ('Content-Type', 'application/json');
    ctx.status = 201;
});

//get all post route
traderRouter.get('/:id',(ctx)=>{
    const id = ctx.params.id;
    ctx.body = get(id);
    ctx.set ('Content-Type', 'application/json');
    ctx.status = 200;
});

//get specific id route
traderRouter.get('/',(ctx)=>{
    ctx.body = getAll();
    ctx.set ('Content-Type', 'application/json');
    ctx.status = 200;
});

//update specific id route
traderRouter.put('/:id',(ctx)=>{
    const id = ctx.params.id;
    ctx.body = update(id, ctx.request.body);
    ctx.set ('Content-Type', 'application/json');
    ctx.status = 200;
});

//delete route
traderRouter.del('/:id',(ctx)=>{
    const id = ctx.params.id;
    deletetrader(id);
    ctx.status = 204;
});

export default traderRouter;
