import { Button, Modal, Stack } from "react-bootstrap";
import CartItem from "./CartItem";
import OptionTab from "./OptionTab";
import optionData from "../data/optionData.json";
import { useEffect, useState } from "react";

// 옵션창
function Option({ itemData, onAdd, onHide, ...props }) {
  // 선택한 옵션 목록
  const [options, setOptions] = useState(
    optionData.map((category) => ({ ...category, items: [] }))
  );

  // 수량
  const [quantity, setQuantity] = useState(1);

  // 옵션 선택 시 옵션 목록 관리
  function handleOptionClick(option, categoryTitle) {
    setOptions((value) => {
      value.forEach((category) => {
        if (category.title === categoryTitle) {
          if (category.items[0] !== option) {
            category.items[0] = option;
          } else {
            category.items = [];
          }
        }
      });

      return [...value];
    });
  }

  // 옵션창 닫힐 때 값 초기화
  useEffect(() => {
    setOptions(optionData.map((category) => ({ ...category, items: [] })));
    setQuantity(1);
  }, [onHide]);

  return (
    <Modal onHide={onHide} {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title>옵션 선택</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Stack gap={3}>
          <CartItem
            item={itemData}
            options={options}
            quantity={quantity}
            onChange={setQuantity}
          />
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
        <Button
          variant="success"
          onClick={() =>
            onAdd({ item: itemData, options: [...options], quantity })
          }
        >
          추가
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Option;
