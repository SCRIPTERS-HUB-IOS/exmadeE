import React, { useState, useEffect } from "react";

export default function BrightnessSlider() {
  const [brightness, setBrightness] = useState(1);

  useEffect(() => {
    document.documentElement.style.setProperty("--site-brightness", brightness);
  }, [brightness]);

  return (
    <input
      type="range"
      min="0.3"
      max="1.5"
      step="0.01"
      value={brightness}
      onChange={(e) => setBrightness(e.target.value)}
      aria-label="Brightness Adjuster"
      style={{
        position: "fixed",
        top: "1rem",
        right: "1rem",
        width: "120px",
        cursor: "pointer",
        zIndex: 5,
        accentColor: "#ff0000",
        userSelect: "none",
      }}
    />
  );
}
