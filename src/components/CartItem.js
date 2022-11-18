import { Card, CloseButton, Col, Image, Row } from "react-bootstrap";
import { useState } from "react";
import NumberSpinner from "./NumberSpinner";
import bowl from "../images/bowl.png";

function CartItem({ index, data, onRemove }) {
  const [quantity, setQuantity] = useState(1);

  function handleChange(value) {
    setQuantity(value);
  }

  return (
    <Card>
      <Card.Header>
        {data.title}
        <CloseButton className="float-end" onClick={() => onRemove(index)} />
      </Card.Header>
      <Row className="g-0">
        <Col xs={5}>
          <Image
            width="100%"
            height={128}
            src={bowl}
            style={{
              objectFit: "contain",
              background: "WhiteSmoke",
            }}
          />
        </Col>
        <Col>
          <Card.Body style={{ height: "100%" }} className="d-flex flex-column">
            <Card.Subtitle className="mb-2 text-muted">옵션목록</Card.Subtitle>
            <NumberSpinner
              className="mt-auto"
              value={quantity}
              onChange={handleChange}
            />
          </Card.Body>
        </Col>
        <Card.Footer className="text-end">
          {(data.price * quantity).toLocaleString()}원
        </Card.Footer>
      </Row>
    </Card>
  );
}

export default CartItem;
