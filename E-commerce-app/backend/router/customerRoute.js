import Router from "@koa/router";
import{get, getAll, save, update, deleteUser} from "../api/customerapi.js";

const userRouter = new Router({
    prefix: '/users'
});

userRouter.post('/',(ctx)=>{
    const data = ctx.request.body;
    ctx.body = save(data);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 201;
});

userRouter.get('/:id',(ctx)=>{
    const id = ctx.params.id;
    ctx.body = get(id);
    ctx.set ('Content-Type', 'application/json');
    ctx.status = 200;
});

userRouter.get('/',(ctx)=>{
    ctx.body = getAll();
    ctx.set ('Content-Type', 'application/json');
    ctx.status = 200;
});

userRouter.put('/:id',(ctx)=>{
    const id = ctx.params.id;
    ctx.body = update(id, ctx.request.body);
    ctx.set ('Content-Type', 'application/json');
    ctx.status = 200;
});

userRouter.del('/:id',(ctx)=>{
    const id = ctx.params.id;
    deleteUser(id);
    ctx.status = 204;
});

export default userRouter;