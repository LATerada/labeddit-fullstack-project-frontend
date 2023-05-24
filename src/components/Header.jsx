import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/labeddit-logo.svg";
import closeIcon from "../assets/close.svg";
import { goToFeedPage, goToLoginPage } from "../routes/coordinator";
import AuthService from "../services/auth.services";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
 
  if (location.pathname === "/login") {
    return <></>;
  }

  const logout = () => {
    const response = AuthService.logout();
    console.log(response);
    goToLoginPage(navigate);
  };

  return (
    <div className="grid grid-cols-3 items-center bg-gray-header h-12">
      {location.pathname.includes("comments") ? (
        <img
          className="text-gray-mid w-8 ml-7"
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
      {!location.pathname.includes("signup") ? (
        <button
          className="pl-7 text-blue font-noto font-semibold"
          onClick={logout}
        >
          Logout
        </button>
      ) : (
        <button
          className="pl-7 text-blue font-noto font-semibold"
          onClick={() => goToLoginPage(navigate)}
        >
          Login
        </button>
      )}
    </div>
  );
};
