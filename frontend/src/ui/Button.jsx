export const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-slate-700 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded w-full mb-4"
    >
      {text}
    </button>
  );
};
