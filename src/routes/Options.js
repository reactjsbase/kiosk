import { Button, Modal } from "react-bootstrap";
import CartItem from "../components/CartItem";
import Option from "../components/Option";

// 옵션 리스트 보여주는 화면
function Options({ itemData, onAdd, ...props }) {
  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>옵션 선택</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CartItem data={itemData} />
        <h2>옵션선택</h2>
        {/* 옵션 컨테이너 */}
        <Option />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => onAdd(itemData)}>추가</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Options;
