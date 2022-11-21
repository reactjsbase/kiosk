import { useNavigate } from "react-router-dom";
import { Button, Stack } from "react-bootstrap";
import Banner from "../components/Banner";

function Home() {
  const navigate = useNavigate();

  return (
    <>
     <div className="vh-100 d-flex flex-column">
      <Banner />
      <Stack gap={3} className="p-3 h-100">
        <Button
          variant="outline-dark"
          size="lg"
          onClick={() => navigate("/order")}
          className="h-100"
        >
        매장
        </Button>
    
        <Button
          variant="outline-dark"
          size="lg"
          onClick={() => navigate("/order")}
          className="h-100"
        >
        포장
        </Button>
     </Stack>
     </div>
    </>
  );
}

export default Home;
