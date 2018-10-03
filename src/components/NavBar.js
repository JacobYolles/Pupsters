import React from "react"
import { Link } from "react-router-dom"


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Pupster</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/discover">Discover</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/search">Search</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar; 