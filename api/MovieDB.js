export const apiKey = '55b60818' ;
import * as axios from "axios";

// endpoints
const apiBaseUrl = 'http://www.omdbapi.com/';

const apiCall = async (params) => { // OMDb uses query params directly
    const options = {
        method: 'GET',
        url: apiBaseUrl,
        params: { apikey: apiKey, ...params }, // Add apikey and spread params
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log('error', error);
        return {};
    }
};

export const searchMovies = async (searchTerm) => {
    return apiCall({ s: searchTerm }); // Search by title
};

export const getMovieDetails = async (imdbID) => {
    return apiCall({ i: imdbID }); // Get details by IMDb ID
};

// Example usage (not actual "trending" or "upcoming" as OMDb doesn't have those)
// You would need to implement your own logic for trending/upcoming
export const searchTrendingMovies = async (searchTerm) => {
    return searchMovies(searchTerm); // Example: search for trending term
};

export const searchUpcomingMovies = async (searchTerm) => {
    return searchMovies(searchTerm); // Example: search for upcoming term
};