import MovieCard from "../components/MovieCard"
import '../css/Home.css'
import { useState } from "react"

function Home(){

    //name of the state, function to update the state
    const[searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "John Wick", release_date: "2000"},
        {id: 2, title: "Interstellar", release_date: "1999"},
        {id: 3, title: "Aquaman", release_date: "2003"},

    ]

    const handleSearch = () => {
        alert(searchQuery)
    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text" 
            placeholder="Search for movies..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />

            <button 
            type="submit"
            className="search-submit">
            Search   
            </button>
        </form>


        <div className="movies-rail">
            {movies.map((movie) => (
                //searching logic to show movies based on the searchquery criteria
                movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>


    </div>
}

export default Home