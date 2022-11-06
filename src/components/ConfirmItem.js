import { Col, Container } from "react-bootstrap";
import CartItem from "./CartItem";
import Option from "./Option";

function ConfirmItem() {
  return (
    <div style={{ background: "AntiqueWhite" }}>
      <Container className="p-3">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <CartItem />
            <Option />
          </Col>
        ))}
      </Container>
    </div>
  );
}

export default ConfirmItem;
