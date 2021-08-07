import RestaurantCard from "./RestaurantCard";
import itemsStyles from "./HomePageItems.module.scss";
import PropTypes from "prop-types";

const SearchResultsItems = ({isLoading, searchResults, searchTerm}) => (
  <div className={itemsStyles.itemsContainer}>
    <h2>Search Results</h2>
    <div className={itemsStyles.itemsInner}>
      {!isLoading && searchResults.map((item) =>
        <RestaurantCard key={item.id} item={item} highlight={searchTerm} />
      )}
    </div>
    {!searchResults.length && <div>Try a different search term or check the spelling.</div>}
  </div>
);

SearchResultsItems.propTypes = {
  isLoading: PropTypes.bool,
  searchResults: PropTypes.array,
  searchTerm: PropTypes.string,
}

export default SearchResultsItems;
