import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import styled from "styled-components";


function Payment() {
  return (
    <>
       <BannerDiv>
        <Banner />
      </BannerDiv>
      <h2>결제</h2>
      결제완료
      <Link to="/">
        <OnFirstPage>
          <h1>처음 화면으로</h1>
        </OnFirstPage>
      </Link>
    </>
  );
}

const OnFirstPage = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222222;
  position: absolute;
  bottom: 0;
  h1{
    color: #fff;
    font-weight: 600;
  }
`;

const BannerDiv = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222222;
  color: #fff;
`;


export default Payment;
