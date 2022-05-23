import react,{Component} from "react";
import promotionservice from "../API/promotionservice.js";
class promoView extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            promotion : [],
            update: false,
            promoName: "",
            promodes: "",
            
        }
        this.refreshitems= this.refreshitems.bind(this)
    }
        
    componentDidMount(){
        this.refreshitems()
    }

    componentDidUpdate = () => {
        this.refreshitems()
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const promotion = {
            promoName: this.state.promoName,
            promodes: this.state.promodes,
            
        }
        promotionservice.createItem(promotion).then(
            this.setState({
                promoName: "",
                promodes: "",
               
            })
        )
    }

    
 
    refreshitems(){
        promotionservice.getAllItems()
            .then(
                response=> {
                    this.setState({promotion : response.data})
                    console.log(response)
                }
            )
    }
    render(){
        return(
            <div>
                {!(this.state.update) ? (
                    <div>
                    <h1>Promotion list</h1>
                    <table width="50%" border="1">
                        <thead>
                            <tr>
                                <th>Promotion Name</th>
                                <th>Promotion Description</th>
                               
                             
    
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.promotion.map(
                                    promotion => (
                                    <tr key = {promotion.id}>
                                        <td>{promotion.promoName}</td>
                                        <td>{promotion.promodes}</td>
                                        
                                        
                                    </tr>)
                                )
                            }
                        </tbody>
                    </table>

<h1>Add Postition Form</h1>
                    <form onSubmit={this.handleSubmit}>
                        Promotion Name<br/>
                        <input type="text" value={this.state.promoName} onChange={(e)=>{this.setState({promoName: e.target.value})}} />
                        <br />Promotion Description<br/>
                        <input type="text" value={this.state.promodes} onChange={(e)=>{this.setState({promodes: e.target.value})}} />
                        
                        <br/>
                        <br/>
                        <button type="submit">Add</button>
                    </form>
                    </div>
                ) : (
                    <div>
                     
                    </div>
                )}
                
                

            </div>
        )
    }

}
export default promoView;