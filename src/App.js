import React, { useState } from "react";
import BookingForm from "./components/BookingForm";
import RoomGrid from "./components/RoomGrid";
import Controls from "./components/Controls";
import { FaHotel } from "react-icons/fa";
import BuildingViewer from "./components/BuildingViewer"; // Import the new component
import "./App.css"; 

const generateRooms = () => {
  let rooms = [];
  for (let floor = 1; floor <= 10; floor++) {
    let roomCount = floor === 10 ? 7 : 10;
    for (let i = 1; i <= roomCount; i++) {
      const roomNumber = floor * 100 + i;
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
    for (let floor = 1; floor <= 10; floor++) {
      availableRoomsByFloor[floor] = rooms.filter(
        (room) => room.floor === floor && !room.isBooked
      );
    }

    let selectedRooms = [];

    for (let floor = 1; floor <= 10; floor++) {
      if (availableRoomsByFloor[floor].length >= numRooms) {
        selectedRooms = availableRoomsByFloor[floor].slice(0, numRooms);
        break;
      }
    }

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
      <h1 className="app-title">
        <FaHotel className="title-icon" /> Hotel Room Reservation System
      </h1>
      <BookingForm onBook={handleBook} />
      <Controls onRandomize={handleRandomize} onReset={handleReset} />

  
      {/* Layout Container for Left Image, Room Grid, and Right Image */}
      <div className="layout-container">
        {/* Left Side - Building Image */}
        <div className="building-container">
          <BuildingViewer floors={10} />
        </div>
  
        {/* Center - Room Grid */}
        <div className="room-grid">
          <RoomGrid rooms={rooms} />
        </div>
  
        {/* Right Side - Building Image */}
        <div className="building-container">
          <BuildingViewer floors={10} />
        </div>
      </div>
    </div>
  );
}
export default App;