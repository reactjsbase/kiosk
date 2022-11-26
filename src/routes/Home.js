import { useNavigate } from "react-router-dom";
import { Button, Stack } from "react-bootstrap";
import Banner from "../components/Banner";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="vh-100 d-flex flex-column">
      <Banner />
      <Stack gap={3} className="p-3 h-500">
        <div className="product-container">
          <div className="row">
            <div style={{display:"flex" ,margin:"100px 0px", justifyContent:'center' ,cursor:"pointer"}} onClick={() => navigate("/order")}>
              <h1 style={{fontSize:"50px"}}>매장</h1>
              <img src="https://cdn-icons-png.flaticon.com/512/831/831417.png" style={{width:"50px", height:"50px"}}/>
            </div>
            <div style={{display:"flex" ,padding:"15px 0px", backgroundColor: "#f5f5dc", alignItems:"center",justifyContent:'center'}}>
              <img src="https://cdn-icons-png.flaticon.com/512/1944/1944379.png" style={{width:"50px", height:"50px"}}/>
              <h2 style={{fontSize:"32px"}}>주문 방식을 선택해주세요</h2>
            </div>
            <div style={{display:"flex" ,margin:"150px 0px 0px 0px", justifyContent:'center',cursor:"pointer"}} onClick={() => navigate("/order")}>
              <h1 style={{fontSize:"50px"}}>포장</h1>
              <img src="https://cdn-icons-png.flaticon.com/512/2558/2558149.png" style={{width:"50px", height:"50px"}}/>
            </div>
          </div>
        </div>
      </Stack>
    </div>
  );
}

export default Home;
