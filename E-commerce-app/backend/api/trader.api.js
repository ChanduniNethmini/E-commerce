import {randomBytes}from 'crypto'

//mapping data using map function
const traders = new Map();

//save method
export const save = ({empName,age,qualification,position})=>{
    const trader = {id:randomBytes(16).toString('hex'),empName,age,qualification,position};
    traders.set(trader.id,trader);
    return trader;
}

//get all method
export const getAll =()=>{
    
    return [...traders.values()];
};

//get specific id
export const get =(id)=>{
    const trader = traders.get(id);
    if (!trader){
        throw new Error('not found for the ID ${id}');
    }
    return trader;
};

//update by id
export const update =(id, {empName,age,qualification,position})=>{
    
    if (!traders.has(id)){
        throw new Error('not found for the ID ${id}');
    }
    const trader = {id,empName,age,qualification,position};
    traders.set(trader.id, trader);
    return trader;
};

//delete function
export const deletetrader =(id)=>{
    
    if (!traders.has(id)){
        throw new Error(`not found for the ID ${id}`);
    }
    traders.delete(id);
};