export default function Button({ handleClick }) {
  return (
    <button
      onClick={handleClick}
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-7 rounded"
    >
      Current Status
    </button>
  );
}
