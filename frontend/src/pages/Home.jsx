import MovieCard from "../components/MovieCard";
import '../css/Home.css';
import { searchMovies } from "../services/api";
import { getPopularMovies } from "../services/api";
import { useState, useEffect } from "react";

function Home(){

    //name of the state, function to update the state, whatever is in usestate is the initial value
    const[searchQuery, setSearchQuery] = useState("");

    //using const movies = getPopularMovies() will render this api call every time, causing lots of api calls
    //useeffect allows to add a side effect - decides when a function should run
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    //useEffect, will run function if there a change to the dependencry (in this case a array)
    //this will only run once, when it is first rendered if nothing has changed
    useEffect(() => {
        const loadPopularMovies = async() => {
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies)
            }catch(e){
                console.log(e)
                setError("Failed to load movies...")
            }finally{
                setLoading(false);
            }
        }

        loadPopularMovies();
    }, [])


    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)

        try {
            const searchResult = await searchMovies(searchQuery)
            setMovies(searchResult)
            setError(null)
        }catch(e) {
            console.log(e)
            setError("Failed to load movies...")
        }finally{
            setLoading(false)
        }
        setSearchQuery("")
    };

    return (
        <div className="home">
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Search for movies..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
    
            {error && <div className="error-message">{error}</div>}
    
          {loading ? (
            <div className="loading">Loading...</div>
          ) : (
            <div className="movies-rail">
              {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
            </div>
          )}
        </div>
      );
}

export default Home