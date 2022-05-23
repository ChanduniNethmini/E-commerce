import Router from "@koa/router";
import{get, getAll, save, update, deletepromotion} from "../api/promo.api.js";

const promotionroute = new Router({

    prefix:'/promotions'
});

promotionroute.post('/',(ctx)=>{
    const data = ctx.request.body;
    ctx.body = save(data);
    ctx.set ('Content-Type', 'application/json');
    ctx.status = 201;
});

promotionroute.get('/:id',(ctx)=>{
    const id = ctx.params.id;
    ctx.body = get(id);
    ctx.set ('Content-Type', 'application/json');
    ctx.status = 200;
});

promotionroute.get('/',(ctx)=>{
    ctx.body = getAll();
    ctx.set ('Content-Type', 'application/json');
    ctx.status = 200;
});

promotionroute.put('/:id',(ctx)=>{
    const id = ctx.params.id;
    ctx.body = update(id, ctx.request.body);
    ctx.set ('Content-Type', 'application/json');
    ctx.status = 200;
});

promotionroute.del('/:id',(ctx)=>{
    const id = ctx.params.id;
    deletepromotion(id);
    ctx.status = 204;
});

export default promotionroute;