import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
                <Link to="/movies/coming soon" style={{textDecoration: "none"}}><span>Coming Soon</span></Link>
                <Link to="/movies/movies in theaters" style={{textDecoration: "none"}}><span>Movies in Theaters</span></Link>
                <Link to="/movies/top rated indian" style={{textDecoration: "none"}}><span>Top Rated Indian</span></Link>
                <Link to="/movies/top rated movies" style={{textDecoration: "none"}}><span>Top Rated Movies</span></Link>
            </div>
        </div>
    )
}
export default Header