import { Link } from "react-router-dom";

const SubHeader = () => {
  return (
      <nav className="sub-head">
        <Link to="shopping-cart/shop"><div className="nav-tab">shop</div></Link>
        <Link to="shopping-cart/loading"><div className="nav-tab">load</div></Link>
        <Link to="shopping-cart/about"><div className="nav-tab">about</div></Link>
      </nav>
  );
};

export default SubHeader;