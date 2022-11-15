import { Container, Tab, Tabs } from "react-bootstrap";
import MenuList from "./MenuList";
import menuData from "../data/menuData.json";
import Options from "./Options";
import { useState } from "react";

function Menu({ addCartItem }) {
  // 옵션창 표시 여부
  const [modalShow, setModalShow] = useState(false);

  // 옵션창에 표시되는 아이템 데이터
  const [itemData, setItemData] = useState();

  // 메뉴 아이템 클릭 시
  function handleItemClick(data) {
    setItemData(data);
    setModalShow(true);
  }

  // 카트에 아이템 추가 시
  function handleAdd(cartItem) {
    setModalShow(false);
    addCartItem(cartItem);
  }

  // 옵션창 닫을 시
  function handleClose() {
    setModalShow(false);
  }

  return (
    <Container className="p-3">
      <Tabs defaultActiveKey={0} className="mb-3">
        {menuData.map((category, index) => (
          <Tab key={index} eventKey={index} title={category.title}>
            <MenuList items={category.items} onItemClick={handleItemClick} />
          </Tab>
        ))}
      </Tabs>
      <Options
        itemData={itemData}
        show={modalShow}
        onHide={handleClose}
        onAdd={handleAdd}
      />
    </Container>
  );
}

export default Menu;
