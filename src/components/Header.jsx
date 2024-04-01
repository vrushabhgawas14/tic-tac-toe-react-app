export default function Header(props) {
  return (
    <h1 className="text-center font-bold text-3xl mt-8 text-gray-300">
      {props.text}
    </h1>
  );
}
