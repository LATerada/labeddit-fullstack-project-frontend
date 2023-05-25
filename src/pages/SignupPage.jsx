import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AgreementTerms } from "../components/AgreementTerms";
import { Button } from "../components/Button";
import { FormInput } from "../components/FormInput";
import { useForm } from "../hooks/useForm";
import { goToFeedPage } from "../routes/coordinator";
import AuthService from "../services/auth.services";
import ValidationService from "../services/validation.service";

const SignupPage = () => {
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState(
    "Please insert at least 2 caracters."
  );
  const [emailErrorMessage, setEmailErrorMessage] = useState(
    "Please insert a valid e-mail."
  );
  const [passwordErrorMessage, setPasswordErrorMessage] = useState(
    "Please insert at least 6 caracters."
  );
  const welcomeMessage = "Hello, welcome to LabEddit ;)";

  const navigate = useNavigate();

  const { form, onChangeInputs, clearInputs } = useForm({
    name: "",
    email: "",
    password: "",
  });
  const body = {
    name: form.name,
    email: form.email,
    password: form.password,
  };

  const onSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();

    setIsNameValid(ValidationService.nameValidation(form.name));
    setIsEmailValid(ValidationService.emailValidation(form.email));
    setIsPasswordValid(ValidationService.passwordValidation(form.password));

    if (
      ValidationService.nameValidation(form.name) &&
      ValidationService.emailValidation(form.email) &&
      ValidationService.passwordValidation(form.password)
    ) {
      const respose = await AuthService.signup(body);
      if (respose.status === 409) {
        setIsEmailValid(false);
        setEmailErrorMessage("Email already exists");
      } else if (respose.status === 201) {
        setIsLoading(false);
        clearInputs();
        goToFeedPage(navigate);
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="grid grid-rows-7 items-center bg-white h-[calc(100vh-48px)] w-screen">
      <div className=" font-ibm w-full">
        <h1 className="justify-self-start pl-10 text-black font-ibm font-bold text-3xl">
          {welcomeMessage}
        </h1>
      </div>
      <div className=" row-start-3 flex flex-wrap justify-self-center justify-center pb-16">
        <form onSubmit={onSubmit} className="grid justify-center w-full pb-2">
          <FormInput
            placeholder="Username"
            name="name"
            type="name"
            value={form.name}
            onChange={onChangeInputs}
            isValid={isNameValid}
          ></FormInput>
          {isNameValid ? (
            ""
          ) : (
            <p className="mb-2 text-red">{nameErrorMessage}</p>
          )}
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
            <p className="mb-2 text-red">{emailErrorMessage}</p>
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
            <p className="mb-2 text-red">{passwordErrorMessage}</p>
          )}
        </form>
        <AgreementTerms />
        <div className="w-screen flex justify-center pt-4">
          {" "}
          <Button
            type="submit"
            text={isLoading ? "Loading..." : "Login"}
            round={"rounded-full"}
            bg={"gradient"}
            onClick={onSubmit}
          ></Button>
        </div>
      </div>
    </div>
  );
};
export default SignupPage;
