import axios from "axios";

class PromotionServices{
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
    deleteItem(id){
        return axios.delete(`http://localhost:3000/promotions/${id}`)
    }
}
export default new PromotionServices();