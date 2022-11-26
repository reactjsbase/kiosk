import { useNavigate } from "react-router-dom";
import { Button,Image } from "react-bootstrap";
import Banner from "../components/Banner";

function Payment() {
  const navigate = useNavigate();
  return (
    <div className="vh-100 d-flex flex-column">
      <Banner />
      <h2 style={{margin:"50px 0px" ,display:"flex", justifyContent:"center"}}>영수증을 받아가 주세요.</h2>
      <div style={{display:'flex',justifyContent:'center',textAlign:"center" ,color:"red" ,fontSize:"20px", fontWeight:"bold"}}>
        결제완료 화면은 잠시후 자동으로 닫힙니다.
      </div>
      <div style={{display:'flex',justifyContent:'center'}}>
        <Image src="/payment.png" style={{width: "580px", height:"370px",display:"flex", justifyContent:"center"}}/>
      </div>
      <div style={{display:'flex',justifyContent:'center',textAlign:"center"}}>
        <h2 style={{margin:"50px 0px" ,display:"flex", justifyContent:"center"}}>결제가 완료되었습니다. <br/>이용해주셔서 감사합니다.</h2>
      </div>
      <Button variant="dark" size="lg" onClick={() => navigate("/")}>
        처음 화면으로
      </Button>
    </div>
  );
}

export default Payment;
