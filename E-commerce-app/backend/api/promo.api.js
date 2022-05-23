import {randomBytes}from 'crypto'

const promotions = new Map();

export const save = ({promoName,promodes})=>{
    const promotion = {id:randomBytes(16).toString('hex'),promoName,promodes, addedDate: new Date()};
    promotions.set(promotion.id,promotion);
    return promotion;
}
export const getAll =()=>{
    
    return [...promotions.values()];
};
export const get =(id)=>{
    const promotion = promotions.get(id);
    if (!promotion){
        throw new Error('not found for the ID ${id}');
    }
    return promotion;
};

export const update =(id, {promoName,promodes})=>{
    
    if (!promotions.has(id)){
        throw new Error('not found for the ID ${id}');
    }
    const promotion = {id,promoName,promodes,addedDate:new Date()};
    promotions.set(promotion.id, product);
    return promotion;
};

export const deletepromotion =(id)=>{
    
    if (!promotions.has(id)){
        throw new Error(`not found for the ID ${id}`);
    }
    promotions.delete(id);
};