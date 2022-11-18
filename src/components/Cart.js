import { Col, Container, Row } from "react-bootstrap";
import CartItem from "./CartItem";

// 장바구니 컨테이너
function Cart({ cart, removeCartItem }) {
  return (
    <div style={{ background: "SeaGreen" }}>
      <Container className="p-3">
        <h2 style={{ color: "white" }}>
          <strong>카트</strong>
        </h2>
        <Row
          style={{ height: 212 }}
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
