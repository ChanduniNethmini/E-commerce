import react,{Component} from "react";
import ItemView from "./components/itemsView";
import additems from "./components/additems";
import {BrowserRouter,Route} from 'react-router-dom';
import { CartProvider } from "react-use-cart";
import Cart from "./components/Cart";
import data from "./components/data";
import Itemcard from "./components/Itemcard";
import Home from "./components/Home";
import edititems from "./components/edititems";
import userView from './components/userView';
import traderView from './components/traderView';
import promoView from "./components/promoView";

export default class app extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <BrowserRouter>
            <div>
            <CartProvider>
        
                <Route path="/" exact component={Home}></Route>
                <Route path="/cart" exact component={Cart}></Route>
                <Route path="/additems" exact component={ItemView}></Route>
                <Route path="/edititems" exact component={edititems}></Route>
                <Route path="/adduser" exact component={userView}></Route>
                <Route path="/addtrader" exact component={traderView}></Route>
                <Route path="/addpromotion" exact component={promoView}></Route>
                </CartProvider>
            </div>
            </BrowserRouter>
            );

    }
}