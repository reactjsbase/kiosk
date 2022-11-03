import Item from "./Item";
import { Col, Row } from "react-bootstrap";

// 아이템 컨테이너
function MenuList() {
  return (
    <Row xs={3} className="g-4">
      {Array.from({ length: 8 }).map(() => (
        <Col>
          <Item />
        </Col>
      ))}
    </Row>
  );
}

export default MenuList;
