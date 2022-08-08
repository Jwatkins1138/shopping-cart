import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="head-nav"><div className="icon"></div></nav>
      <div className="head-title"><h1><Link to="shopping-cart/">shop type shop</Link></h1></div>
    </header>
  );
};

export default Header;