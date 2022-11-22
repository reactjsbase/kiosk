import { useNavigate } from "react-router-dom";
import { Button, Stack } from "react-bootstrap";
import Banner from "../components/Banner";
import Cart from "../components/Cart";
import Menu from "../components/Menu";

function Order({ cart, addCartItem, removeCartItem }) {
  const navigate = useNavigate();

  return (
    <div className="vh-100 d-flex flex-column">
      <Banner />
      <Menu addCartItem={addCartItem} />
      <div>
        <Cart cart={cart} removeCartItem={removeCartItem} />
        <Stack gap={3} className="p-3">
          <Button
            variant="outline-danger"
            size="lg"
            onClick={() => navigate("/")}
          >
            취소
          </Button>
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate("/confirm")}
          >
            결제
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default Order;
