import {randomBytes} from 'crypto'

//mapping data using map function
const users = new Map();

//save method
export const save =({customername,address, phoneNum, Nic})=>{
    const user = {id:randomBytes(16).toString('hex'),customername,address, phoneNum, Nic};
    users.set(user.id,user);
    return user;
}
export const getAll=()=>{
    return [...users.values()];
};

//get all method
export const get =(id)=>{
    const user = users.get(id);
    if(!user){
        throw new Error(`not found for the ID ${id}`)
    }

    return user;
}
//update specific id
export const update = (id, {customername,address, phoneNum, Nic})=>{

    if(!users.has(id)){
        throw new Error(`not found for the ID ${id}`);
    }
    const user = {customername,address, phoneNum, Nic}
    users.set(user.id, user);
    return user;
};

//delete post
export const deleteUser =(id) =>{
    if(!users.has(id)){
        throw new Error(`not found for the ID ${id}`);
    }
    users.delete(id);
};