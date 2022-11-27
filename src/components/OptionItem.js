import { Card } from "react-bootstrap";

function OptionItem({ data, onClick, selected }) {
  return (
    <Card
      style={{ width: "8rem", minWidth: "8rem" }}
      onClick={() => onClick(data)}
      border={selected && "primary"}
    >
      <Card.Img
        style={{ background: "WhiteSmoke" }}
        width="100%"
        variant="top"
        src={require(`../images/${data.id}.png`)}
      />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>{data.price.toLocaleString()}원</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default OptionItem;
