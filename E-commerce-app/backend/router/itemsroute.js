import Router from "@koa/router";
import{get, getAll, save, update, deleteitem} from "../api/itemsapi.js";

const itemRouter = new Router({

    prefix:'/items'
});

itemRouter.post('/',(ctx)=>{
    const data = ctx.request.body;
    ctx.body = save(data);
    ctx.set ('Content-Type', 'application/json');
    ctx.status = 201;
});

itemRouter.get('/:id',(ctx)=>{
    const id = ctx.params.id;
    ctx.body = get(id);
    ctx.set ('Content-Type', 'application/json');
    ctx.status = 200;
});

itemRouter.get('/',(ctx)=>{
    ctx.body = getAll();
    ctx.set ('Content-Type', 'application/json');
    ctx.status = 200;
});

itemRouter.put('/:id',(ctx)=>{
    const id = ctx.params.id;
    ctx.body = update(id, ctx.request.body);
    ctx.set ('Content-Type', 'application/json');
    ctx.status = 200;
});

itemRouter.del('/:id',(ctx)=>{
    const id = ctx.params.id;
    deleteitem(id);
    ctx.status = 204;
});

export default itemRouter;
