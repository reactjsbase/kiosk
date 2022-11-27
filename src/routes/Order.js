import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Row, Stack } from "react-bootstrap";
import Banner from "../components/Banner";
import Cart from "../components/Cart";
import Menu from "../components/Menu";

function Order({ cart, addCartItem, removeCartItem }) {
  const navigate = useNavigate();

  const priceAdd = () => {
    const itemPrice = cart.map((item) => {
      return item.price;
    });

    const result = itemPrice.reduce(function add(sum, currValue) {
      return sum + currValue;
    }, 0);

    return result;
  };

  return (
    <div className="vh-100 d-flex flex-column">
      <Banner />
      <Menu
        addCartItem={addCartItem}
        className="px-5 pt-4 d-flex flex-column flex-fill"
      />
      <div>
        <Cart cart={cart} removeCartItem={removeCartItem} />
        <Stack gap={3} className="px-3 py-4 bg-dark">
          <Row>
            <Col xs={8}>
              <Card>
                <Card.Body>
                  <Stack
                    gap={2}
                    direction="horizontal"
                    className="align-items-start"
                  >
                    <Card.Title className="m-0">수량</Card.Title>
                    {cart.length}
                  </Stack>
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-grid mx-auto">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate("/")}
              >
                취소
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={8}>
              <Card>
                <Card.Body>
                  <Stack
                    gap={2}
                    direction="horizontal"
                    className="align-items-start"
                  >
                    <Card.Title className="m-0">합계</Card.Title>
                    {priceAdd().toLocaleString()}원
                  </Stack>
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-grid mx-auto">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate("/confirm")}
              >
                결제
              </Button>
            </Col>
          </Row>
        </Stack>
      </div>
    </div>
  );
}

export default Order;
