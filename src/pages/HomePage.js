import React, {useContext, useEffect} from "react";
import {RestaurantsContext} from "../context/RestaurantsContext";
import HomePageItems from "../components/HomePageItems";

const HomePage = () => {
  const {restaurants, isLoading, getRestaurants} = useContext(RestaurantsContext);
  const {featuredRestaurants, allRestaurants} = restaurants;

  useEffect(() => {
    getRestaurants();
  }, [getRestaurants]);

  return (
    <div>
      <HomePageItems
        isLoading={isLoading}
        featuredRestaurants={featuredRestaurants}
        allRestaurants={allRestaurants}
      />
    </div>
  );
};

export default HomePage;
