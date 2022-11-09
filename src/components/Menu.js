import { Container, Tab, Tabs } from "react-bootstrap";
import MenuList from "./MenuList";
import menuData from "../data/menuData.json";

function Menu() {
  return (
    <Container className="p-3">
      <Tabs defaultActiveKey={100} className="mb-3 h3">
        {menuData.map((menuListData) => (
          <Tab
            key={menuListData.id}
            eventKey={menuListData.id}
            title={menuListData.title}
          >
            <MenuList items={menuListData.items} />
          </Tab>
        ))}
      </Tabs>
    </Container>
  );
}

export default Menu;
