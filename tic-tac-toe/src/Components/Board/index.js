import React, { useState } from "react";
import "./style.css";

function Board({ board, setBoard }) {
   const [toggle, setToggle] = useState(true);
   const [playerTurn, setPlayerTurn] = useState("O");

   function toggleBoard(e) {
      setToggle(!toggle);
      console.log(e);
      board[e].player = playerTurn;
      setBoard(board);
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

         {/* <div className="top-middle-left">
            <div></div>
         </div>
         <div className="top-right">
            <div>3</div>
         </div>
         <div className="left-middle">
            <div>4</div>
         </div>
         <div className="middle-square">
            <div>5</div>
         </div>
         <div className="middle-right">
            <div>6</div>
         </div>
         <div className="bottom-left">
            <div>7</div>
         </div>
         <div className="bottom-middle">
            <div>8</div>
         </div>
         <div className="bottom-right">
            <div>9</div>
         </div> */}
      </div>
   );
}

export default Board;
