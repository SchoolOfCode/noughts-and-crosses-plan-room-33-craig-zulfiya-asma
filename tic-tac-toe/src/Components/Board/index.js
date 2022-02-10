import React, { useState } from "react";
import "./style.css";

function Board({ board, setBoard, gameComplete }) {
  const [toggle, setToggle] = useState(true);
  const [playerTurn, setPlayerTurn] = useState("");

  function toggleBoard(index) {
    //   stop changing singns when game completed
    if (board[index].player) {
      return;
    }
    //  setting game to stop if is winner
    if (gameComplete) {
      return;
    }
    //  Created a new array, because privios function just  mutated boar array
    const newBoard = [...board];
    newBoard[index] = { player: playerTurn };
    setToggle(!toggle);
    console.log(index);

    setBoard(newBoard);
    if (toggle) {
      setPlayerTurn("X");
    } else {
      setPlayerTurn("O");
    }

    console.log("clicked");
  }

  console.log(playerTurn);
  return (
    <div className="board">
      {board.map(function (item, index) {
        return (
          <div className="top-left" onClick={() => toggleBoard(index)}>
            <div>{item.player}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Board;
