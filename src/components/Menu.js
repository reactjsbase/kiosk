import { Container, Nav, Tab } from "react-bootstrap";
import MenuList from "./MenuList";
import menuData from "../data/menuData.json";
import Option from "./Option";
import { useState } from "react";

function Menu({ addCartItem, ...props }) {
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
    <Container fluid className="vh-100" {...props}>
      <Tab.Container defaultActiveKey={0}>
        <Nav variant="tabs">
          {menuData.map((category, index) => (
            <Nav.Item key={index}>
              <Nav.Link eventKey={index}>{category.title}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
        <Tab.Content className="h-100 position-relative">
          {menuData.map((category, index) => (
            <Tab.Pane
              className="h-100 position-absolute"
              key={index}
              eventKey={index}
              style={{ overflowX: "hidden" }}
            >
              <div className="pt-3 pb-4">
                <MenuList
                  items={category.items}
                  onItemClick={handleItemClick}
                />
              </div>
            </Tab.Pane>
          ))}
        </Tab.Content>
      </Tab.Container>
      <Option
        itemData={itemData}
        show={modalShow}
        onHide={handleClose}
        onAdd={handleAdd}
      />
    </Container>
  );
}

export default Menu;
