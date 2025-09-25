"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Default demo tracks – will be used only if no src or tracks prop provided
const DEFAULT_TRACKS = [
  {
    id: 1,
    title: "Sample Track 1",
    artist: "Unknown Artist",
    cover: "/assets/images/blog/post-6.jpg",
    // Remote audio so we don't need to commit binary files to the repo
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
];

export default function AudioPlayer({
  // Option 1: provide a single audio file
  src,
  title = "Sample Track",
  artist = "Avinash Tripathi",
  cover = "/assets/images/blog/post-6.jpg",
  // Option 2: provide an entire playlist array [{id,title,artist,cover,src}]
  tracks: customTracks = [],
}) {
  const audioRef = useRef(null);
  const progressRef = useRef(null);

  // Decide which track list to use based on props
  const tracksList =
    customTracks && customTracks.length
      ? customTracks
      : src
      ? [
          {
            id: 0,
            title,
            artist,
            cover,
            src,
          },
        ]
      : DEFAULT_TRACKS;

  const [currentTrack, setCurrentTrack] = useState(tracksList[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  // Blog heading text extracted from first <h1>
  const [headingText, setHeadingText] = useState("");

  // On mount, grab the first H1 content from the document
  useEffect(() => {
    if (typeof window === "undefined") return;
    const h1 = document.querySelector("h1");
    if (h1 && h1.textContent) {
      setHeadingText(h1.textContent.trim());
    }
  }, []);

  // Handle play / pause toggle
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Handle time update to sync progress bar
  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setCurrentTime(audio.currentTime);
    setDuration(audio.duration || 0);
  };

  // Update slider background to show played vs remaining colors
  useEffect(() => {
    if (!progressRef.current || !duration) return;
    const percent = (currentTime / duration) * 100;
    progressRef.current.style.background = `linear-gradient(to right, #A6E771 0%, #A6E771 ${percent}%, #01353C ${percent}%, #01353C 100%)`;
  }, [currentTime, duration]);

  // When user drags the progress bar
  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio) return;
    const time = Number(e.target.value);
    audio.currentTime = time;
    setCurrentTime(time);
  };
  // Skip forward/backward by a given number of seconds (e.g. ±10)
  const handleSkip = (secs) => {
    const audio = audioRef.current;
    if (!audio) return;
    const newTime = Math.min(
      Math.max(0, audio.currentTime + secs),
      duration || audio.duration || 0
    );
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Change track
  const changeTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  // Auto play when track changes if previously playing
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentTrack]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  // Format seconds -> mm:ss
  const formatTime = (sec) => {
    if (isNaN(sec)) return "0:00";
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="uc-sidebar panel mb-3">
      {/* Card */}
      {/*
       * Add universal background image for both light and dark modes
       * Tailwind background utilities provide a translucent overlay colour
       * while the inline style sets the actual image.
       */}
      <div
        className="widget vstack gap-3 p-4 rounded-3 bg-[#F4F5FA]/80 dark:bg-gray-800/80"
        style={{
          backgroundImage: "url('/assets/images/common/audio-player-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Header row */}
        <div className="panel hstack justify-between items-start">
          {/* Titles */}
          <div className="vstack gap-0">
            <span className="fw-semibold fs-5" style={{ color: "#01353C" }}>
              Listen to this Blog
            </span>
            <span className="fs-7" style={{ color: "#01353C" }}>
              {headingText || currentTrack.title}
            </span>
          </div>
          {/* Play / Pause */}
          <button
            onClick={togglePlay}
            className="btn btn-lg rounded-circle w-48px h-48px d-flex align-items-center justify-center"
            style={{ backgroundColor: "rgba(57,255,20,0.2)", color: "#39FF14" }}
          >
            {isPlaying ? (
              <i className="unicon-pause icon-1 fs-6" />
            ) : (
              <i className="unicon-play icon-1 fs-6" />
            )}
          </button>
        </div>

        {/* Progress row with skip */}
        <div className="panel hstack gap-2 items-center">
          {/* Back 10s */}
          <button
            onClick={() => handleSkip(-10)}
            className="btn btn-sm vstack align-items-center justify-center gap-0"
            style={{
              color: "#01353C",
              width: 40,
              background: "transparent",
              border: "none",
              zIndex: 2,
              position: "relative",
            }}
          >
            {/* curved arrow back */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 17L4 12L9 7" />
              <path d="M20 18v-1a4 4 0 0 0-4-4H4" />
            </svg>
            <span className="fs-8">-10</span>
          </button>

          {/* Slider */}
          <input
            type="range"
            ref={progressRef}
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            className="flex-grow-1 audio-slider"
            style={{
              WebkitAppearance: "none",
              height: 4,
              background: "#01353C",
              borderRadius: 2,
            }}
          />

          {/* Forward 10s */}
          <button
            onClick={() => handleSkip(30)}
            className="btn btn-sm vstack align-items-center justify-center gap-0"
            style={{
              color: "#01353C",
              width: 40,
              background: "transparent",
              border: "none",
              zIndex: 2,
              position: "relative",
            }}
          >
            {/* curved arrow forward */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 7l5 5-5 5" />
              <path d="M4 6v1a4 4 0 0 0 4 4h12" />
            </svg>
            <span className="fs-8">+30</span>
          </button>
        </div>

        {/* Time display */}
        <div className="panel hstack justify-between fs-8 text-gray-600 dark:text-gray-300">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
      >
        <source src={currentTrack.src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {/* Thumb styling injected once */}
      <style jsx global>{`
        input.audio-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #01353c;
          cursor: pointer;
          border: none;
          margin-top: -4px; /* centers thumb with 4px track */
        }
        input.audio-slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #01353c;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
}
