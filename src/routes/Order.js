import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Cart from "../components/Cart";
import Menu from "../components/Menu";

function Order() {
  return (
    <>
      <Banner />
      <Menu />
      <Cart />
      <h1>
        <Link to="/">취소</Link> <Link to="/confirm">결제</Link>
      </h1>
    </>
  );
}

export default Order;
