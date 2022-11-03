import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import styled from 'styled-components';


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
  background-color: #3065ac;
  position: absolute;
  bottom: 0;
  h1{
    color: #000;
  }
`;

const BannerDiv = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
`;


export default Payment;
