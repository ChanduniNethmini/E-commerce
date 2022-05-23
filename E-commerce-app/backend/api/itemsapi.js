import {randomBytes}from 'crypto'

//mapping using map function
const items = new Map();

//post method
export const save = ({traderName,itemName,Description,price})=>{
    const item = {id:randomBytes(16).toString('hex'),traderName,itemName,Description,price, addedDate: new Date()};
    items.set(item.id,item);
    return item;
}

//get all post method
export const getAll =()=>{
    
    return [...items.values()];
};

//get specific id post
export const get =(id)=>{
    const item = items.get(id);
    if (!item){
        throw new Error('not found for the ID ${id}');
    }
    return item;
};

//update post
export const update =(id, {traderName,itemName,Description,price})=>{
    
    if (!items.has(id)){
        throw new Error('not found for the ID ${id}');
    }
    const item = {id,traderName,itemName,Description,price,addedDate:new Date()};
    items.set(item.id, item);
    return item;
};

//delete post
export const deleteitem =(id)=>{
    
    if (!items.has(id)){
        throw new Error('not found for the ID ${id}');
    }
    items.delete(id);
};