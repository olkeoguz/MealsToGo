import React, {
  useState,
  createContext,
  useEffect,
  useMemo,
  useCallback,
  useContext,
} from 'react';

import { restaurantsRequest } from './restaurants.service';
import { LocationContext } from '../location/location.context';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { location } = useContext(LocationContext);

  const retrieveRestaurants = async (loc) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(async () => {
      try {
        const res = await restaurantsRequest(loc);
        setRestaurants(res);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err.message);
      }
    }, 1500);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
        retrieveRestaurants,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
