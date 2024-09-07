import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Custom hook for typing effect
const useTypingEffect = (text, speed, onComplete, startTyping) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!startTyping) return; // Don't start typing until `startTyping` is true

    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + (text[index] || ""));
        index++;
      } else {
        clearInterval(interval); // Stop the interval once all text is typed
        if (onComplete) {
          onComplete(); // Call the onComplete callback when typing is finished
        }
      }
    }, speed);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [text, speed, startTyping]); // Re-run effect when `startTyping` becomes true

  return displayedText;
};

const Details = () => {
  const typingSpeed = 50;
  const navigate = useNavigate();
  const storyPart1 = "  Main generator 32% power."; // First part of the message
  const storyPart2 = "  Approximately 41 hours to depletion."; // Second part of the message

  const [isTypingFinishedPart1, setIsTypingFinishedPart1] = useState(false);
  const [isTypingFinishedPart2, setIsTypingFinishedPart2] = useState(false);
  const [showButton, setShowButton] = useState(false); // State to control button visibility

  // Typing effect for the first part
  const displayedPart1 = useTypingEffect(
    storyPart1,
    typingSpeed,
    () => {
      setIsTypingFinishedPart1(true); // Trigger after first part finishes
    },
    true
  ); // Start typing for the first part immediately

  // Typing effect for the second part (only starts after the first part finishes)
  const displayedPart2 = useTypingEffect(
    storyPart2,
    typingSpeed,
    () => {
      setIsTypingFinishedPart2(true); // Trigger after second part finishes
      setShowButton(true); // Show the button after both parts are typed
    },
    isTypingFinishedPart1 // The second part starts only after the first part finishes
  );

  const handleClick = () => {
    navigate("/tree"); // Action for the button
  };

  return (
    <div id="intro-body">
      <div className="container">
        <div className="main-div">
          {/* First part of the message */}
          <p id="part1">{displayedPart1}</p>

          {/* Second part of the message, displayed after the first part finishes */}
          {isTypingFinishedPart1 && <p id="part2">{displayedPart2}</p>}

          {/* Button that appears after both parts are fully typed */}
          {isTypingFinishedPart2 && (
            <button onClick={handleClick}>Do Something</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
