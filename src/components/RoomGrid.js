import React from "react";
import "./RoomGrid.css"; // Add CSS for styling the grid

const RoomGrid = ({ rooms }) => {
  return (
    <div className="grid">
      {rooms.map((room) => (
        <div
          key={room.id}
          className={`room ${room.isBooked ? "booked" : "available"}`}
          title={`Room ${room.id}`}
        >
          {room.id}
        </div>
      ))}
    </div>
  );
};

export default RoomGrid;
