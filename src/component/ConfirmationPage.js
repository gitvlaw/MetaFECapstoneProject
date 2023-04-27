import React from "react";
import '../style/reservationform.css'
import '../style/masterpage.css'

function ConfirmationPage({ formData }) {
  return (
    <div className="confirmation-message">
      <h1>Reservation Confirmation</h1>
      <div className="reservation-info">
        <p>Your reservation information:</p>
        <p>Select Date: {formData["res-date"]}</p>
        <p>Select Time: {formData["res-time"]}</p>
        <p>Guests: {formData.guests}</p>
        <p>Occasion: {formData.occasion}</p>
      </div>
      <p>Thank you for your reservation!</p>
    </div>
  );
}

export default ConfirmationPage;