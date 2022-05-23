import react,{Component} from "react";
import userservice from "../API/userservice.js";
class userView extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            user : [],
            update: false,
            upID: "",
            Ucustomername: "",
            Uaddress: "",
            UphoneNum: "",
            UNic:"",
            customername: "",
            address: "",
            phoneNum: "",
            Nic:""
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
        const user = {
            customername: this.state.customername,
            address: this.state.address,
            phoneNum: this.state.phoneNum,
            Nic: this.state.Nic
        }
        userservice.createItem(user).then(
            this.setState({
                customername: "",
                address: "",
                phoneNum: "",
                Nic:""
            })
        )
    }

    handleUpdate = async (event) => {
        event.preventDefault();
        const user = {
            customername: this.state.Ucustomername,
            address: this.state.Uaddress,
            phoneNum: this.state.UphoneNum,
            Nic: this.state.UNic
        }
        userservice.updateItem(this.state.upID, user).then(
            this.setState({
                update: false
            })
        )
    }

    updateState =(id,customername, address, phoneNum, Nic) => {
        this.setState({
            update: true,
            upID: id,
            Ucustomername: customername,
            Uaddress: address,
            UphoneNum: phoneNum,
            UNic: Nic
        })
        console.log("update", this.state.update)
    }

 
    refreshitems(){
        userservice.getAllItems()
            .then(
                response=> {
                    this.setState({user : response.data})
                    console.log(response)
                }
            )
    }
    render(){
        return(
            <div>
                {!(this.state.update) ? (
                    <div>
                    <h1>User list</h1>
                    <table width="50%" border="1">
                        <thead>
                            <tr>
                                <th>Customer Name</th>
                                <th>Address</th>
                                <th>Phonenumber</th>
                                <th>Nic</th>
                             
    
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.user.map(
                                    user => (
                                    <tr key = {user.id}>
                                        <td>{user.customername}</td>
                                        <td>{user.address}</td>
                                        <td>{user.phoneNum}</td>
                                        <td>{user.Nic}</td>
                                        
                                    </tr>)
                                )
                            }
                        </tbody>
                    </table>

<h1>Add User Form</h1>
                    <form onSubmit={this.handleSubmit}>
                        Customer Name<br/>
                        <input type="text" value={this.state.customername} onChange={(e)=>{this.setState({customername: e.target.value})}} />
                        <br />Address<br/>
                        <input type="text" value={this.state.address} onChange={(e)=>{this.setState({address: e.target.value})}} />
                        <br />Phonenumber<br/>
                        <input type="text" value={this.state.phoneNum} onChange={(e)=>{this.setState({phoneNum: e.target.value})}} />
                        <br/>Nic<br />
                        <input type="text" value={this.state.Nic} onChange={(e)=>{this.setState({Nic: e.target.value})}} />
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
export default userView;