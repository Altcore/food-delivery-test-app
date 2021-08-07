import React from "react";
import {Link} from "react-router-dom";
import headerStyles from "./Header.module.scss"
import Logo from "../logo.svg";

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerInner}>
        <Link to="/" className={headerStyles.logoWrapper}>
          <img src={Logo} alt="logo" />
          Feed me
        </Link>
        <ul className={headerStyles.linksList}>
          <li><Link to="/">Restaurants</Link></li>
          <li><Link to="/">Surprise me</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
