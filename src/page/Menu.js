import React from "react";
import Header from "../component/Header";
import Banner from "../component/Banner";
import Specials from "../component/Specials";
import Footer from "../component/Footer";

export default function Menu() {
    return (
        <>
            <Header/>
            <main>
                <Banner />
                <Specials />
            </main>
            <Footer />
        </>
    );
}