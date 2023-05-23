import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/labeddit-logo.svg";
import closeIcon from "../assets/close.svg";
import { goToLoginPage } from "../routes/coordinator";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === "/login") {
    return <></>;
  }
  const logout = () => {};
  return (
    <header className="grid grid-cols-3 items-center bg-gray-header h-12">
      {location.pathname.includes("comments") ? (
        <img
          className="text-gray-mid w-8 ml-7"
          src={closeIcon}
          alt="close icon"
        />
      ) : (
        ""
      )}
      <img
        className="col-start-2 justify-self-center w-7"
        src={logo}
        alt="logo"
      />
      {isLoggedIn ? (
        <button
          className="pl-7 text-blue font-noto font-semibold"
          onClick={logout()}
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
    </header>
  );
};
