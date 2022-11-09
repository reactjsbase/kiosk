import { Col, Container, Row } from "react-bootstrap";
import CartItem from "./CartItem";

// 장바구니 컨테이너
function Cart({ cart, removeCartItem }) {
  return (
    <div style={{ background: "AntiqueWhite" }}>
      <Container className="p-3">
        <h2>카트</h2>
        <Row
          xs={2}
          lg={3}
          xxl={4}
          className="d-flex flex-row flex-nowrap overflow-auto"
        >
          {cart.map((data, index) => (
            <Col key={index}>
              <CartItem index={index} data={data} onRemove={removeCartItem} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Cart;
