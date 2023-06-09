import { useNavigate } from "react-router-dom";
import { goToSignupPage } from "../routes/coordinator";

export const Button = (props) => {
  const { text, round, bg, onClick } = props;

  const navigate = useNavigate();

  if (bg === "null") {
    return (
      <button
        className="flex justify-center border-orange-border border py-3 px-32 w-80 rounded-full font-noto font-bold  text-orange-text "
        onClick={() => goToSignupPage(navigate)}
      >
        {text}
      </button>
    );
  } else if (round === "rounded-xl") {
    return (
      <button
        className="flex justify-center bg-gradient-to-r from-rose to-orange-border py-3 px-32 w-80 rounded-xl font-noto font-bold text-white"
        type="submit"
        onClick={onClick}
      >
        {text}
      </button>
    );
  } else {
    return (
      <button
        className="flex justify-center bg-gradient-to-r from-rose to-[#F9B24E] py-3 px-32 w-80 rounded-full font-noto font-bold text-white"
        type="submit"
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
};
