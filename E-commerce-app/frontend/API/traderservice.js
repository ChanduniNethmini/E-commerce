import axios from "axios";

class TraderServices{
    getAllItems(){
        return axios.get('http://localhost:3000/traders')
    }
    getItem(id){
        return axios.get(`http://localhost:3000/traders/${id}`)
    }
    createItem(trader){
        return axios.post('http://localhost:3000/traders',trader)
    }
    updateItem(id, trader){
        return axios.put(`http://localhost:3000/traders/${id}`,trader)
    }
    deleteItem(id){
        return axios.delete(`http://localhost:3000/traders/${id}`)
    }
}
export default new TraderServices();