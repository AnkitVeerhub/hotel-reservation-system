import React, { useState } from "react";
import BookingForm from "./components/BookingForm";
import RoomGrid from "./components/RoomGrid";
import Controls from "./components/Controls";
import "./App.css";

const generateRooms = () => {
  let rooms = [];
  for (let floor = 1; floor <= 10; floor++) {
    let roomCount = floor === 10 ? 7 : 10; // Floor 10 has only 7 rooms
    for (let i = 1; i <= roomCount; i++) {
      const roomNumber = floor * 100 + i; // Correct room numbering
      rooms.push({
        id: roomNumber,
        floor,
        isBooked: false,
      });
    }
  }
  return rooms;
};

const App = () => {
  const [rooms, setRooms] = useState(generateRooms());

  const handleBook = (numRooms) => {
    const availableRoomsByFloor = {};

    // Organize available rooms floor-wise
    for (let floor = 1; floor <= 10; floor++) {
      availableRoomsByFloor[floor] = rooms.filter(
        (room) => room.floor === floor && !room.isBooked
      );
    }

    let selectedRooms = [];

    // 1️⃣ First, try booking all rooms on the same floor
    for (let floor = 1; floor <= 10; floor++) {
      if (availableRoomsByFloor[floor].length >= numRooms) {
        selectedRooms = availableRoomsByFloor[floor].slice(0, numRooms);
        break;
      }
    }

    // 2️⃣ If same-floor booking is not possible, book across multiple floors
    if (selectedRooms.length < numRooms) {
      selectedRooms = [];
      for (let floor = 1; floor <= 10 && selectedRooms.length < numRooms; floor++) {
        let remaining = numRooms - selectedRooms.length;
        selectedRooms.push(...availableRoomsByFloor[floor].slice(0, remaining));
      }
    }

    if (selectedRooms.length < numRooms) {
      alert("Not enough rooms available!");
      return;
    }

    // Update room status
    const updatedRooms = rooms.map((room) =>
      selectedRooms.some((selected) => selected.id === room.id)
        ? { ...room, isBooked: true }
        : room
    );

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
    setRooms(generateRooms());
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
