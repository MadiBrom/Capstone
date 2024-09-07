import React from "react";
import { useNavigate } from "react-router-dom";

const Characters = () => {
  const navigate = useNavigate(); // Move this hook to the top level of the component

  const handleClick = () => {
    navigate("/intro"); // Use the navigate function here
  };

  return (
    <div>
      <h1 id="intro">Characters</h1>
      {/* {players.map((player) => (
        <div key={player.id}>
          <h3>{player.name}</h3>
          <p>Job: {player.job}</p>
          <p>Description: {player.description}</p>
        </div>
      ))} */}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Characters;
