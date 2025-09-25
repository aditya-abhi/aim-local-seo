"use client";
import React from "react";

export default function RadarSweep() {
  const size = 640; // px
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          position: "relative",
          width: size,
          height: size,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            overflow: "hidden",
            background: "transparent",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background:
                "conic-gradient(from 0deg, rgba(147,232,95,0.8) 0deg, rgba(147,232,95,0.6) 30deg, rgba(147,232,95,0.4) 45deg, transparent 60deg 360deg)",
              transformOrigin: "50% 50%",
              animation: "radarSweep 6s linear infinite",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes radarSweep {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
