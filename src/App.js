import React, { useState } from "react";
import "./App.css";
import UnitBox from "./UnitBox";

function App() {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [score, setScore] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  let winner = null;
  const winningDeck = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleClick = (index) => {
    let tempScore = [...score];
    if (tempScore[index] === null) tempScore[index] = currentPlayer;
    setScore(tempScore);

    currentPlayer === "X" ? setCurrentPlayer("O") : setCurrentPlayer("X");

    for (let deck of winningDeck) {
      if (
        score[deck[0]] !== null &&
        score[deck[0]] === score[deck[1]] &&
        score[deck[1]] === score[deck[2]]
      ) {
        winner = score[deck[0]] === "X" ? 1 : 2;
        winner === 1
          ? setPlayer1Score(player1Score + 1)
          : setPlayer2Score(player2Score + 1);
        alert("The Winner is Player " + winner);
        setScore([null, null, null, null, null, null, null, null, null]);
      }
    }

    if (winner === null && !score.includes(null)) {
      alert("Game draw");
      setScore([null, null, null, null, null, null, null, null, null]);
    }
  };

  return (
    <div className="app">
      <div className="app__score">
        <div className="score__player">
          <h2>Player 1</h2>
          <h2>{player1Score}</h2>
        </div>
        <div className="score__player">
          <h2>Player 2</h2>
          <h2>{player2Score}</h2>
        </div>
      </div>
      <div className="app__board">
        <UnitBox onClick={() => handleClick(0)} text={score[0]} />
        <UnitBox onClick={() => handleClick(1)} text={score[1]} />
        <UnitBox onClick={() => handleClick(2)} text={score[2]} />
        <UnitBox onClick={() => handleClick(3)} text={score[3]} />
        <UnitBox onClick={() => handleClick(4)} text={score[4]} />
        <UnitBox onClick={() => handleClick(5)} text={score[5]} />
        <UnitBox onClick={() => handleClick(6)} text={score[6]} />
        <UnitBox onClick={() => handleClick(7)} text={score[7]} />
        <UnitBox onClick={() => handleClick(8)} text={score[8]} />
      </div>
    </div>
  );
}

export default App;
