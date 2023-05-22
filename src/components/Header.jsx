import { useState } from "react";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  if (location.pathname === "/login") {
    return <></>;
  }

  return (
    <header className="grid grid-cols-3 items-center bg-gray-header h-12">
      {location.pathname.includes("comments") ? (
        <img
          className="text-gray-mid w-8 ml-7"
          src="./close.svg"
          alt="close icon"
        />
      ) : (
        ""
      )}
      <img
        className="col-start-2 justify-self-center w-7"
        src="./labeddit-logo.svg"
        alt="logo"
      />
      {isLoggedIn ? (
        <button className="pl-7 text-blue font-noto font-semibold">
          Logout
        </button>
      ) : (
        <button className="pl-7 text-blue font-noto font-semibold">
          Login
        </button>
      )}
    </header>
  );
};
