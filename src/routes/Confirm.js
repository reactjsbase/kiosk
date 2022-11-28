import { Container, Stack } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import CartItem from "../components/CartItem";
import Footer from "../components/Footer";

function Confirm({ cart, updateQuantity, removeCartItem }) {
  const { id } = useParams();

  return (
    <div className="vh-100 d-flex flex-column">
      <Banner />
      <Container fluid className="p-0 d-flex flex-column flex-fill">
        <div className="px-5 pt-4 pb-3 bg-dark text-white">
          <h2>주문 확인</h2>
          <h5>{id === "forhere" ? "매장" : "포장"}</h5>
        </div>
        <div className="px-5 d-flex flex-fill">
          <div className="d-flex flex-fill position-relative overflow-auto justify-content-center">
            <Stack gap={3} className="position-absolute py-4">
              {cart.map((data, index) => (
                <CartItem
                  style={{ maxWidth: "50rem" }}
                  key={index}
                  index={index}
                  item={data.item}
                  options={data.options}
                  quantity={data.quantity}
                  onChange={updateQuantity}
                  onRemove={removeCartItem}
                  imageSize={4}
                />
              ))}
            </Stack>
          </div>
        </div>
      </Container>
      <div>
        <Footer cart={cart} nextRoute="/payment" />
      </div>
    </div>
  );
}

export default Confirm;
