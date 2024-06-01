import { useNavigate } from "react-router-dom";

export const BottomText = ({ text, buttonText, to }) => {
  const navigate = useNavigate();
  return (
    <div className="text-slate-500">
      {text}
      &nbsp;
      <button
        className="underline text-black"
        onClick={() => {
          navigate(to);
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};
