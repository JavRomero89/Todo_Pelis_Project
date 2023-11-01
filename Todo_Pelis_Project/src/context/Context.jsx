import { React, useState, createContext,useEffect } from "react";
import { GetApi } from "../utils/GetApi";

export const MovieContext = createContext();
const MovieContextProvider = ({children}) => {
    const [movies, setMovies] = useState([]);

    const API_KEY = 'ced816c83a36de6db0fb51255d2a4091';
    const MOVIE_API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

    useEffect(() => {
        GetApi(MOVIE_API_URL).then(film => setMovies(film))
    }, []);

    return(
		<MovieContext.Provider value={{ movies, setMovies }}>
            {children}
        </MovieContext.Provider>
	)
}

export default MovieContextProvider