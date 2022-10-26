import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import ConfirmItem from "../components/ConfirmItem";

function Confirm() {
  return (
    <>
      <Banner />
      <h2>주문확인</h2>
      {/* 주문내역 컨테이너, 아래는 주문내역 컴포넌트 예시 */}
      <ConfirmItem />
      <h1>
        <Link to="/order">취소</Link> <Link to="/payment">결제</Link>
      </h1>
    </>
  );
}

export default Confirm;
