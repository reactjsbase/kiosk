import { useNavigate } from "react-router-dom";
import { Button, Container, Stack } from "react-bootstrap";
import Banner from "../components/Banner";
import Cart from "../components/Cart";
import Menu from "../components/Menu";

function Order({ cart, addCartItem, removeCartItem }) {
  const navigate = useNavigate();

  return (
    <>
      <Banner />
      <Menu addCartItem={addCartItem} />
      <Container fluid className="p-0 fixed-bottom bottom-0 bg-white">
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
      </Container>
    </>
  );
}

export default Order;
