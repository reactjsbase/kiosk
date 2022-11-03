import { Col, Container, Row } from "react-bootstrap";
import CartItem from "./CartItem";

// 장바구니 컨테이너
function Cart() {
  return (
    <div style={{ background: "AntiqueWhite" }}>
      <Container className="p-3">
        <h3>카트</h3>
        <Row xs={3} className="d-flex flex-row flex-nowrap overflow-auto">
          {Array.from({ length: 6 }).map(() => (
            <Col>
              <CartItem />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Cart;
