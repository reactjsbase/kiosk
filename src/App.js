import { BrowserRouter, Route, Routes } from "react-router-dom";
import Order from "./routes/Order";
import Home from "./routes/Home";
import Confirm from "./routes/Confirm";
import Payment from "./routes/Payment";
import { useState } from "react";

function App() {
  // 카트
  const [cart, setCart] = useState([]);

  // 카트에 아이템 추가
  function addCartItem(cartItem) {
    setCart((value) => [...value, cartItem]);
  }

  // 카트에 아이템 제거
  function removeCartItem(index) {
    setCart((value) => value.filter((_, i) => i !== index));
    setCart((value) => [...value]);
  }

  // 카트 비우기
  function clearCart() {
    setCart([]);
  }

  // 카트 아이템 수량 변경
  function updateQuantity(quantity, index) {
    setCart((value) => {
      value[index].quantity = quantity;
      return [...value];
    });
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home clearCart={clearCart} />} />
        <Route
          path="/order"
          element={
            <Order
              cart={cart}
              updateQuantity={updateQuantity}
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
