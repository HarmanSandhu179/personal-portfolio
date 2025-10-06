import React, { useState, useEffect } from "react";

const TypingAnimation = ({ text, speed = 100, pauseTime = 1000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && index < text.length) {
      // Typing forward
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, index + 1));
        setIndex((prev) => prev + 1);
      }, speed);
    } else if (isDeleting && index > 0) {
      // Deleting backward
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, index - 1));
        setIndex((prev) => prev - 1);
      }, speed / 2); // delete slightly faster
    } else if (!isDeleting && index === text.length) {
      // Pause at end before deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && index === 0) {
      // Pause at start before typing again
      timeout = setTimeout(() => setIsDeleting(false), pauseTime);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, speed, pauseTime]);

  return (
    <span className="border-r-2 border-white pr-1 animate-pulse">
      {displayedText}
    </span>
  );
};

export default TypingAnimation;
