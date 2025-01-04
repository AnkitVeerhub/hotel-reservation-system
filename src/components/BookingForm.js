import React, { useState } from "react";

const BookingForm = ({ onBook }) => {
  const [numRooms, setNumRooms] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const rooms = parseInt(numRooms);
    if (isNaN(rooms) || rooms < 1 || rooms > 5) {
      alert("Please enter a valid number (1-5).");
    } else {
      onBook(rooms);
      setNumRooms("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Enter number of rooms"
        value={numRooms}
        onChange={(e) => setNumRooms(e.target.value)}
      />
      <button type="submit">Book Rooms</button>
    </form>
  );
};

export default BookingForm;
