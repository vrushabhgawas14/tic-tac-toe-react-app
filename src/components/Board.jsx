import Square from "./Square";
import { useState } from "react";
import Button from "./Button";

export default function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);
  const winnerPossibilty = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleEvent = (index) => {
    const copyState = [...state];

    if (copyState[index] === null) {
      copyState[index] = turn ? "X" : "O";
      setState(copyState);
      setTurn(!turn);
    }
  };

  const isWinner = checkWinner();

  function checkWinner() {
    for (let arr of winnerPossibilty) {
      const [a, b, c] = arr;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return true;
      }
    }
    return false;
  }

  if (isTie()) {
    performReset();
  }

  function isTie() {
    for (let i = 0; i < state.length; i++) {
      if (state[i] != null) {
        if (i === state.length - 1) {
          return true;
        }
      } else {
        break;
      }
    }
    return false;
  }

  function performReset() {
    setState(Array(9).fill(null));
    setTurn(true);
  }

  return (
    <div className="">
      {isWinner ? (
        <>
          <h1 className="text-4xl font-bold sm:text-2xl sm:text-center text-gray-300">
            Player {turn ? "O" : "X"} has Won the Game
            <Button text="Play Again" click={performReset} />
          </h1>
        </>
      ) : (
        <div className="text-center">
          <div className="flex">
            <Square click={() => handleEvent(0)} value={state[0]} />
            <Square click={() => handleEvent(1)} value={state[1]} />
            <Square click={() => handleEvent(2)} value={state[2]} />
          </div>
          <div className="flex">
            <Square click={() => handleEvent(3)} value={state[3]} />
            <Square click={() => handleEvent(4)} value={state[4]} />
            <Square click={() => handleEvent(5)} value={state[5]} />
          </div>
          <div className="flex">
            <Square click={() => handleEvent(6)} value={state[6]} />
            <Square click={() => handleEvent(7)} value={state[7]} />
            <Square click={() => handleEvent(8)} value={state[8]} />
          </div>

          <Button text="Reset" click={performReset} />
        </div>
      )}
    </div>
  );
}
