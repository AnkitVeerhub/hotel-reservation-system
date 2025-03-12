import React from "react";
import "./RoomGrid.css";
import roomImage from "../assets/room.png";
import { FaBed, FaLayerGroup, FaStairs } from "react-icons/fa"; // Importing icons

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
            <h3 className="floor-title">🏢 Floor {floor}</h3>
            <div className="grid">
              {/* Lift and stairs section on the left */}
              <div className="lift-stairs">
                <FaLayerGroup className="lift-icon" title="Elevator" />
                <FaLayerGroup className="stairs-icon" title="Stairs" />
              </div>

              {/* Rooms arranged sequentially from left to right */}
              {floors[floor].map((room) => (
                <div key={room.id} className="room-container">
                  <img
                    src={roomImage}
                    alt={`Room ${room.id}`}
                    className="room-image"
                  />
                  <span className="room-number">{room.id}</span>
                  {room.isBooked && <div className="overlay">Booked</div>}
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default RoomGrid;
