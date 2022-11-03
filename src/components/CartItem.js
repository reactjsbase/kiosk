import { Card, CloseButton, Col, Image, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { run } from "holderjs";
import PropTypes from "prop-types";
import NumberSpinner from "./NumberSpinner";

function CartItem({ name, price }) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    run();
  });

  function onChange(value) {
    setQuantity(value);
  }

  return (
    <Card>
      <Row className="g-0">
        <Col md="5">
          <Image className="rounded-start" src="holder.js/100px180" />
        </Col>
        <Col>
          <Card.Body>
            <Card.Text>
              <CloseButton className="float-end" />
            </Card.Text>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{(price * quantity).toLocaleString()}원</Card.Text>
            <NumberSpinner value={quantity} onChange={onChange} />
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

CartItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
};

CartItem.defaultProps = {
  name: "요거트",
  price: 5000,
};

export default CartItem;
