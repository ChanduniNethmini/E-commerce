import axios from "axios";

class UserServices{
    getAllItems(){
        return axios.get('http://localhost:3000/users')
    }
    getItem(id){
        return axios.get(`http://localhost:3000/users/${id}`)
    }
    createItem(user){
        return axios.post('http://localhost:3000/users',user)
    }
    updateItem(id, user){
        return axios.put(`http://localhost:3000/users/${id}`,user)
    }
    deleteItem(id){
        return axios.delete(`http://localhost:3000/users/${id}`)
    }
}
export default new UserServices();