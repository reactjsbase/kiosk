import { Button, Modal } from "react-bootstrap";
import CartItem from "./CartItem";
import OptionTab from "./OptionTab";
import optionData from "../data/optionData.json";

// 옵션 리스트 보여주는 화면
function Option({ itemData, onAdd, ...props }) {
  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>옵션 선택</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CartItem data={itemData} />
        <h2>옵션선택</h2>
        {/* 옵션 컨테이너 */}
        {optionData.map((category, index) => (
          <OptionTab key={index} data={category} />
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => onAdd(itemData)}>추가</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Option;
