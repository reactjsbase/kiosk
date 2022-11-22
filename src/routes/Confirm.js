import { useNavigate } from "react-router-dom";
import { Button, Stack } from "react-bootstrap";
import Banner from "../components/Banner";
import ConfirmItem from "../components/ConfirmItem";

function Confirm(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="vh-100 d-flex flex-column">
        <Banner />

        <h2>주문확인</h2>
        {/* 주문내역 컨테이너, 아래는 주문내역 컴포넌트 예시 */}
        <ConfirmItem {...props} />

        <Stack gap={3} className="p-3">
          <Button
            variant="outline-danger"
            size="lg"
            onClick={() => navigate("/order")}
          >
            취소
          </Button>
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate("/payment")}
          >
            결제
          </Button>
        </Stack>
      </div>
    </>
  );
}

export default Confirm;
