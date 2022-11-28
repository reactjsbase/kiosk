import { useNavigate } from "react-router-dom";
import { Image, Stack } from "react-bootstrap";
import Banner from "../components/Banner";
import { useEffect } from "react";

function Home({ clearCart }) {
  const navigate = useNavigate();

  useEffect(clearCart, []);

  return (
    <div className="vh-100 d-flex flex-column">
      <Banner />
      <Stack>
        <div
          className="d-flex flex-row flex-fill align-items-center justify-content-center"
          style={{
            background: "none",
            cursor: "pointer",
          }}
          onClick={() => navigate("/order/forhere")}
        >
          <h1 style={{ fontSize: 64, fontWeight: 600 }}>
            <u style={{ textDecorationColor: "RoyalBlue" }}>매장</u>
          </h1>
          <Image
            className="ms-4"
            width={64}
            src="https://cdn-icons-png.flaticon.com/512/831/831417.png"
          />
        </div>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            height: "10vh",
            minHeight: 80,
            background: "AntiqueWhite",
          }}
        >
          <Image
            className="me-2"
            width={64}
            src="https://cdn-icons-png.flaticon.com/512/1944/1944379.png"
          />
          <h2 style={{ fontWeight: 600 }}>주문 방식을 선택해주세요</h2>
        </div>
        <div
          className="d-flex flex-row flex-fill align-items-center justify-content-center"
          style={{
            background: "none",
            cursor: "pointer",
          }}
          onClick={() => navigate("/order/togo")}
        >
          <h1 style={{ fontSize: 64, fontWeight: 600 }}>
            <u style={{ textDecorationColor: "RoyalBlue" }}>포장</u>
          </h1>
          <Image
            className="ms-4"
            width={64}
            src="https://cdn-icons-png.flaticon.com/512/2558/2558149.png"
          />
        </div>
      </Stack>
    </div>
  );
}

export default Home;
