import CartItem from "./CartItem";

// 장바구니 컨테이너
function Cart() {
  return (
    <div className="d-flex flex-row">
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
}

export default Cart;