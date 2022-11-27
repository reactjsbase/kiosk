import { Button, Modal, Stack } from "react-bootstrap";
import CartItem from "./CartItem";
import OptionTab from "./OptionTab";
import optionData from "../data/optionData.json";
import { useEffect, useState } from "react";

// 옵션 리스트 보여주는 화면
function Option({ itemData, onAdd, onHide, ...props }) {
  const [options, setOptions] = useState(
    optionData.map((category) => ({ ...category, items: [] }))
  );

  function handleOptionClick(option, categoryTitle) {
    setOptions((value) => {
      value.forEach((category) => {
        if (category.title === categoryTitle) {
          category.items[0] = option;
        }
      });

      return [...value];
    });
  }

  useEffect(() => {
    setOptions(optionData.map((category) => ({ ...category, items: [] })));
  }, [onHide]);

  return (
    <Modal onHide={onHide} {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title>옵션 선택</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Stack gap={3}>
          <CartItem item={itemData} options={options} />
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
          onClick={() => onAdd({ item: itemData, options: [...options] })}
        >
          추가
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Option;
