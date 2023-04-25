import React from "react";
import '../style/aboutchicago.css';

export default function AboutChicago() {
    return (
        <div className="about-chicago">
            <article className="about-acticle">
                <section className="about-heading">
                    <h2>Little Lemon</h2>
                    <h4>Chicago</h4>
                </section>
                <section className="about-paragraph">
                    <p>Based in Chicago, Illinois, Little Lemon is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <p>The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12-15 items that they rotate seasonally.</p>
                    <p>The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.</p>
                    <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.</p>
                    <p>To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.</p>
                    <p>Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the mediterranean region.</p>
                </section>
            </article>
            <div className="about-img">
                <div className="about-img-div">
                    <div className="about-img-div-1">
                        <img src={require("../icons_assets/Mario and Adrian A.jpg")} alt="chef-a" className="about-img-chef-1"></img>
                    </div>
                    <div className="about-img-div-2">
                        <img src={require("../icons_assets/Mario and Adrian b.jpg")} alt="chef-b" className="about-img-chef-2"></img>
                    </div>
                </div>

            </div>
        </div>
    )
}