import React, { useState } from "react";

const Button = ({
  text = "Click Me",
  type = "button",
  onClick,
  size = "medium",
  color = "blue",
  border = "none",
  hoverColor,
  width = "large",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizes = {
    small: "9px 16px",
    medium: "9px 20px",
    large: "9px 44px",
  };

  const widths = {
    small: "100px",
    medium: "150px",
    large: "200px",
  };

  const colors = {
    blue: "#007bff",
    transparent: "rgba(0,0,0,0)",
    colored: "#007bff",
  };

  const hoverColors = {
    blue: "#0056b3", // Darker blue on hover
    transparent: "rgba(0,0,50,0.1)",
    colored: "#0056b3",
  };

  const borders = {
    none: "none",
    solid: "1px solid #007bff",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered
          ? hoverColor in colors
            ? colors[hoverColor] // Ensure hoverColor maps correctly
            : hoverColors[color] || hoverColors["blue"] // Fallback if hoverColor is invalid
          : colors[color] || colors["blue"],
        color: "#fff",
        padding: sizes[size] || sizes.medium,
        border: borders[border] || borders.none,
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        transition: "background-color 0.3s ease",
        width: "200px",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
