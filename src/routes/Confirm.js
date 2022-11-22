import { useNavigate } from "react-router-dom";
import { Button, Container, Stack } from "react-bootstrap";
import Banner from "../components/Banner";
import CartItem from "../components/CartItem";

function Confirm({ cart, removeCartItem }) {
  const navigate = useNavigate();
  return (
    <div className="vh-100 d-flex flex-column">
      <Banner />
      <Container className="p-3 d-flex flex-column flex-fill">
        <h2>
          <strong>주문 확인</strong>
        </h2>
        <div className="flex-fill position-relative overflow-auto">
          <Stack gap={3} className="position-absolute">
            {cart.map((data, index) => (
              <CartItem index={index} data={data} onRemove={removeCartItem} />
            ))}
          </Stack>
        </div>
      </Container>
      <div>
        <Stack gap={3} className="p-3">
          <Button
            variant="outline-danger"
            size="lg"
            onClick={() => navigate("/order")}
          >
            취소
          </Button>
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate("/payment")}
          >
            결제
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default Confirm;
