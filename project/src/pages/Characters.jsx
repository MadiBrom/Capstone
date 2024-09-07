import React, { useState } from "react";
import playersData from "./playersData"; // Importing player data
import Modal from "./Modal"; // Importing the Modal component
import SinglePlayer from "./SinglePlayer"; // Importing the SinglePlayer component

// List of players data
const playersData = [
  {
    id: 1,
    name: "Player 1",
    job: " mechanic ? mage",
    description: "The agile warrior",
  },
  {
    id: 2,
    name: "Player 2",
    job: " mechanic ? mage",
    description: "The strong tank",
  },
  {
    id: 3,
    name: "Player 3",
    job: " mechanic ? mage",
    description: "The cunning rogue",
  },
  {
    id: 4,
    name: "Player 1",
    job: " mechanic ? mage",
    description: "The agile warrior",
  },
  {
    id: 5,
    name: "Player 2",
    job: " mechanic ? mage",
    description: "The strong tank",
  },
  {
    id: 6,
    name: "Player 3",
    job: " mechanic ? mage",
    description: "The cunning rogue",
  },
];

const Characters = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  const closeModal = () => {
    setSelectedPlayer(null);
  };

  return (
    <div>
      <h2>Select a Player</h2>
      <div>
        {playersData.map((player) => (
          <button key={player.id} onClick={() => handlePlayerClick(player)}>
            {player.name}
          </button>
        ))}
      </div>

      {selectedPlayer && (
        <Modal onClose={closeModal}>
          <SinglePlayer player={selectedPlayer} />
        </Modal>
      )}
    </div>
  );
};

export default Characters;
