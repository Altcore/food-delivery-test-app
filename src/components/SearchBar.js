import PriceRangeFilter from "./PriceRangeFilter"
import searchStyles from "./SearchBar.module.scss"
import PropTypes from "prop-types";

const SearchBar = ({searchResults, searchTerm, handleSearchChange, clearSearch, activeFilterList, filterRestaurants}) => (
  <div className={searchStyles.searchContainer}>
    <div className={searchStyles.searchInner}>
      Search:
      <input
        type="search"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search"
        className={searchStyles.searchInput}
      />
    </div>
    <PriceRangeFilter
      activeFilterList={activeFilterList}
      filterRestaurants={filterRestaurants}
    />
    {searchResults && <button onClick={clearSearch}>Clear</button>}
  </div>
);

SearchBar.propTypes = {
  searchResults: PropTypes.array,
  searchTerm: PropTypes.string,
  handleSearchChange: PropTypes.func,
  clearSearch: PropTypes.func,
  activeFilterList: PropTypes.object,
  filterRestaurants: PropTypes.func,
}

export default SearchBar;
