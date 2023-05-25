import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { useLocation, useNavigate } from "react-router-dom";
import { goToFeedPage, goToLoginPage } from "../routes/coordinator";
import logo from "../assets/labeddit-logo.svg";
import closeIcon from "../assets/close.svg";
import AuthService from "../services/auth.services";

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(GlobalContext);
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === "/login") {
    return <></>;
  }

  const buttonAction = () => {
    if (isLoggedIn) {
      AuthService.logout();
      setIsLoggedIn(false);
      goToLoginPage(navigate);
    } else {
      goToLoginPage(navigate);
    }
  };

  const buttonText = isLoggedIn ? "Logout" : "Login";

  return (
    <div className="grid grid-cols-3 items-center bg-gray-header h-12">
      {location.pathname.includes("comments") ? (
        <img
          className="text-gray-mid w-6 ml-7"
          src={closeIcon}
          alt="close icon"
          onClick={() => goToFeedPage(navigate)}
        />
      ) : (
        ""
      )}
      <img
        className="col-start-2 justify-self-center w-7"
        src={logo}
        alt="logo"
      />
      <button
        className="pl-7 text-blue font-noto font-semibold"
        onClick={buttonAction}
      >
        {buttonText}
      </button>
    </div>
  );
};
