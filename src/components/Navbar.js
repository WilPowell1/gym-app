import React from "react";
import "../styles/navbar.css"
import { NavLink as Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="navbar-left">
                <Link to="/">
                    <div className="logo">
                        This is a Logo!
                    </div>
                </Link>
            </div>
            <div className="navbar-right">
                <ul className="nav-links">
                    <Link to="/">
                        <li className="link-items">Home</li>
                    </Link>
                    <Link to="/exercises">
                        <li className="link-items">Exercises</li>
                    </Link>
                    <Link to="/daily-workout">
                        <li className="link-items">Daily Workout</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;