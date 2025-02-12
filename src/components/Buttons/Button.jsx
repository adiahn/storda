import React from "react";

const Button = ({
  text = "Click Me",
  type = "button",
  onClick,
  size = "medium",
  color = "blue",
  border = "none",
}) => {
  const sizes = {
    small: "8px 16px",
    medium: "10px 20px",
    large: "12px 44px",
  };

  const colors = {
    blue: "#007bff",
    transparent: "rgba(0,0,0,0)",
  };

  const borders = {
    none: "none",
    solid: "1px solid #007bff",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        backgroundColor: colors[color] || colors.blue,
        color: "#fff",
        padding: sizes[size] || sizes.medium,
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        margin: "5px",
        border: borders[border] || border.none,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
