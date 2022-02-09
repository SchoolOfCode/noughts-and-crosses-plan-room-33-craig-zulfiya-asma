import { useState } from "react";

const Checker = ({ board }) => {
   const [win, setWin] = useState(true);

   if (board[0] === "X " && board[1] === "X" && board[0] === "X") {
   }
   return (
      <div>
         <h2>results</h2>
      </div>
   );
};

export default Checker;
