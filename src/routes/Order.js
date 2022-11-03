import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Cart from "../components/Cart";
import Menu from "../components/Menu";
import styled from "styled-components";

function Order() {
  return (
    <>
      <BannerDiv>
        <Banner />
      </BannerDiv>
      <OrderContainer>
        <Menu />
        <Cart />
        <Menu />
        <Cart />
        <Menu />
        <Cart />
      </OrderContainer>
      <PaymentMainDiv>
        <TotalMainDiv>
          <TotalSubDiv>
            <h2>수량</h2>
          </TotalSubDiv>
          <TotalSubDiv>
            <h2>합계</h2>
          </TotalSubDiv>
        </TotalMainDiv>
        <BtnContainer>
          <Link to="/confirm">
            <PaymentSubDiv>
              <h1>선택 완료</h1>
            </PaymentSubDiv>
          </Link>
          <Link to="/">
            <CancleSubDiv>
              <h1>전체 취소</h1>
            </CancleSubDiv>
          </Link>
        </BtnContainer>
      </PaymentMainDiv>
    </>
  );
}
const TotalSubDiv = styled.div`
  height: 38%;
  width: 60vw;
  background-color: #000;
  border-radius: 10px;
  h2 {
    margin-top: 15px;
    color: #fff;
  }
`;
const TotalMainDiv = styled.div`
  position: absolute;
  left: 40px;
  width: 60%;
  height: 100%;
`;
const BtnContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 1050px;
  background-color: #222222;
  margin-top: 10px;
`;
const OrderContainer = styled.div`
  width: 100%; 
  height: 640px; 
  margin-bottom: 1000px;
  overflow-y: scroll; 
  &::-webkit-scrollbar {
    width: 20px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;
const BannerDiv = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222222;
  h1 {
    color: #fff;
  }
`;

const PaymentMainDiv = styled.div`
  width: 100%;
  height: 160px;
  position: fixed;
  display: flex;
  bottom: 0;
  background-color: #222222;
  div > h1 {
    color: #fff;
  }
`;
const PaymentSubDiv = styled.div`
  height: 40%;
  width: 30vw;
  background-color: #3fa7fc;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
const CancleSubDiv = styled.div`
  height: 40%;
  width: 30vw;
  margin-top: 15px;
  border-radius: 10px;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Order;
