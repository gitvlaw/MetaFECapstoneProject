import React, { useState } from "react";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import ConfirmationPage from "./ConfirmationPage";

import '../style/reservationform.css';

const ReservationForm = () => {
    const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState(null);

    const formik = useFormik({
        initialValues: {
            "res-date": "",
            "res-time": "",
            guests: "",
            occasion: ""
        },

        validationSchema: Yup.object({
            "res-date": Yup.date().required("Please choose a date."),
            "res-time": Yup.string().required("Please choose a time."),
            guests: Yup.number()
            .required("Please specify the number of guests.")
            .min(1, "Must be at least 1.")
            .max(10, "Cannot exceed 10."),
            occasion: Yup.string().required("Please select an occasion.")
        }),

        onSubmit: (values) => {
            setIsSubmitted(true);
            setFormData(values);
        },

    });


  return (
    <>
        {isSubmitted ? (
            <ConfirmationPage formData={formData} />
        ) : (
            <form className="reservation" onSubmit={formik.handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    name="res-date"
                    className="input-field"
                    {...formik.getFieldProps('res-date')}
                    // onBlur={formik.handleBlur}
                    // onChange={formik.handleChange}
                    // value={formik.values["res-date"]}
                />
                <>
                    {formik.errors["res-date"] && !!formik.touched["res-date"] && (
                        <div className="error-message">{formik.errors["res-date"]}</div>
                    )}
                </>

                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    name="res-time"
                    className="input-field"
                    {...formik.getFieldProps('res-time')}
                >
                    {availableTimes.map((time) => (
                        <option key={time} value={time}>
                        {time}
                        </option>
                    ))}
                </select>
                <>
                    {formik.errors["res-time"] && !!formik.touched["res-time"] && (
                        <div className="error-message">{formik.errors["res-time"]}</div>
                    )}
                </>

                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    id="guests"
                    name="guests"
                    className="input-field"
                    {...formik.getFieldProps('guests')}
                />
                <>
                    {formik.errors.guests && formik.touched.guests && (
                        <div className="error-message">{formik.errors.guests}</div>
                    )}
                </>

                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    name="occasion"
                    className="input-field"
                    {...formik.getFieldProps('occasion')}
                >
                    <option value="">Select an occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="None">None</option>
                </select>
                <>
                    {formik.errors.occasion && formik.touched.occasion && (
                        <div className="error-message">{formik.errors.occasion}</div>
                    )}
                </>

                <button type="submit" className="input-field-button" disabled={formik.isSubmitting}>
                    Make Your reservation
                </button>
            </form>
        )}
    </>
  );
};

export default ReservationForm;