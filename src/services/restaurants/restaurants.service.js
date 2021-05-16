import { mocks, mockImages } from './mock';
import camelize from 'camelize';

export const restaurantsRequest = async (location) => {
  try {
    const mock = await mocks[location].results;
    if (!mock) {
      throw new Error('Not found');
    }

    const mappedResults = mock.map((restaurant) => {
      restaurant.photos = restaurant.photos.map((p) => {
        return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
      });
      return {
        ...restaurant,
        isOpenNow:
        restaurant.opening_hours &&restaurant.opening_hours.open_now,
        isClosedTemporarily:
          restaurant.business_status === 'CLOSED_TEMPORARILY',
        address: restaurant.vicinity,
      };
    });

    return camelize(mappedResults);
  } catch (error) {
    throw new Error('Not Found');
  }
};
