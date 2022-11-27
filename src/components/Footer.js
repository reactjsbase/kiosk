import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Row, Stack } from "react-bootstrap";
import { useEffect, useState } from "react";

function Footer({ cart, nextRoute }) {
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  // 수량 계산
  useEffect(() => {
    let quantity = 0;
    cart.forEach((cartItem) => (quantity += cartItem.quantity));
    setQuantity(quantity);
  }, [cart]);

  // 합계 계산
  useEffect(() => {
    let total = 0;
    cart.forEach(({ item, options, quantity }) => {
      let price = item.price;
      options.forEach((category) => {
        category.items.forEach((option) => {
          price += option.price;
        });
      });
      total += price * quantity;
    });
    setTotal(total);
  }, [cart]);

  return (
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
                {quantity}
              </Stack>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-grid mx-auto">
          <Button variant="secondary" size="lg" onClick={() => navigate("/")}>
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
                {total.toLocaleString()}원
              </Stack>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-grid mx-auto">
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate(nextRoute)}
          >
            결제
          </Button>
        </Col>
      </Row>
    </Stack>
  );
}

export default Footer;
