import { Container, Tab, Tabs } from "react-bootstrap";
import MenuList from "./MenuList";

function Menu() {
  return (
    <Container className="p-3">
      <Tabs defaultActiveKey="yogurt" className="mb-3 h3">
        <Tab eventKey="yogurt" title="그릭요거트">
          <MenuList />
        </Tab>
        <Tab eventKey="smoothie" title="요거트스무디">
          <MenuList />
        </Tab>
        <Tab eventKey="coffee" title="커피">
          <MenuList />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Menu;
