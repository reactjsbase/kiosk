import { run } from "holderjs";
import { useEffect } from "react";
import { Image } from "react-bootstrap";

function Banner() {
  useEffect(() => {
    run();
  });

  return <Image height={180} variant="top" src="holder.js/100px180" />;
}

export default Banner;
