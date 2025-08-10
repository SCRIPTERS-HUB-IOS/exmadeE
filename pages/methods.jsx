import React from "react";
import NeonButton from "../components/NeonButton";

const methods = [
  { name: "Splunk", link: "https://app.splunk.gg/u/exmadeGG" },
  { name: "Injuries", link: "https://www.logged.tg/auth/exmade" },
  { name: "Cookie Bypasser", link: "https://app.splunk.gg/u/exmadeGG" },
  { name: "Hyperlink Gen", link: "https://dsprs.vercel.app/hyperlink" },
];

export default function Methods() {
  return (
    <>
      <main className="methods-container">
        <h1 className="neon-title">Methods</h1>
        <div className="links-wrapper">
          {methods.map(({ name, link }) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="method-link"
            >
              {name}
            </a>
          ))}
        </div>
      </main>

      <style jsx>{`
        .methods-container {
          height: 100vh;
          background-color: #0a0000;
          padding: 3rem 1rem 1rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          user-select: none;
        }

        .neon-title {
          color: #ff1a1a;
          font-size: 3rem;
          font-weight: 900;
          text-shadow:
            0 0 6px #ff1a1a,
            0 0 12px #ff1a1a,
            0 0 24px #ff0000,
            0 0 48px #ff0000;
          margin-bottom: 2.5rem;
          user-select: none;
          letter-spacing: 0.1em;
        }

        .links-wrapper {
          width: 360px;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .method-link {
          display: block;
          text-align: center;
          padding: 1.2rem 0;
          border-radius: 12px;
          background-color: #330000;
          border: 2px solid #ff0000;
          color: #ff0000;
          font-weight: 700;
          font-size: 1.5rem;
          box-shadow:
            0 0 10px #ff0000,
            inset 0 0 6px #ff0000;
          text-decoration: none;
          user-select: none;
          transition: background-color 0.3s ease;
          text-shadow: 0 0 8px #ff1a1a;
          cursor: pointer;
        }

        .method-link:hover {
          background-color: #4d0000;
        }
      `}</style>
    </>
  );
}
