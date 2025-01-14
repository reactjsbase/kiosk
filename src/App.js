import { BrowserRouter, Route, Routes } from "react-router-dom";
import Order from "./routes/Order";
import Home from "./routes/Home";
import Confirm from "./routes/Confirm";
import Payment from "./routes/Payment";
import { useCallback, useState } from "react";

function App() {
  // 카트
  const [cart, setCart] = useState([]);

  // 카트에 아이템 추가
  function addCartItem(cartItem) {
    let hasItem = false;

    // 동일 아이템이 있는 경우
    cart.every((item, index) => {
      if (
        JSON.stringify(item.item) === JSON.stringify(cartItem.item) &&
        JSON.stringify(item.options) === JSON.stringify(cartItem.options)
      ) {
        setCart((value) => {
          value[index].quantity += cartItem.quantity;
          return [...value];
        });
        hasItem = true;
        return false;
      }
      return true;
    });

    // 동일 아이템이 없는 경우
    if (!hasItem) setCart((value) => [...value, cartItem]);
  }

  // 카트에 아이템 제거
  function removeCartItem(index) {
    setCart((value) => [...value.filter((_, i) => i !== index)]);
  }

  // 카트 비우기
  const clearCart = useCallback(() => setCart([]), []);

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
          path="/order/:id"
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
          path="/confirm/:id"
          element={
            <Confirm
              cart={cart}
              updateQuantity={updateQuantity}
              removeCartItem={removeCartItem}
            />
          }
        />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
