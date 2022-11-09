import { Card } from "react-bootstrap";
import { useEffect } from "react";
import { run } from "holderjs";
import { Link } from "react-router-dom";

function Item({ data = { title: "요거트", price: 5000 } }) {
  useEffect(() => {
    run();
  });

  return (
    <Card>
      <Card.Img height={180} variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>{data.price.toLocaleString()}원</Card.Text>
      </Card.Body>
      <Link to="/options" className="stretched-link" />
    </Card>
  );
}

export default Item;
