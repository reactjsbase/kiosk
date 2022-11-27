import { Card, Col, Image, Row, CloseButton } from "react-bootstrap";
import { useEffect, useState } from "react";
import NumberPicker from "./NumberPicker";
import bowl from "../images/bowl.png";
function CartItem({ index, item, options, onRemove, imageSize = 5, ...props }) {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(item.price);

  // 가격 계산
  useEffect(() => {
    setPrice(item.price);
    options.forEach((category) => {
      category.items.forEach((option) => {
        setPrice((price) => (price += option.price));
      });
    });
  }, [item, options]);

  function handleChange(value) {
    setQuantity(value);
  }

  return (
    <Card {...props}>
      <Card.Header>
        {item.title}
        {onRemove && (
          <CloseButton className="float-end" onClick={() => onRemove(index)} />
        )}
      </Card.Header>
      <Row className="g-0">
        <Col xs={imageSize} style={{ position: "relative" }}>
          {/* 그릇 이미지 */}
          <Image
            width="100%"
            src={bowl}
            style={{
              background: "WhiteSmoke",
            }}
          />

          {/* 메뉴 이미지 */}
          <div style={{ position: "absolute", top: 0 }}>
            <Image width="100%" src={require(`../images/${item.id}.png`)} />
          </div>

          {/* 옵션 이미지 */}
          {options.map((category, index) => (
            <div key={index}>
              {category.items.map((option, index) => (
                <div key={index} style={{ position: "absolute", top: 0 }}>
                  <Image
                    width="100%"
                    src={require(`../images/${option.id}.png`)}
                  />
                </div>
              ))}
            </div>
          ))}
        </Col>
        <Col>
          <Card.Body className="h-100 d-flex flex-column">
            {options.map((category, index) => (
              <Card.Subtitle key={index} className="mb-2 text-muted">
                {category.title}: {category.items.map((option) => option.title)}
              </Card.Subtitle>
            ))}
            <NumberPicker
              className="mt-auto"
              minValue={1}
              value={quantity}
              onChange={handleChange}
            />
          </Card.Body>
        </Col>
        <Card.Footer className="text-end">
          {(price * quantity).toLocaleString()}원
        </Card.Footer>
      </Row>
    </Card>
  );
}

export default CartItem;
