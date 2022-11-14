import { useNavigate } from "react-router-dom";
import { Button, Row, Container, Stack } from "react-bootstrap";
import Banner from "../components/Banner";
import Cart from "../components/Cart";
import Menu from "../components/Menu";

function Order({ cart, addCartItem, removeCartItem }) {
  const navigate = useNavigate();

  return (
    <>
      <Banner />
      <Menu addCartItem={addCartItem} />
      <Cart cart={cart} removeCartItem={removeCartItem} />
      <Container fluid className="fixed-bottom bottom-0 bg-white">
        <Stack gap={3} className="p-3">
          <Row>
            <Button variant="outline-danger" size="lg">
              취소
            </Button>
          </Row>
          <Row>
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                navigate("/payment");
              }}
            >
              결제
            </Button>
          </Row>
        </Stack>
      </Container>
    </>
  );
}

export default Order;
