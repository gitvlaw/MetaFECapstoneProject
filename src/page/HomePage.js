import React from "react";
import Header from "../component/Header";
import Specials from "../component/Specials"
import Footer from "../component/Footer";
import Banner from "../component/Banner";
import Testimonials from "../component/Testimonials";
import AboutChicago from '../component/AboutChicago';
import '../style/homepage.css';

export default function Homepage() {
    return (
        <div className="container">
            <Header className="header" />
            <main>
                <Banner/>
                <Specials/>
                <Testimonials/>
                <AboutChicago />
            </main>
            <Footer />
        </div>
    );
}