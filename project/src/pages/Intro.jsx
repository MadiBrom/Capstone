import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Custom hook for typing effect
const useTypingEffect = (text, speed, onComplete) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
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
  }, [text, speed]); // Only text and speed should be dependencies here

  return displayedText;
};

const Intro = () => {
  const navigate = useNavigate();

  const storyText1 =
    "main generator 32% power. Approx. 41 hours until depletion!";
  const storyText = `  WARNING 3419: ${storyText1}`;

  const typingSpeed = 50;

  const [isTypingFinished, setIsTypingFinished] = useState(false);

  // Use the custom hook for the typing effect with the callback
  const displayedText = useTypingEffect(storyText, typingSpeed, () => {
    setIsTypingFinished(true); // Set the button to show when typing is complete
  });

  // Handle navigation on button click
  const handleClick = () => {
    navigate("/tree"); // Navigate to the Tree page using its route path
  };

  return (
    <div className="container">
      <div className="main-div">
        <p id="intro">{displayedText}</p>
        {isTypingFinished && ( // Only show the button when typing is finished
          <button onClick={handleClick}>DISMISS</button>
        )}
      </div>
    </div>
  );
};

export default Intro;
