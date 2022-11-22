import { Card } from "react-bootstrap";
import { useEffect } from "react";
import { run } from "holderjs";

function OptionItem({ data }) {
  useEffect(() => {
    run();
  });

  return (
    <Card style={{ width: "8rem", minWidth: "8rem" }}>
      <Card.Img
        style={{ background: "WhiteSmoke" }}
        width="100%"
        variant="top"
        src={require("../images/fruit-apple.png")}
      />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>{data.price.toLocaleString()}원</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default OptionItem;
