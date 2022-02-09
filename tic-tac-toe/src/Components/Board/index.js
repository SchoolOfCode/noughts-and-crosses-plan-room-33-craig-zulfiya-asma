import React from "react";
import "./style.css";

function Board() {
  return (
    <div className="board">
      <div className="top-left">
        <div>1</div>
      </div>
      <div className="top-middle-left">
        <div>2</div>
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
      </div>
    </div>
  );
}

export default Board;