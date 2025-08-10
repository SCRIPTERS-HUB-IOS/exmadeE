import React from "react";

export default function OurDiscordButton() {
  return (
    <a
      href="https://discord.gg/skDSzwCScu"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Join our Discord"
      style={{
        position: "fixed",
        top: "1rem",
        left: "1rem",
        backgroundColor: "rgba(0, 114, 255, 0.85)",
        padding: "0.4rem 1rem",
        borderRadius: "10px",
        color: "#fff",
        fontWeight: "700",
        fontSize: "1rem",
        boxShadow: "0 0 10px rgba(0,114,255,0.9)",
        textDecoration: "none",
        userSelect: "none",
        zIndex: 5,
        display: "flex",
        alignItems: "center",
        gap: "0.6rem",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        fill="#00a2ff"
        style={{ filter: "drop-shadow(0 0 4px #00a2ff)" }}
      >
        <path d="M20 3.5A17.9 17.9 0 0 0 17.5 2 15.3 15.3 0 0 0 12 1C6.48 1 2 5.48 2 11c0 5.52 4.48 10 10 10 5.52 0 10-4.48 10-10 0-1.9-.62-3.65-1.68-5.09l.66-.41a2 2 0 1 0-2.98-2.99z" />
      </svg>
      Our Discord
    </a>
  );
}
