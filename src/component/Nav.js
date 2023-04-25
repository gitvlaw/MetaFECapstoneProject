import React from "react";
import {NavLink} from 'react-router-dom';
import "../style/nav.css";

export default function Nav() {
    return (
        <nav>
            <ul className="nav-header">
                <li className="nav-li">
                    <NavLink to="/" className="navlink" activeClassName="active">Home</NavLink>
                </li>
                <li className="nav-li">
                    <NavLink to="/about" className="navlink" activeClassName="active">About</NavLink>
                </li>
                <li className="nav-li">
                    <NavLink to="/menu" className="navlink" activeClassName="active">Menu</NavLink>
                </li>
                <li className="nav-li">
                    <NavLink to="/reservation" className="navlink" activeClassName="active">Reservation</NavLink>
                </li>
                <li className="nav-li">
                    <NavLink to="/order-online" className="navlink" activeClassName="active">Order Online</NavLink>
                </li>
                <li className="nav-li">
                    <NavLink to="/login" className="navlink" activeClassName="active">Login</NavLink>
                </li>
            </ul>
        </nav>
    );
}