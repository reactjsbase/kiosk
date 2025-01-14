import { Card } from "react-bootstrap";
import bowl from "../images/bowl.png";

function Item({ data, onClick }) {
  return (
    <Card onClick={() => onClick(data)}>
      <div style={{ position: "relative" }}>
        <Card.Img
          src={bowl}
          height={160}
          style={{
            objectFit: "contain",
            background: "WhiteSmoke",
          }}
          variant="top"
        />
        <div style={{ position: "absolute", top: 0 }}>
          <Card.Img
            height={160}
            style={{ objectFit: "contain" }}
            src={require(`../images/${data.id}.png`)}
          />
        </div>
      </div>
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{data.gram}g</Card.Subtitle>
        <Card.Text>{data.price.toLocaleString()}원</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Item;
