import RestaurantCard from "./RestaurantCard";
import itemsStyles from "./HomePageItems.module.scss";
import PropTypes from "prop-types";

const HomePageItems = ({isLoading, featuredRestaurants, allRestaurants}) => {
  return (
    <>
      <div className={itemsStyles.itemsContainer}>
        <h2>All Restaurants</h2>
        <div className={itemsStyles.itemsInner}>
          {!isLoading && allRestaurants && allRestaurants.map((item) =>
            <RestaurantCard key={item.id} item={item} />
          )}
        </div>
      </div>
    </>
  )
};

HomePageItems.propTypes = {
  isLoading: PropTypes.bool,
  featuredRestaurants: PropTypes.array,
  allRestaurants: PropTypes.array,
}

export default HomePageItems;
