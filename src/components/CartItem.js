import { Card, Col, Image, Row, CloseButton } from "react-bootstrap";
import { useState } from "react";
import NumberPicker from "./NumberPicker";
import bowl from "../images/bowl.png";
function CartItem({ index, data, onRemove, options, ...props }) {
  const [quantity, setQuantity] = useState(1);

  function handleChange(value) {
    setQuantity(value);
  }

  return (
    <Card {...props}>
      <Card.Header>
        {data.title}
        <CloseButton className="float-end" onClick={() => onRemove(index)} />
      </Card.Header>
      <Row className="g-0">
        <Col xs={5}>
          <Image
            width="100%"
            src={bowl}
            style={{
              background: "WhiteSmoke",
            }}
          />
        </Col>
        <Col>
          <Card.Body className="h-100 d-flex flex-column">
            <Card.Subtitle className="mb-2 text-muted">{options}</Card.Subtitle>
            <NumberPicker
              className="mt-auto"
              minValue={1}
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
