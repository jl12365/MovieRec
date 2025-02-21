import { Link } from "react-router-dom"
import '../css/NavBar.css'

function NavBar(){
    return <nav className="navbar">

        <div className="navbar-brand">
            <Link to="/"> Movie Favorites </Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className='navlink'> Home </Link>
            <Link to="/favorites" className='navlink'> Favorites List</Link>
        </div>
    </nav>
}
export default NavBar