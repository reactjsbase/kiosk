import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Cart from "../components/Cart";
import Menu from "../components/Menu";

function Order({ cart, addCartItem, removeCartItem }) {
  return (
    <>
      <Banner />
      <Menu addCartItem={addCartItem} />
      <Cart cart={cart} removeCartItem={removeCartItem} />
      <h1>
        <Link to="/">취소</Link> <Link to="/confirm">결제</Link>
      </h1>
    </>
  );
}

export default Order;
