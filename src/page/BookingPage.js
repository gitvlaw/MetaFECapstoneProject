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
                {/* <h1 style={{ display: document.getElementsByClassName("confirmation-message").length > 0 ? "none" : "block" }}>
                    To book a reservation, please fill-out this form
                </h1> */}
                <ReservationForm />
            </main>
            <Footer />
        </>
    );
}