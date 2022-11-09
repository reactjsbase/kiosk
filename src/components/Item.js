import { Card } from "react-bootstrap";
import { useEffect } from "react";
import { run } from "holderjs";

function Item({ data, onClick }) {
  useEffect(() => {
    run();
  });

  return (
    <Card onClick={() => onClick(data)}>
      <Card.Img height={180} variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>{data.price.toLocaleString()}원</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Item;
