import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import styled from 'styled-components';

function Home() {
  return (
    <>
      <HomeMainDiv>
        <Link to="/order">
          <Shop>
            <h1>매장</h1>
            <img src="https://cdn-icons-png.flaticon.com/512/831/831417.png" />
          </Shop>
        </Link>
        <MiddleDiv>
          <img src="https://cdn-icons-png.flaticon.com/512/1944/1944379.png" />
          <h2>주문 방식을 선택해주세요</h2>
        </MiddleDiv>
        <Link to="/order">
          <Packaging>
            <h1>포장</h1>
            <img src="https://cdn-icons-png.flaticon.com/512/2558/2558149.png" />
          </Packaging>
        </Link>
      </HomeMainDiv>
    </>
  );
}
const MiddleDiv = styled.div`
  background-color: #f5f5dc;
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 70px;
    height: 70px;
  }
  h2{
    font-weight: 600;
  }
`;
const HomeMainDiv = styled.div`
  text-decoration: none;
`;
const Shop = styled.div`
  width: 100%;
  height: 44vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 0;
    font-size: 70px;
    color: #000;
    font-weight: 600;
  }
  img {
    margin-left: 20px;
    width: 80px;
    height: 80px;
  }
`;
const Packaging = styled.div`
  width: 100%;
  height: 44vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0;
    color: #000;
    font-size:70px;
    font-weight: 600;
  }
  img {
    margin-left: 20px;
    width: 80px;
    height: 80px;
  }
`;

export default Home;
