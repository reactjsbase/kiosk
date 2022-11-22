import { Card } from "react-bootstrap";
import { useEffect } from "react";
import { run } from "holderjs";

function OptionItem({ data }) {
  useEffect(() => {
    run();
  });

  return (
    <Card>
      <Card.Img variant="" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>{data.price.toLocaleString()}원</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default OptionItem;
