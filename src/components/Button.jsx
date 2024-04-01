export default function Button(props) {
  return (
    <button
      onClick={props.click}
      className="text-2xl p-4 border-2 rounded-2xl m-4 bg-teal-950 text-gray-300 border-gray-400"
    >
      {props.text}
    </button>
  );
}
