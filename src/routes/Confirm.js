import { useNavigate } from "react-router-dom";
import { Button, Container, Stack } from "react-bootstrap";
import Banner from "../components/Banner";
import CartItem from "../components/CartItem";
import Footer from "../components/Footer";

function Confirm({ cart, removeCartItem }) {
  const navigate = useNavigate();
  return (
    <div className="vh-100 d-flex flex-column">
      <Banner />
      <Container className="p-3 d-flex flex-column flex-fill">
        <h2>주문 확인</h2>
        <div className="flex-fill position-relative overflow-auto">
          <Stack gap={3} className="position-absolute">
            {cart.map((data, index) => (
              <CartItem
                key={index}
                index={index}
                item={data.item}
                options={data.options}
                imageSize={4}
                onRemove={removeCartItem}
              />
            ))}
          </Stack>
        </div>
      </Container>
      <Footer cart={cart} nextRoute="/payment" />
    </div>
  );
}

export default Confirm;
