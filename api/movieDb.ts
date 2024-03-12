import axios from 'axios';
import { apiKey } from '../constants';

// openAi endpoint
export const APiUrl = 'https://api.openai.com/v1/chat/completions';

// endpoints
const ApiBaseUrl = `https://api.themoviedb.org/3`;
const trendingMoviesEndPoint = `${ApiBaseUrl}/trending/movie/day?api_key=${apiKey}`;
const upcomingMoviesEndPoint = `${ApiBaseUrl}/movie/upcoming?api_key=${apiKey}`;
const topRatedMoviesEndPoint = `${ApiBaseUrl}/movie/top_rated?api_key=${apiKey}`;
const authenticationEndPoint = `${ApiBaseUrl}/authentication/token/validate_with_login`;


// dynamic endpoints
const MovieDetailsEndPoint = (id: number|string) => `${ApiBaseUrl}/movie/${id}?api_key=${apiKey}`;
const MovieCreditsEndPoint = (id:number|string) => `${ApiBaseUrl}/movie/${id}/credits?api_key=${apiKey}`;
const similarMoviesEndPoint = (id:number|string) => `${ApiBaseUrl}/movie/${id}/similar?api_key=${apiKey}`;
const searchMoviesEndPoint = `${ApiBaseUrl}/search/movie?api_key=${apiKey}`;

const PersonDetailsEndPoint = (id:number|string)=> `${ApiBaseUrl}/person/${id}?api_key=${apiKey}`;
const PersonMoviesEndPoint =(id:number|string)=> `${ApiBaseUrl}/person/${id}/movie_credits?api_key=${apiKey}`;


export const image500 = (path:string) => path ? `https://image.tmdb.org/t/p/w500${path}` : null
export const image342 = (path:string) => path ? `https://image.tmdb.org/t/p/w342${path}` : null
export const image185 = (path:string)  => path ? `https://image.tmdb.org/t/p/w185${path}` : null

const apiCall = async (endpoint:string, params?:any) => {
    const options = {
        method: 'GET',
        url: endpoint,
        params: params || {}
    }
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log('error: ', error);
    }
}



export const fetchTrendingMovies = () => {
    return apiCall(trendingMoviesEndPoint);
}

export const fetchUpcomingMovies = () => {
    return apiCall(upcomingMoviesEndPoint);
}

export const fetchTopRatedMovies = () => {
    return apiCall(topRatedMoviesEndPoint);
}

export const fetchMovieDetails = (id:number|string) => {
    return apiCall(MovieDetailsEndPoint(id));
}

export const fetchSimilarMovies =(id:number|string)  => {
    return apiCall(similarMoviesEndPoint(id));
}

export const fetchMovieCredits = (id:number|string)  => {
    return apiCall(MovieCreditsEndPoint(id));
}

export const fetchPersonDetails = (id:number|string) => {
    return apiCall(PersonDetailsEndPoint(id));
}

export const fetchPersonMovies =(id:number|string) => {
    return apiCall(PersonMoviesEndPoint(id));
}

export const SearchMovies = (params:any) => {
    return apiCall(searchMoviesEndPoint, params);
}