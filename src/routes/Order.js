import { useNavigate } from "react-router-dom";
import { Button, Stack } from "react-bootstrap";
import Banner from "../components/Banner";
import Cart from "../components/Cart";
import Menu from "../components/Menu";

function Order({ cart, addCartItem, removeCartItem }) {
  const navigate = useNavigate();

  const priceAdd =() => {
    const itemPrice = cart.map((item)=>{
      return item.price
    })

    const result = itemPrice.reduce(function add(sum, currValue) {
      return sum + currValue;
    }, 0);

    return result
  }



  return (
    <div className="vh-100 d-flex flex-column">
      <Banner />
      <Menu
        addCartItem={addCartItem}
        className="px-5 pt-4 d-flex flex-column flex-fill"
      />
      <div>
        <Cart cart={cart} removeCartItem={removeCartItem} />
        <Stack gap={3} className="p-3">
          <div className="row justify-content-start">
            <div className="card col-8">
              <div className="card-body">
                <span style={{paddingRight:"10px"}}>수량</span>
                <span>{cart.length.toLocaleString()}</span>
              </div>
            </div>
            <div class="d-grid col-4 mx-auto">
              <Button
                variant="outline-danger"
                size="lg"
                onClick={() => navigate("/")}
              >
                취소
              </Button>
            </div>
          </div>
          <div className="row justify-content-start">
            <div className="card col-8">
              <div className="card-body">
                <span style={{paddingRight:"10px"}}>합계</span>
                <span>{priceAdd().toLocaleString()}</span>
              </div>
            </div>
            <div className="d-grid col-4 mx-auto">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate("/confirm")}
              >
                결제
              </Button>
            </div>
          </div>
        </Stack>
      </div>
    </div>
  );
}

export default Order;
