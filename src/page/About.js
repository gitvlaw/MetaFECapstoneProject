import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
// import Banner from "../component/Banner";
import AboutChicago from "../component/AboutChicago";

export default function About() {
    return (
        <>
            <Header />
            <main>
                {/* <Banner /> */}
                <AboutChicago />
            </main>
            <Footer />
        </>
    );
}