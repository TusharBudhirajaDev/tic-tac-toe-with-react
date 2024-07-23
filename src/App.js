import "./App.css";
import { useState } from "react";
import Board from "./Board";

function App() {
  const [reset, setReset] = useState(false);
  const [winner, setWinner] = useState("");
  const resetBoard = () => {
    setReset(true);
  };
  return (
    <div className="App">
      <p className="description">Let`s play Tie Tac Toe Game</p>
      <div className={`winner ${winner !== "" ? "" : "shrink"}`}>
        <div className="winner-text">{winner}</div>
        <button onClick={() => resetBoard()}>Reset Board</button>
      </div>
      <Board
        winner={winner}
        setWinner={setWinner}
        reset={reset}
        setReset={setReset}
      />
      <div className="information">
        <p className="player">Player 1: X</p>
        <p className="player">Player 2: O</p>
      </div>
    </div>
  );
}

export default App;
