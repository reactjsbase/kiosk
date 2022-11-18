import { run } from "holderjs";
import { useEffect } from "react";
import { Image } from "react-bootstrap";
import banner from "../images/banner.png";

function Banner() {
  useEffect(() => {
    run();
  });

  return (
    <div style={{ textAlign: "center", background: "SeaGreen" }}>
      <Image height="180" variant="top" src={banner} />
    </div>
  );
}

export default Banner;
