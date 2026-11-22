<<<<<<< HEAD

=======
# Sanket & Pranjali Wedding Invite
>>>>>>> 99f9f81 (Update README.md)


// useEffect(() => {
  //   const audio = audioRef.current;

  //   if (!audio) return;

  //   audio.volume = 0.25;

  //   const startMusic = async () => {
  //     try {
  //       await audio.play();
  //       setIsPlaying(true);
  //     } catch {
  //       console.log("Autoplay blocked. Waiting for user interaction.");
  //       setIsPlaying(false);
  //     }
  //   };

  //   startMusic();

  //   // Start music after the visitor interacts with the website
  //   const handleFirstInteraction = async () => {
  //     if (audio.paused) {
  //       try {
  //         await audio.play();
  //         setIsPlaying(true);
  //       } catch {
  //         console.log("Music playback could not start.");
  //       }
  //     }

  //     // Remove listeners after the first interaction
  //     window.removeEventListener("click", handleFirstInteraction);
  //     window.removeEventListener("keydown", handleFirstInteraction);
  //     window.removeEventListener("touchstart", handleFirstInteraction);
  //   };

  //   window.addEventListener("click", handleFirstInteraction);
  //   window.addEventListener("keydown", handleFirstInteraction);
  //   window.addEventListener("touchstart", handleFirstInteraction);

  //   return () => {
  //     audio.pause();

  //     window.removeEventListener("click", handleFirstInteraction);
  //     window.removeEventListener("keydown", handleFirstInteraction);
  //     window.removeEventListener("touchstart", handleFirstInteraction);
  //   };
  // }, []);