import Card from "../components/Card"

function Home(){

    const movies = [
        {id: 1, title: "John Wick", release_date: "2000"},
        {id: 2, title: "Interstellar", release_date: "1999"},
        {id: 3, title: "Aquaman", release_date: "2003"},

    ]

    const handleSearch = () => {

    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text" 
            placeholder="Search for movies..." 
            className="search-input"
            />

            <button 
            type="submit"
            className="search-submit">
            Search   
            </button>
        </form>


        <div className="movies-rail">
            {movies.map((movie) => (
                <Card movie={movie} key={movie.id} />
            ))}
        </div>


    </div>
}

export default Home