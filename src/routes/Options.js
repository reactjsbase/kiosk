import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Option from "../components/Option";

// 옵션 리스트 보여주는 화면
function Options() {
  return (
    <>
      <Banner />
      <h2>옵션선택</h2>
      {/* 옵션 컨테이너 */}
      <Option></Option>
      <h1>
        <Link to="/order">취소</Link> <Link to="/order">확인</Link>
      </h1>
    </>
  );
}

export default Options;
