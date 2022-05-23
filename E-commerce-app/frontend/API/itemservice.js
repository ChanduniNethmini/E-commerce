import axios from "axios";

class ItemServices{
    getAllItems(){
        return axios.get('http://localhost:3000/items')
    }
    getItem(id){
        return axios.get(`http://localhost:3000/items/${id}`)
    }
    createItem(item){
        return axios.post('http://localhost:3000/items',item)
    }
    updateItem(id, item){
        return axios.put(`http://localhost:3000/items/${id}`,item)
    }
    deleteItem(id){
        return axios.delete(`http://localhost:3000/items/${id}`)
    }
}
export default new ItemServices();