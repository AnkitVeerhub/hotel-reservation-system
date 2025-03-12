import React from "react";

const BuildingViewer = ({ floors }) => {
  return (
    <div className="building-container">
      <svg
        width="300px"
        height={`${floors * 80}px`} // Dynamically adjust height based on floors
        viewBox={`0 0 300 ${floors * 80}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <rect width="300" height={floors * 80} fill="#f0f0f0" stroke="#ccc" />

        {/* Floors */}
        {Array.from({ length: floors }).map((_, i) => (
          <g key={i}>
            <rect
              x="50"
              y={i * 80}
              width="200"
              height="80"
              fill="#ffffff"
              stroke="#000000"
              strokeWidth="2"
            />
            {/* Floor Labels */}
            <text
              x="150"
              y={i * 80 + 45}
              fontSize="18"
              fontFamily="Arial"
              fontWeight="bold"
              textAnchor="middle"
            >
              Floor {floors - i}
            </text>
            {/* Elevator */}
            <rect
              x="220"
              y={i * 80 + 10}
              width="50"
              height="60"
              fill="#cccccc"
              stroke="#000"
              strokeWidth="2"
            />
            <text x="235" y={i * 80 + 45} fontSize="20">
              🚪
            </text>
            {/* Stairs */}
            <rect
              x="10"
              y={i * 80 + 10}
              width="30"
              height="60"
              fill="#b0b0b0"
              stroke="#000"
              strokeWidth="2"
            />
            <text x="15" y={i * 80 + 45} fontSize="20">
              🪜
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default BuildingViewer;
