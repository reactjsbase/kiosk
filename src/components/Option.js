import { Card, Col, Image, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { run } from "holderjs";
import PropTypes from "prop-types";
import NumberSpinner from "./NumberSpinner";

function Option({ name, price }) {
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
        <Col xs={5}>
          <Image className="rounded-start" src="holder.js/100px180" />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{(price * quantity).toLocaleString()}원</Card.Text>
            <NumberSpinner value={quantity} onChange={onChange} />
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

Option.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
};

Option.defaultProps = {
  name: "그래놀라",
  price: 300,
};

export default Option;
