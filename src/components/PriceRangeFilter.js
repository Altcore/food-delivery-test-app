import {formatPriceRange} from "../helpers/utils";
import {FILTER_ITEMS} from "../helpers/constants";
import filterStyles from "./PriceRangeFilter.module.scss"
import PropTypes from "prop-types";

const PriceRangeFilter = ({activeFilterList, filterRestaurants}) => (
  <div className={filterStyles.filterContainer}>
    Price Range: {Object.keys(FILTER_ITEMS).map((priceRange) => (
      <span key={priceRange} className={filterStyles.filterItem}>
        <input
          id={`priceRange_${priceRange}`}
          name={`price_range_${priceRange}`}
          type="checkbox"
          checked={activeFilterList[priceRange]}
          onChange={filterRestaurants}
        />
        <label htmlFor={`priceRange_${priceRange}`}>{formatPriceRange(priceRange)}</label>
      </span>
  ))}
  </div>
);

PriceRangeFilter.propTypes = {
  activeFilterList: PropTypes.object,
  filterRestaurants: PropTypes.func,
}

export default PriceRangeFilter;
