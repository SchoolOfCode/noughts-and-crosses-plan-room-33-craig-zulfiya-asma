import { useState } from "react";
import "./style.css";

export default function Checker({ board, setGameComplete }) {
  //   const [winner, setWinner] = useState(true);

  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  function checkWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    console.log(squares);
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      console.log(squares[a], squares[b], squares[c]);
      if (
        // check and compare the value not objects
        squares[a].player &&
        squares[a].player === squares[b].player &&
        squares[a].player === squares[c].player
      ) {
        return squares[a].player;
      }
    }

    return null;
  }

  const winner = checkWinner(board);
  // stop game
  if (winner) {
    setGameComplete(true);
  }
  console.log(winner);
  let winningPlayer = "";
  if (winner === "X") {
    // set winner to player1
    winningPlayer = player1;
  } else if (winner === "O") {
    // set winner to player2

    winningPlayer = player2;
  }

  return (
    <div>
      <div className="user1">
        <i className="fa-solid fa-user player"></i>
        <input
          value={player1}
          id="player1"
          onChange={(e) => {
            setPlayer1(e.target.value);
          }}
        ></input>
      </div>
      <div className="user2">
        <i className="fa-solid fa-user player"></i>
        <input
          value={player2}
          id="player2"
          onChange={(e) => {
            setPlayer2(e.target.value);
          }}
        ></input>
      </div>

      <h2>Winner is {winningPlayer}</h2>
    </div>
  );
}
