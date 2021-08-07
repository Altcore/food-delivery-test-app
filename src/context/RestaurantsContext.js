import React, {createContext, useState, useCallback} from "react";
export const RestaurantsContext = createContext();

const RestaurantsContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState({
    featuredRestaurants: null,
    allRestaurants: null,
  });
  const [isLoading, setIsLoading] = useState(true);

  const getRestaurants = useCallback( () => {
    return fetch("/data.json"
      ,{
        headers : {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(jsonData) {
        setRestaurants({
          featuredRestaurants: jsonData.featuredRestaurants,
          allRestaurants: jsonData.restaurants,
        });
        setIsLoading(false);
      })
      .catch(error => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });
  }, []);

  return (
    <RestaurantsContext.Provider value={{restaurants, isLoading, getRestaurants}}>
      {props.children}
    </RestaurantsContext.Provider>
  );
};

export default RestaurantsContextProvider;
