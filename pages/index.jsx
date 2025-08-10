import React from "react";
import { useRouter } from "next/router";
import NeonParticleBackground from "../components/NeonParticleBackground";
import OurDiscordButton from "../components/OurDiscordButton";
import BrightnessSlider from "../components/BrightnessSlider";
import NeonButton from "../components/NeonButton";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <NeonParticleBackground />
      <OurDiscordButton />
      <BrightnessSlider />

      <main className="main-container">
        <h1 className="neon-title">exmadeW</h1>

        <NeonButton
          onClick={() => router.push("/methods")}
          className="methods-button"
          aria-label="Go to Methods"
        >
          Methods
        </NeonButton>
      </main>

      <style jsx>{`
        .main-container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3rem;
          background-color: #0a0000;
          position: relative;
          z-index: 1;
          user-select: none;
        }

        .neon-title {
          color: #ff1a1a;
          font-size: 4rem;
          font-weight: 900;
          text-shadow:
            0 0 6px #ff1a1a,
            0 0 12px #ff1a1a,
            0 0 24px #ff0000,
            0 0 48px #ff0000;
          margin: 0;
          user-select: none;
          letter-spacing: 0.1em;
        }

        .methods-button {
          font-size: 2.4rem;
          padding: 1.8rem 4rem;
          width: 260px;
          border-radius: 14px;
          background-color: #330000;
          border: 2.5px solid #ff0000;
          color: #ff0000;
          font-weight: 700;
          cursor: pointer;
          box-shadow:
            0 0 10px #ff0000,
            0 0 20px #ff0000,
            inset 0 0 8px #ff0000;
          transition: background-color 0.3s ease;
          text-shadow: 0 0 8px #ff1a1a;
          user-select: none;
        }

        .methods-button:hover {
          background-color: #4d0000;
        }
      `}</style>
    </>
  );
}
