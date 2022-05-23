import react,{Component} from "react";
import TraderService from "../API/traderservice.js";
class traderView extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            trader : [],
            empName:"",
            age:"",
            qualification:"",
            position:"",
        }
        this.refreshitems= this.refreshitems.bind(this)
    }
        
    componentDidMount(){
        this.refreshitems()
    }

  

    handleSubmit = async (event) => {
        event.preventDefault();
        const trader = {
            empName: this.state.empName,
            age: this.state.age,
            qualification: this.state.qualification,
            position: this.state.position
        }
        TraderService.createItem(trader).then(
            this.setState({
                empName: "",
                age: "",
                qualification: "",
                position:""
            })
        )
    }


 
    refreshitems(){
        TraderService.getAllItems()
            .then(
                response=> {
                    this.setState({trader : response.data})
                    console.log(response)
                }
            )
    }
    render(){
        return(
            <div>
                {!(this.state.update) ? (
                    <div>
                    <h1>Trader list</h1>
                    <table width="50%" border="1">
                        <thead>
                            <tr>
                                <th>Employee Name</th>
                                <th>Age</th>
                                <th>Qualification</th>
                                <th>Position</th>
                             
    
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.trader.map(
                                    user => (
                                    <tr key = {user.id}>
                                        <td>{user.empName}</td>
                                        <td>{user.age}</td>
                                        <td>{user.qualification}</td>
                                        <td>{user.position}</td>
                                        
                                    </tr>)
                                )
                            }
                        </tbody>
                    </table>

<h1>Add Employee Form</h1>
                    <form onSubmit={this.handleSubmit}>
                        Employee Name<br/>
                        <input type="text" value={this.state.empName} onChange={(e)=>{this.setState({empName: e.target.value})}} />
                        <br />Age<br/>
                        <input type="text" value={this.state.age} onChange={(e)=>{this.setState({age: e.target.value})}} />
                        <br />Qualification<br/>
                        <input type="text" value={this.state.qualification} onChange={(e)=>{this.setState({qualification: e.target.value})}} />
                        <br/>Position<br />
                        <input type="text" value={this.state.position} onChange={(e)=>{this.setState({position: e.target.value})}} />
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
export default traderView;