
import { useRef, useState, useEffect } from "react";
import weddingMusic from "../assets/music/wedding-instrumental.mp3";

export default function MusicPlayer() {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.25;

    const removeInteractionListeners = () => {
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("pointerdown", handleFirstInteraction);
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };

    const handleFirstInteraction = async () => {
      if (!audio.paused) {
        removeInteractionListeners();
        return;
      }

      try {
        await audio.play();
        setIsPlaying(true);
        removeInteractionListeners();
      } catch (error) {
        console.log("Playback waiting for another interaction:", error);
      }
    };

    // Attempt autoplay
    audio.play().catch(() => {
      console.log("Autoplay blocked. Waiting for interaction.");
    });

    // Mobile touchscreen support
    window.addEventListener(
      "touchstart",
      handleFirstInteraction,
      { passive: true }
    );

    // Pointer and desktop support
    window.addEventListener(
      "pointerdown",
      handleFirstInteraction
    );

    window.addEventListener("click", handleFirstInteraction);
    window.addEventListener("keydown", handleFirstInteraction);

    return () => {
      removeInteractionListeners();
      audio.pause();
    };
  }, []);

  const playMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Unable to play music:", error);
    }
  };

  const pauseMusic = () => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.pause();
    setIsPlaying(false);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={weddingMusic}
        loop
        preload="auto"
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {!isPlaying ? (
        <button
          className="music-button"
          type="button"
          onClick={playMusic}
        >
          <svg
            className="music-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M10 8.5L16 12L10 15.5V8.5Z" />
          </svg>
          <span>Play Music</span>
        </button>
      ) : (
        <button
          className="music-button"
          type="button"
          onClick={pauseMusic}
        >
          <svg
            className="music-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M9.5 8.5V15.5M14.5 8.5V15.5" />
          </svg>
          <span>Pause Music</span>
        </button>
      )}
    </>
  );
}
