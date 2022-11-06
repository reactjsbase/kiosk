import React, { useState } from 'react' 
import Nav from './components/Nav';
import './App.css'
import {
BrowserRouter as Router, Switch, Route,
} from "react-router-dom";
function ConfirmItem() {
const [cartItems, setCartItems] = useState(initialState.cartItems);
return (
<Router>
<Nav cartItems={cartItems}/>
<Switch>
<Route exact={true} path="/">
<ItemListContainer items={items} setCartItems={setCartItems} cartItems={cartItems }/>
{/* props로 배열 전달 */}
</Route>
<Route path=" /Cart">
<ShoppingCart cartItems={cartItems} items={items} setCartItems={setCartItems}/>
</Route>
</Switch>
</Router>
);
}
export default ConfirmItem;