import { Button, Image, Modal } from "react-bootstrap";
import CartItem from "./CartItem";
import Option from "./Option";
import bowl from "../images/bowl.png";

// 옵션 리스트 보여주는 화면
function Options({ itemData, onAdd, ...props }) {
  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>옵션 선택</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image
          src={bowl}
          width="100%"
          height={160}
          style={{
            objectFit: "contain",
            background: "WhiteSmoke",
          }}
        />

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
