import "./App.css";
import Board from "../Board";
import Header from "../Header";
import Players from "../Players";
import { useState } from "react";
import Checker from "../Checker";

// I would add scores and reset game button as well

function App() {
  //   const [player1, setPlayer1] = useState("");

  //   const [player2, setPlayer2] = useState("Craig");
  const [gameComplete, setGameComplete] = useState(false);

  const [board, setBoard] = useState([
    { player: "" },
    { player: "" },
    { player: "" },
    { player: "" },
    { player: "" },
    { player: "" },
    { player: "" },
    { player: "" },
    { player: "" },
  ]);

  //  while loop where player1 is always X and they make their move First

  return (
    <div className="App">
      <Header />
      <Board gameComplete={gameComplete} board={board} setBoard={setBoard} />
      <Players />
      <Checker setGameComplete={setGameComplete} board={board} />
    </div>
  );
}

export default App;
