import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Order from "./routes/Order";
import Home from "./routes/Home";
import Confirm from "./routes/Confirm";
import Payment from "./routes/Payment";
import { useState } from "react";

function App() {
  // 장바구니
  const [cart, setCart] = useState([]);

  function addCartItem(cartItem) {
    setCart((value) => [...value, cartItem]);
  }

  function removeCartItem(index) {
    setCart((value) => value.filter((_, i) => i !== index));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/order"
          element={
            <Order
              cart={cart}
              removeCartItem={removeCartItem}
              addCartItem={addCartItem}
            />
          }
        />
        <Route
          path="/confirm"
          element={<Confirm cart={cart} removeCartItem={removeCartItem} />}
        />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
