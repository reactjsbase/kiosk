import { Col, Container } from "react-bootstrap";
import CartItem from "./CartItem";

function ConfirmItem({ cart, removeCartItem }) {
  return (
    <div style={{ background: "AntiqueWhite" }}>
      <Container className="p-3">
        {cart.map((data, index) => (
          <Col key={index}>
            <CartItem index={index} data={data} onRemove={removeCartItem} />
          </Col>
        ))}
      </Container>
    </div>
  );
}

export default ConfirmItem;
