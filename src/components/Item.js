import { Link } from "react-router-dom";

function Item() {
  return (
    <>
      아이템(메뉴) 컴포넌트 <Link to="/options">메뉴명</Link>
    </>
  );
}

export default Item;
