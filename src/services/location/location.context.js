import React, { useState, useEffect, createContext } from 'react';

import { locationRequest } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [keyword, setKeyword] = useState('San Francisco');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = async (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    const findLocation = async () => {
      try {
        if (!keyword.length) {
          return;
        }
        const res = await locationRequest(keyword.toLowerCase()); // returns {"lat": 37.7749295,"lng": -122.4194155}
        setLocation(res);

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err.message);
        console.log('locRequest: ', error);
      }
    };
    findLocation();
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
