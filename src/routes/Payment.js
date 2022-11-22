import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Banner from "../components/Banner";

function Payment() {
  const navigate = useNavigate();
  return (
    <div className="vh-100 d-flex flex-column">
      <Banner />
      <h2>결제</h2>
      결제완료
      <Button variant="dark" size="lg" onClick={() => navigate("/")}>
        처음 화면으로
      </Button>
    </div>
  );
}

export default Payment;
