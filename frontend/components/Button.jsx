export default function Button({ handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-7 rounded hover:cursor-pointer"
    >
      Current Status
    </button>
  );
}
