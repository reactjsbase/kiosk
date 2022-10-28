import { Card } from "react-bootstrap";
import { useEffect } from "react";
import { run } from "holderjs";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Item({ name, price }) {
  useEffect(() => {
    run();
  });

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price.toLocaleString()}원</Card.Text>
      </Card.Body>
      <Link to="/options" className="stretched-link" />
    </Card>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
};

Item.defaultProps = {
  name: "요거트",
  price: 5000,
};

export default Item;
