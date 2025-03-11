import React from "react";
import "./RoomGrid.css";

const RoomGrid = ({ rooms }) => {
  const floors = {};

  // Group rooms by floor
  rooms.forEach((room) => {
    if (!floors[room.floor]) floors[room.floor] = [];
    floors[room.floor].push(room);
  });

  return (
    <div className="room-grid">
      {Object.keys(floors)
        .sort((a, b) => b - a) // Show top floors first
        .map((floor) => (
          <div key={floor} className="floor">
            <h3>Floor {floor}</h3>
            <div className="grid">
              {floors[floor].map((room) => (
                <div
                  key={room.id}
                  className={`room ${room.isBooked ? "booked" : "available"}`}
                  title={`Room ${room.id}`}
                >
                  {room.id}
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default RoomGrid;
