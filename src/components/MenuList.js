import Item from "./Item";
import { Col, Row } from "react-bootstrap";

// 아이템 컨테이너
function MenuList({ items }) {
  return (
    <Row xs={2} lg={3} xxl={4} className="g-4">
      {items.map((item) => (
        <Col key={item.id}>
          <Item data={item} />
        </Col>
      ))}
    </Row>
  );
}

export default MenuList;
