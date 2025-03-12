import React, { useState } from "react";
import { FaBed, FaCheckCircle } from "react-icons/fa";
import "./BookingForm.css";

const BookingForm = ({ onBook }) => {
  const [numRooms, setNumRooms] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    if (value > 5) {
      setError("Maximum 5 rooms allowed");
    } else {
      setError("");
    }
    setNumRooms(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const rooms = parseInt(numRooms);
    if (isNaN(rooms) || rooms < 1 || rooms > 5) {
      setError("Please enter a valid number (1-5).");
    } else {
      onBook(rooms);
      setNumRooms("");
      setError("");
    }
  };

  return (
    <div className="booking-card">
      <h2 className="title">🏨 InstaBooking</h2>
      <p className="subtitle">Book your rooms instantly with ease.</p>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className={`input-wrapper ${error ? "error-border" : ""}`}>
          <FaBed className="icon" />
          <input
            type="number"
            placeholder="Enter number of rooms"
            value={numRooms}
            onChange={handleChange}
          />
        </div>
        {error && <p className="error-text">{error}</p>}
        <button type="submit" className="book-button">
          <FaCheckCircle className="button-icon" /> Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
