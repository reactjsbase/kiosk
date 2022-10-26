import { Link } from "react-router-dom";
import Banner from "../components/Banner";

function Payment() {
  return (
    <>
      <Banner />
      <h2>결제</h2>
      결제완료
      <h1>
        <Link to="/">처음 화면으로</Link>
      </h1>
    </>
  );
}

export default Payment;
