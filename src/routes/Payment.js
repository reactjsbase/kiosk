import { useNavigate } from "react-router-dom";
import { Button, Image, Stack } from "react-bootstrap";
import Banner from "../components/Banner";
import payment from "../images/payment.png";
import { useEffect } from "react";

function Payment() {
  const navigate = useNavigate();

  // 10초 후 홈 화면으로 이동
  useEffect(() => {
    const goHome = setTimeout(() => navigate("/"), 10000);

    return () => clearTimeout(goHome);
  }, [navigate]);

  return (
    <div className="vh-100 d-flex flex-column">
      <Banner />
      <Stack className="justify-content-center">
        <h2 className="pt-5 text-center">영수증을 받아가 주세요.</h2>
        <h5 className="p-3 text-center text-danger">
          <strong>결제완료 화면은 잠시후 자동으로 닫힙니다.</strong>
        </h5>
        <div className="text-center">
          <Image width={512} src={payment} />
        </div>

        <h2 className="p-5 text-center">
          결제가 완료되었습니다. <br />
          이용해주셔서 감사합니다.
        </h2>
      </Stack>

      <Button
        className="m-3 p-4"
        variant="dark"
        size="lg"
        onClick={() => navigate("/")}
      >
        처음 화면으로
      </Button>
    </div>
  );
}

export default Payment;
