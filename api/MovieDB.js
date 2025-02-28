import axios from 'axios';

// Replace with your actual OMDb API key
export const apiKey = '10202289';

// Base URL for OMDb API
const apiBaseUrl = 'http://www.omdbapi.com/';

// Generic API call function
const apiCall = async (params) => {
    const options = {
        method: 'GET',
        url: apiBaseUrl,
        params: { apikey: apiKey, ...params },
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error('OMDb API Error:', error);
        return {};
    }
};

export const fetchTrendingMovies = async () => {
    const genres = ['action', 'comedy', 'sci-fi', 'thriller', 'animation', 'drama'];
    const years = [2023, 2022];
    const trendingResults = [];
    const seenImdbIDs = new Set();

    for (const genre of genres) {
        for (const year of years) {
            const searchTerm = `${genre} ${year}`;
            const data = await searchMovies(searchTerm);
            if (data.Search) {
                for (const movie of data.Search) {
                    if (!seenImdbIDs.has(movie.imdbID)) {
                        trendingResults.push(movie);
                        seenImdbIDs.add(movie.imdbID);
                    }
                }
            }
        }
    }
    return trendingResults;
};

// Function to search movies by title
export const searchMovies = async (searchTerm) => {
    return apiCall({ s: searchTerm });
};

/*// Function to get movie details by IMDb ID
export const getMovieDetails = async (imdbID) => {
    return apiCall({ i: imdbID });
};*/

export const getMovieDetails = async (imdbID) => {
    return apiCall({ i: imdbID });
};

/*export const fetchUpcomingMovies = async () => {
    const upcomingTerms = ["upcoming movie"]; // try only one term.
    const upcomingResults = [];
    const seenImdbIDs = new Set();

    for (const term of upcomingTerms) {
        const data = await searchMovies(term);
        console.log(`Response for "${term}":`, data); // Inspect each response
        if (data && data.Search && data.Search.length > 0) {
            for (const movie of data.Search) {
                if (!seenImdbIDs.has(movie.imdbID)) {
                    upcomingResults.push(movie);
                    seenImdbIDs.add(movie.imdbID);
                }
            }
        } else {
            console.log(`No results for "${term}"`); // Log if no results
        }
    }
    console.log("Final Upcoming Results:", upcomingResults); // Inspect final results
    return upcomingResults;
};*/


export const fetchUpcomingMovies = async () => {
    const broadTerms = ["movie", "film"]; // Very broad terms
    const upcomingResults = [];
    const seenImdbIDs = new Set();

    for (const term of broadTerms) {
        const data = await searchMovies(term);
        if (data && data.Search) {
            for (const movie of data.Search) {
                if (
                    movie.Poster &&
                    movie.Poster !== 'N/A' &&
                    !seenImdbIDs.has(movie.imdbID)
                ) {
                    upcomingResults.push(movie);
                    seenImdbIDs.add(movie.imdbID);
                }
            }
        }
    }
    return upcomingResults;
};

// Example usage (you can remove this later)
async function exampleUsage() {
    try {
        const trending = await fetchTrendingMovies();
        console.log('Trending Movies:', trending);

        const movieDetails = await getMovieDetails('tt0468569');
        console.log('Movie Details:', movieDetails);

        const upcoming = await fetchUpcomingMovies();
        console.log("Upcoming Movies", upcoming);
    } catch (error) {
        console.error('Example Usage Error:', error);
    }
}

exampleUsage();