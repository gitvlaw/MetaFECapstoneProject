import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import ReservationForm from "../component/ReservationForm";


export default function BookingPage() {
    return (
        <>
            <Header />
            <main>
                <div className="booking-banner"></div>
                <ReservationForm />
            </main>
            <Footer />
        </>
    );
}