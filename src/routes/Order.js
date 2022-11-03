import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Cart from "../components/Cart";
import Menu from "../components/Menu";
import styled from 'styled-components';


function Order() {

  return (
    <>
    <BannerDiv>
      <Banner />
    </BannerDiv>
      <Menu />
      <Cart />
      
        <PaymentMainDiv>
          <Link to="/confirm">
            <CancelSubDiv>
              <h1>취소</h1>
            </CancelSubDiv>
          </Link>
          <Link to="/confirm">
            <PaymentSubDiv>
              <h1>결제</h1>
            </PaymentSubDiv>
          </Link>
        </PaymentMainDiv>
      </> 
);
}
const BannerDiv = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
`;

const PaymentMainDiv = styled.div`
  width: 100%;
  height: 160px;
  position: fixed;
  display: flex;
  bottom: 0;
  div > h1 {
    color: #000;
  }
`;
const PaymentSubDiv = styled.div`
  height: 100%;
  width: 50vw;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CancleSubDiv = styled.div`
  height: 100%;
  width: 50vw;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Order;
