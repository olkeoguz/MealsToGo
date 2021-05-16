import camelize from 'camelize';
import {locations} from './location.mock';

export const locationRequest = async (searchTerm) => {

    try {
        const locationMock = await locations[searchTerm];

        if(!locationMock) {
            throw new Error('Not found');
        }

        const {geometry = {}} = camelize(locationMock.results)[0];

        const {lat,lng} = geometry.location;

        return {lat,lng};
        
    } catch (error) {
        throw new Error('Not Found');
    }
};


