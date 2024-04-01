export default function Square(props) {
  return (
    <div
      onClick={props.click}
      className="border-2 h-32 w-28 flex justify-center items-center cursor-pointer border-gray-400 hover:bg-sky-950"
    >
      <span className="text-5xl text-gray-300">{props.value}</span>
    </div>
  );
}
