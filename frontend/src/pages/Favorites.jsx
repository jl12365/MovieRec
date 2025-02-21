import '../css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'

function Favorites(){
    const {favorites} = useMovieContext();

    if (favorites){
        return (
            <div className='favorites'>
            <h1>Your Favorites</h1>
            <div className="movies-rail">
              {favorites.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
            </div>
            </div>
        )
    }

    return <div className="favorites-empty">
        <h2> No Favorite Movies Yet</h2>
        <p>Add Movies To Your Favorite List Now!</p>
    </div>
}

export default Favorites