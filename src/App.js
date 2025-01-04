import React, { useState } from "react";
import BookingForm from "./components/BookingForm";
import RoomGrid from "./components/RoomGrid";
import Controls from "./components/Controls";
import "./App.css";

const App = () => {
  const initialRooms = Array.from({ length: 97 }, (_, i) => ({
    id: i + 1,
    isBooked: false,
  }));

  const [rooms, setRooms] = useState(initialRooms);

  const handleBook = (numRooms) => {
    const availableRooms = rooms.filter((room) => !room.isBooked);
    if (availableRooms.length < numRooms) {
      alert("Not enough rooms available!");
      return;
    }

    const updatedRooms = [...rooms];
    let count = 0;
    for (let room of updatedRooms) {
      if (!room.isBooked && count < numRooms) {
        room.isBooked = true;
        count++;
      }
    }
    setRooms(updatedRooms);
  };

  const handleRandomize = () => {
    const updatedRooms = rooms.map((room) => ({
      ...room,
      isBooked: Math.random() < 0.5,
    }));
    setRooms(updatedRooms);
  };

  const handleReset = () => {
    const updatedRooms = rooms.map((room) => ({
      ...room,
      isBooked: false,
    }));
    setRooms(updatedRooms);
  };

  return (
    <div className="App">
      <h1>Hotel Room Reservation System</h1>
      <BookingForm onBook={handleBook} />
      <Controls onRandomize={handleRandomize} onReset={handleReset} />
      <RoomGrid rooms={rooms} />
    </div>
  );
};

export default App;
