import React, {useContext, useEffect} from "react";
import {RestaurantsContext} from "../context/RestaurantsContext";
import {FILTER_ITEMS} from "../helpers/constants";
import {isFiltersActive} from "../helpers/utils";
import SearchBar from "../components/SearchBar";
import HomePageItems from "../components/HomePageItems";
import SearchResultsItems from "../components/SearchResultsItems";

const HomePage = () => {
  const {restaurants, isLoading, getRestaurants} = useContext(RestaurantsContext);
  const {featuredRestaurants, allRestaurants} = restaurants;
  const [activeFilterList, setActiveFilters] = React.useState(FILTER_ITEMS);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  useEffect(() => {
    getRestaurants();
  }, [getRestaurants]);

  useEffect(() => {
    const searchRestaurants = () => {
      if (!allRestaurants) {
        return null;
      }

      let results = allRestaurants;

      if (isFiltersActive(activeFilterList)) {
        results = results.filter((restaurant) => activeFilterList[restaurant.priceRange]);
      }

      if (searchTerm !== "") {
        results = results.filter((restaurant) => (
          restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          restaurant.description.toLowerCase().includes(searchTerm.toLowerCase())
        ));
      }

      setSearchResults(results);

      if (searchTerm === "" && !isFiltersActive(activeFilterList)) {
        setSearchResults(null);
      }
    };

    searchRestaurants();
  }, [allRestaurants, searchTerm, activeFilterList]);

  const filterRestaurants = (event) => {
    setActiveFilters({...activeFilterList, [event.target.name.slice(-1)] : event.target.checked})
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setActiveFilters(FILTER_ITEMS);
  };

  return (
    <div>
      <SearchBar
        searchResults={searchResults}
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
        clearSearch={clearSearch}
        activeFilterList={activeFilterList}
        filterRestaurants={filterRestaurants}
      />
      {searchResults ?
        <SearchResultsItems
          isLoading={isLoading}
          searchResults={searchResults}
          searchTerm={searchTerm}
        /> :
        <HomePageItems
          isLoading={isLoading}
          featuredRestaurants={featuredRestaurants}
          allRestaurants={allRestaurants}
          searchTerm={searchTerm}
        />
      }
    </div>
  );
};

export default HomePage;
