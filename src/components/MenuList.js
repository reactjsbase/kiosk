import Item from "./Item";
import { Col, Row } from "react-bootstrap";

// 아이템 컨테이너
function MenuList({ items, onItemClick }) {
  return (
    <Row xs={2} md={3} lg={4} className="g-3">
      {items.map((itemData, index) => (
        <Col key={index}>
          <Item data={itemData} onClick={onItemClick} />
        </Col>
      ))}
    </Row>
  );
}

export default MenuList;
