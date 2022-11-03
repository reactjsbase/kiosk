import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import ConfirmItem from "../components/ConfirmItem";
import React from "react";
import styled from 'styled-components';

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
          <Link to="/order">
            <CancleSubDiv>
              <h1>취소</h1>
            </CancleSubDiv>
          </Link>
          <Link to="/payment">
            <PaymentSubDiv>
              <h1>결제</h1>
            </PaymentSubDiv>
          </Link>
        </PaymentMainDiv>
      </ConfirmMainDiv>
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
const ConfirmMainDiv = styled.div`
  &::-webkit-scrollbar-thumb {
    display: none;
  }
`;
const OrderContainer = styled.div`
  width: 100%;
  height: 630px;
  margin-bottom: 10000px;
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

export default Confirm;
