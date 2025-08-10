import React from "react";

export default function NeonButton({ children, onClick, className, style, ...props }) {
  return (
    <button
      onClick={onClick}
      className={className}
      style={{
        backgroundColor: "#330000",
        border: "2.5px solid #ff0000",
        color: "#ff0000",
        boxShadow: "0 0 10px #ff0000, 0 0 20px #ff0000, inset 0 0 8px #ff0000",
        borderRadius: "12px",
        fontWeight: "700",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        userSelect: "none",
        textShadow: "0 0 8px #ff1a1a",
        ...style,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4d0000")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#330000")}
      {...props}
    >
      {children}
    </button>
  );
}
