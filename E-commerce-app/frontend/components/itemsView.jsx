import react,{Component} from "react";
import itemservice from "../API/itemservice.js";
class ItemView extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            items : [],
            update: false,
            upID: "",
            Uname: "",
            Udescription: "",
            Uprice: "",
            name: "",
            description: "",
            price: ""
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
        const item = {
            itemName: this.state.name,
            Description: this.state.description,
            price: this.state.price
        }
        itemservice.createItem(item).then(
            this.setState({
                name: "",
                description: "",
                price: ""
            })
        )
    }

    handleUpdate = async (event) => {
        event.preventDefault();
        const item = {
            itemName: this.state.Uname,
            Description: this.state.Udescription,
            price: this.state.Uprice
        }
        itemservice.updateItem(this.state.upID, item).then(
            this.setState({
                update: false
            })
        )
    }

    updateState =(id,name, description, price) => {
        this.setState({
            update: true,
            upID: id,
            Uname: name,
            Udescription: description,
            Uprice: price
        })
        console.log("update", this.state.update)
    }

    deleteItem = (id) => {
        itemservice.deleteItem(id)
    }
    refreshitems(){
        itemservice.getAllItems()
            .then(
                response=> {
                    this.setState({items : response.data})
                    console.log(response)
                }
            )
    }
    render(){
        return(
            <div>
                {!(this.state.update) ? (
                    <div>
                    <h1>item list</h1>
                    <table width="50%" border="1">
                        <thead>
                            <tr>
                                <th>itemName</th>
                                <th>Description</th>
                                <th>price</th>
                                <th>addedDate</th>
                                <th>Actions</th>
    
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.items.map(
                                    items => (
                                    <tr key = {items.id}>
                                        <td>{items.itemName}</td>
                                        <td>{items.Description}</td>
                                        <td>{items.price}</td>
                                        <td>{items.addedDate}</td>
                                        <td> &nbsp;<button onClick={()=>{this.updateState(items.id, items.itemName, items.Description, items.price)}}>Edit</button>
                                        &nbsp; &nbsp; &nbsp;
                                       <button onClick={()=>{this.deleteItem(items.id)}}>Delete</button></td>
                                    </tr>)
                                )
                            }
                        </tbody>
                    </table>

<h1>Add Items Form</h1>
                    <form onSubmit={this.handleSubmit}>
                        Name<br/>
                        <input type="text" value={this.state.name} onChange={(e)=>{this.setState({name: e.target.value})}} />
                        <br />Description<br/>
                        <input type="text" value={this.state.description} onChange={(e)=>{this.setState({description: e.target.value})}} />
                        <br />Price<br/>
                        <input type="text" value={this.state.price} onChange={(e)=>{this.setState({price: e.target.value})}} />
                        <br/><br />
                        <button type="submit">Add</button>
                    </form>
                    </div>
                ) : (
                    <div>
                        <button onClick={()=>{this.setState({update: false})}}>Back</button>
                        <h1>Update Items Form</h1>
                    <form onSubmit={this.handleUpdate}>
                        Name<br/>
                        <input type="text" value={this.state.Uname} onChange={(e)=>{this.setState({Uname: e.target.value})}} />
                        <br />Description<br/>
                        <input type="text" value={this.state.Udescription} onChange={(e)=>{this.setState({Udescription: e.target.value})}} />
                        <br />Price<br/>
                        <input type="text" value={this.state.Uprice} onChange={(e)=>{this.setState({Uprice: e.target.value})}} />
                        <br/><br />
                        <button type="submit">Update</button>
                    </form>
                    </div>
                )}
                
               

            </div>
        )
    }

}
export default ItemView;