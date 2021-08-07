import React, {useContext} from "react";
import {Link, useLocation} from "react-router-dom";
import {RestaurantsContext} from "../context/RestaurantsContext";
import {generateRandomIdInCollection} from "../helpers/utils";
import headerStyles from "./Header.module.scss"
import Logo from "../logo.svg";

const Header = () => {
  useLocation();
  const {restaurants, isLoading} = useContext(RestaurantsContext);

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerInner}>
        <Link to="/" className={headerStyles.logoWrapper}>
          <img src={Logo} alt="logo" />
          Feed me
        </Link>
        <ul className={headerStyles.linksList}>
          <li><Link to="/">Restaurants</Link></li>
          {!isLoading && restaurants &&
            <li><Link to={`/restaurants/${generateRandomIdInCollection(restaurants.allRestaurants, "id")}`}>Surprise me</Link></li>
          }
        </ul>
      </div>
    </header>
  );
};

export default Header;
