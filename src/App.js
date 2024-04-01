import Board from "./components/Board";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header text="Tic Tac Toe" />
      <div className="flex justify-center items-center h-[100vh] flex-col">
        <Board />
      </div>
    </>
  );
}
