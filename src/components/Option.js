import { Button, Modal, Stack } from "react-bootstrap";
import CartItem from "./CartItem";
import OptionTab from "./OptionTab";
import optionData from "../data/optionData.json";
import { useState } from "react";

// 옵션 리스트 보여주는 화면
function Option({ itemData, onAdd, ...props }) {
  const [options, setOptions] = useState([]);

  function handleOptionClick(option) {
    console.log(option.title);
    setOptions((value) => [...value, option.title]);
  }
  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title>옵션 선택</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Stack gap={3}>
          <CartItem data={itemData} options={options} />
          {optionData.map((category, index) => (
            <OptionTab
              key={index}
              data={category}
              onDataClick={handleOptionClick}
            />
          ))}
        </Stack>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => onAdd(itemData)}>추가</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Option;
