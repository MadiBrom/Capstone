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

  const storyText = "  WARNING 3419: Power Failure";

  const typingSpeed = 50;

  const [isTypingFinished, setIsTypingFinished] = useState(false);
  const [showMessage, setShowMessage] = useState(true);

  // Use the custom hook for the typing effect with the callback
  const displayedText = useTypingEffect(storyText, typingSpeed, () => {
    setIsTypingFinished(true);
  });

  const handleClick = () => {
    setShowMessage(false);
    navigate("/details");
  };

  return (
    <div id="intro-body">
      <div className="container">
        <div className="main-div">
          <div>
            {/* Initially display the first message */}
            <p id="intro">{displayedText}</p>
            {isTypingFinished && (
              <button onClick={handleClick}>See Details</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
