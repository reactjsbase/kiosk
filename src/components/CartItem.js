import { Card, CloseButton, Col, Image, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { run } from "holderjs";
import NumberSpinner from "./NumberSpinner";
// import menuData from "../data/menuData.json";

function CartItem({ index, data, onRemove }) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    run();
  });

  function handleChange(value) {
    setQuantity(value);
  }

  return (
    <Card>
      <Row className="g-0">
        <Col xs={5}>
          <Image className="rounded-start" src="holder.js/100px180" />
        </Col>
        <Col>
          <Card.Body>
            <Card.Text>
              <CloseButton
                className="float-end"
                onClick={() => onRemove(index)}
              />
            </Card.Text>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>{(data.price * quantity).toLocaleString()}원</Card.Text>
            <NumberSpinner value={quantity} onChange={handleChange} />
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default CartItem;
