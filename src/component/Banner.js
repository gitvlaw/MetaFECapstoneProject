import React from "react";
import '../style/banner.css' ;
import restaurantfood from '../icons_assets/restauranfood.jpg' ;
import { NavLink } from "react-router-dom";

export default function Banner() {
    return (
        <div className="banner">
            <div className="banner-content">
                <div className="banner-text">
                    <div>
                        <h2>Little Lemon</h2>
                        <h4>Chicago</h4>
                        <p>We are a family owned Mediterrancean restaurant, focused on tradtional recipes with a modern twitst.</p>
                        <NavLink to="/reservation"><button aria-label="On Click">Reserve a Table</button></NavLink>
                    </div>
                </div>
                <div className="banner-img">
                    <img src={restaurantfood} alt="foot" className="img-of-banner"></img>
                </div>
            </div>
        </div>
    );
}