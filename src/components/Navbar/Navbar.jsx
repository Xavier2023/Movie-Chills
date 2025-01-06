import React from "react";

import "./Navbar.css";
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>Movie Chills</h1>
            <div className='nav-links'>
                
                <Link to='/'>
                    Popular{" "}
                    <img src={Fire} alt='fire emoji' className='nav-icon' />
                </Link>
                <Link to='/top_rated'>
                    Top Rated{" "}
                    <img src={Star} alt='star emoji' className='nav-icon' />
                </Link>
                <Link to='/upcoming'>
                    Upcoming{" "}
                    <img
                        src={Party}
                        alt='party face emoji'
                        className='nav-icon'
                    />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
