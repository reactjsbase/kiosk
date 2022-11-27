import Banner from "../components/Banner";
import Cart from "../components/Cart";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

function Order({ cart, addCartItem, removeCartItem, updateQuantity }) {
  return (
    <div className="vh-100 d-flex flex-column">
      <Banner />
      <Menu
        addCartItem={addCartItem}
        className="px-5 pt-4 d-flex flex-column flex-fill"
      />
      <div>
        <Cart
          cart={cart}
          updateQuantity={updateQuantity}
          removeCartItem={removeCartItem}
        />
        <Footer cart={cart} nextRoute="/confirm" />
      </div>
    </div>
  );
}

export default Order;
