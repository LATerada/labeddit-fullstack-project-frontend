import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { FormInput } from "../components/FormInput";
import { useForm } from "../hooks/useForm";
import { goToFeedPage } from "../routes/coordinator";
import AuthService from "../services/auth.services";

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
    console.log(form);

    setIsNameValid(/.{2,}/.test(form.name));
    setIsEmailValid(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email));
    setIsPasswordValid(/^[0-9a-zA-Z$*&@#]{6,}$/.test(form.password));

    if (
      /.{2,}/.test(form.name) &&
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email) &&
      /^[0-9a-zA-Z$*&@#]{6,}$/.test(form.password)
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

  const welcomeMessage = "Hello, welcome to LabEddit ;)";

  return (
    <div className="grid grid-rows-7 items-center bg-white h-[calc(100vh-48px)] w-screen">
      <div className="font-ibm w-full">
        <h1 className="justify-self-start pl-10 text-black font-bold text-3xl">
          {welcomeMessage}
        </h1>
      </div>
      <div className=" row-start-3 flex flex-wrap justify-self-center justify-center pb-16">
        <form onSubmit={onSubmit} className="grid justify-center w-full">
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

        {!isNameValid || !isEmailValid || !isPasswordValid ? (
          <div className=" row-start-2 w-full px-10  font-noto text-xs">
            <p className=" font-medium pb-2">
              By continuing, you agree to our{" "}
              <span className=" text-blue">User Agreement</span> and{" "}
              <span className=" text-blue">Privacy Policy</span>
            </p>
            <div className=" flex gap-2">
              {" "}
              <input
                className=" font-semibold py-2"
                name="agree newsletter"
                type="checkbox"
                id="agree newsletter"
              ></input>
              <label id="agree newsletter">
                I agree to receive emails about cool stuff on Labeddit
              </label>
            </div>
          </div>
        ) : (
          <div className=" w-full px-10 pt-2 font-noto text-xs">
            <p className=" font-medium pb-2">
              By continuing, you agree to our{" "}
              <span className=" text-blue">User Agreement</span> and{" "}
              <span className=" text-blue">Privacy Policy</span>
            </p>
            <div className=" flex gap-2">
              {" "}
              <input
                className=" font-semibold py-2"
                name="agree newsletter"
                type="checkbox"
                id="agree newsletter"
              ></input>
              <label id="agree newsletter">
                I agree to receive emails about cool stuff on Labeddit
              </label>
            </div>
          </div>
        )}
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
