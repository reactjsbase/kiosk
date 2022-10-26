import { Link } from "react-router-dom";
import Banner from "../components/Banner";

function Home() {
  return (
    <>
      <Banner />
      <h1>
        <Link to="/order">매장</Link>
      </h1>
      <h1>
        <Link to="/order">포장</Link>
      </h1>
    </>
  );
}

export default Home;
