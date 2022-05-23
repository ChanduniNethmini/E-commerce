import axios from "axios";

class Promotionservice{
    getAllItems(){
        return axios.get('http://localhost:3000/promotions')
    }
    getItem(id){
        return axios.get(`http://localhost:3000/promotions/${id}`)
    }
    createItem(promotion){
        return axios.post('http://localhost:3000/promotions',promotion)
    }
    updateItem(id, promotion){
        return axios.put(`http://localhost:3000/promotions/${id}`,promotion)
    }
    deleteproducts(id){
        return axios.delete(`http://localhost:3000/promotions/${id}`)
    }
}
export default new Promotionservice();