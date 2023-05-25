import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { FormInput } from "../components/FormInput";
import { useForm } from "../hooks/useForm";
import { goToFeedPage } from "../routes/coordinator";
import { GlobalContext } from "../contexts/GlobalContext";
import logo from "../assets/labeddit-logo.svg";
import AuthService from "../services/authServices";
import ValidationService from "../services/validationService";

const LoginPage = () => {
  const { setIsLoggedIn } = useContext(GlobalContext);

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState(
    "Please insert a valid e-mail."
  );
  const [passwordErrorMessage, setPasswordErrorMessage] = useState(
    "Please insert at least 6 caracters."
  );

  const navigate = useNavigate();

  const { form, onChangeInputs, clearInputs } = useForm({
    email: "",
    password: "",
  });
  const body = {
    email: form.email,
    password: form.password,
  };

  const onSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();

    setIsEmailValid(ValidationService.emailValidation(form.email));
    setIsPasswordValid(ValidationService.passwordValidation(form.password));

    if (
      ValidationService.emailValidation(form.email) &&
      ValidationService.passwordValidation(form.password)
    ) {
      const respose = await AuthService.login(body);

      if (respose.status === 400) {
        setIsEmailValid(false);
        setEmailErrorMessage("Email or password invalid");
        setIsPasswordValid(false);
        setPasswordErrorMessage("Email or password invalid");
        setIsLoading(false);
      } else if (respose.status === 200) {
        setIsLoggedIn(true);
        setIsLoading(false);
        clearInputs();
        goToFeedPage(navigate);
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="grid grid-rows-2 justify-center items-center bg-white h-screen w-screen">
      <div className="grid justify-items-center font-ibm">
        <img src={logo} alt="labeddit logo" />
        <h1 className="h-12 text-black font-bold text-4xl">LabEddit</h1>
        <h6 className="text-black font-light text-base">
          Labenu's Social Media Project
        </h6>
      </div>
      <div className="flex flex-wrap justify-self-center justify-center pb-24">
        <form onSubmit={onSubmit} className="grid justify-center w-full">
          <FormInput
            placeholder="E-mail"
            name="email"
            type="email"
            value={form.email}
            onChange={onChangeInputs}
            isValid={isEmailValid}
          ></FormInput>
          {isEmailValid ? (
            ""
          ) : (
            <p className="w-72 mb-2 text-red">{emailErrorMessage}</p>
          )}
          <FormInput
            placeholder="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={onChangeInputs}
            isValid={isPasswordValid}
          ></FormInput>
          {isPasswordValid ? (
            ""
          ) : (
            <p className="w-72 mb-2 text-red">{passwordErrorMessage}</p>
          )}
        </form>
        <div className="w-screen flex justify-center pt-2">
          {" "}
          <Button
            type="submit"
            text={isLoading ? "Loading..." : "Login"}
            round={"rounded-full"}
            bg={"gradient"}
            onClick={onSubmit}
          ></Button>
        </div>
        <div className=" bg-gradient-to-r from-rose to-orange-border w-80 h-px my-4"></div>
        <div className="w-screen flex justify-center">
          <Button text={"Signup!"} round={"rounded-full"} bg={"null"}>
            {" "}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
