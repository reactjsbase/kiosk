import { Container, Stack } from "react-bootstrap";
import CartItem from "./CartItem";

// 장바구니 컨테이너
function Cart({ cart, removeCartItem }) {
  return (
    <div style={{ background: "SeaGreen" }}>
      <Container fluid className="px-5 pt-3">
        <h2 style={{ color: "white" }}>
          <strong>카트</strong>
        </h2>
      </Container>
      <Stack gap={3} className="px-5 pb-4 d-flex flex-row overflow-auto">
        {cart.map((data, index) => (
          <CartItem
            style={{ width: "22rem", minWidth: "22rem" }}
            index={index}
            key={index}
            item={data.item}
            options={data.options}
            onRemove={removeCartItem}
          />
        ))}
      </Stack>
    </div>
  );
}

export default Cart;
