import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
            <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBarToggle" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <a className="navbar-brand" href="#">Portfolio Tracker</a>

            <div className="collapse navbar-collapse " id="navBarToggle">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link text-bold"  activeStyle={{fontWeight: "bold",color: "white"}} exact to="/">Portfolio</NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink className="nav-link text-bold" activeStyle={{fontWeight: "bold",color: "white"}} to="/share">Share</NavLink>
                </li>
                
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Navbar
