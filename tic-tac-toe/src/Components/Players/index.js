import React, { useState } from "react";

function Players({ player1, player2 }) {
   return (
      <div className="players">
         <h2 className="icon">
            <i class="fa-solid fa-user">{player1}</i>
         </h2>
         <h2 className="icon">
            <i class="fa-solid fa-user">{player2}</i>
         </h2>
      </div>
   );
}
export default Players;
