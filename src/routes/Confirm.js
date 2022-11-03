import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import ConfirmItem from "../components/ConfirmItem";
import React from "react";
import styled from "styled-components";

function Confirm() {
  return (
    <>
      <ConfirmMainDiv>
        <BannerDiv>
          <Banner />
        </BannerDiv>
        <OrderContainer>
          <h2>주문확인</h2>
          {/* 주문내역 컨테이너, 아래는 주문내역 컴포넌트 예시 */}
          <ConfirmItem />
          <h2>1내용내용내용내용내용내용내용내용내용내용</h2>
          <h2>2내용내용내용내용내용내용내용내용내용내용내용내용내용</h2>
          <h2>3내용내용내용내용내용내용내용내용내용내용내용내용내용</h2>
          <h2>4내용내용내용내용내용내용내용내용내용내용내용내용내용</h2>
          <h2>5내용내용내용내용내용내용내용내용내용내용내용내용내용</h2>
          <h2>6내용내용내용내용내용내용내용내용내용내용내용내용내용</h2>
          <h2>7내용내용내용내용내용내용내용내용내용내용내용내용내용</h2>
          <h2>8내용내용내용내용내용내용내용내용내용내용내용내용내용</h2>
          <h2>9내용내용내용내용내용내용내용내용내용내용내용내용내용</h2>
          <h2>10내용내용내용내용내용내용내용내용내용내용내용내용내용</h2>
          <h2>11내용내용내용내용내용내용내용내용내용내용내용내용내용</h2>
          <h2>12내용내용내용내용내용내용내용내용내용내용내용내용내용</h2>
          <h2>13내용내용내용내용내용내용내용내용내용내용내용내용내용</h2>
          <h2>14내용내용내용내용내용내용내용내용내용내용내용내용내용</h2>
          <h2>15내용내용내용내용내용내용내용내용내용내용내용내용내용</h2>
          <h2>16내용내용내용내용내용내용내용내용내용내용내용내용내용</h2>
          <h2>17내용내용내용내용내용내용내용내용내용내용내용내용내용</h2>
          <h2>18내용내용내용내용내용내용내용내용내용내용내용내용내용</h2>
          <h2>19내용내용내용내용내용내용내용내용내용내용내용내용내용</h2>
          <h2>20내용내용내용내용내용내용내용내용내용내용내용내용내용</h2>
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
            <Link to="/Payment">
              <PaymentSubDiv>
                <h1>결제하기</h1>
              </PaymentSubDiv>
            </Link>
            <Link to="/order">
              <CancleSubDiv>
                <h1>결제 취소</h1>
              </CancleSubDiv>
            </Link>
          </BtnContainer>
        </PaymentMainDiv>
      </ConfirmMainDiv>
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

const ConfirmMainDiv = styled.div`
  &::-webkit-scrollbar-thumb {
    display: none;
  }
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

export default Confirm;
