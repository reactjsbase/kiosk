import Item from "./Item";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


// 메뉴 컨테이너
function Menu() {
  return (
    <>
      <Navbar bg="black" variant="dark">
        <Container>
          <Nav className="menu">
            <Nav.Link href="#yogurt">그릭요거트</Nav.Link>
            <Nav.Link href="#smoothie">요거트스무디</Nav.Link>
            <Nav.Link href="#coffee">커피</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Item />
    </>
  );
}

export default Menu;
