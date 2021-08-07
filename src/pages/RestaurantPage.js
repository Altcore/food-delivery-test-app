import React, {useContext, useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {RestaurantsContext} from "../context/RestaurantsContext";
import MenuBox from "../components/MenuBox";
import {formatPriceRange, prepareMenuData} from "../helpers/utils";
import {DEFAULT_PLACEHOLDER_IMAGE} from "../helpers/constants";
import restaurantStyles from "./RestaurantPage.module.scss";

const RestaurantPage = () => {
  const {restaurantId} = useParams();
  const {restaurants, isLoading, getRestaurants} = useContext(RestaurantsContext);
  const [currentRestaurant, setCurrentRestaurant] = useState("");
  const [menuItems, setMenuItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isSuccessfulOrder, setSuccessfulOrder] = useState(false);

  useEffect(() => {
    getRestaurants();
  }, [getRestaurants]);

  useEffect(() => {
    if (restaurants && restaurants.allRestaurants) {
      setCurrentRestaurant(restaurants.allRestaurants.filter(restaurant => restaurant.id === restaurantId)[0])
    }
  }, [restaurants, restaurantId]);

  useEffect(() => {
    if (currentRestaurant && currentRestaurant.menu) {
      setMenuItems(prepareMenuData(currentRestaurant.menu));
    }
  }, [currentRestaurant]);

  const calculateTotalPrice = () => {
    const price = menuItems.reduce((totalPrice, item) => totalPrice + (item.price * item.quantity), 0);
    setTotalPrice(price);
  };

  const decreaseItemQuantity = (index) => {
    const newMenuItems = [...menuItems];
    if (newMenuItems[index].quantity !== 0) {
      newMenuItems[index].quantity--;
      setMenuItems(newMenuItems);
      calculateTotalPrice();
    }
  };

  const increaseItemQuantity = (index) => {
    const newMenuItems = [...menuItems];
    newMenuItems[index].quantity++;
    setMenuItems(newMenuItems);
    calculateTotalPrice();
  };

  const makeOrder = () => {
    if (totalPrice > 0) {
      setSuccessfulOrder(true);
      setMenuItems(prepareMenuData(currentRestaurant.menu));
      setTotalPrice(0);
    }
  };

  return (
    !isLoading && currentRestaurant &&
      <div key = {currentRestaurant.id} className={restaurantStyles.item}>
        <MenuBox
          menuItems={menuItems}
          totalPrice={totalPrice}
          makeOrder={makeOrder}
          decreaseItemQuantity={decreaseItemQuantity}
          increaseItemQuantity={increaseItemQuantity}
          isSuccessfulOrder={isSuccessfulOrder}
        />
        <div className={restaurantStyles.itemColumn}>
          <div className={restaurantStyles.itemHeader}>
            <h1 className={restaurantStyles.itemTitle}>{currentRestaurant.name}</h1>
            <span className={restaurantStyles.itemPrice}>{formatPriceRange(currentRestaurant.priceRange)}</span>
          </div>
          <img src={currentRestaurant.imageSrc || DEFAULT_PLACEHOLDER_IMAGE} alt={`${currentRestaurant.name}`} height={250} />
          <p className={restaurantStyles.itemDescription}>{currentRestaurant.description}</p>
        </div>
      </div>
  );
};

export default RestaurantPage;
