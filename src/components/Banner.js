import { Image } from "react-bootstrap";
import banner from "../images/banner.png";

function Banner() {
  return (
    <div className="text-center" style={{ background: "SeaGreen" }}>
      <Image height="160" variant="top" src={banner} />
    </div>
  );
}

export default Banner;
