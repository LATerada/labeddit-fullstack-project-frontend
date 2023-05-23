import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { FormInput } from "../components/FormInput";
import { useForm } from "../hooks/useForm";
import logo from"../assets/labeddit-logo.svg"

const LoginPage = () => {
  const navigate = useNavigate();

  const { form, onChangeInputs, clearInputs } = useForm({
    email: "",
    password: "",
  });

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true)

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    setIsEmailValid(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email));
    setIsPasswordValid(/^[0-9a-zA-Z$*&@#]{6,}$/.test(form.password))
  };

  return (
    <div className="grid grid-rows-2 justify-center items-center bg-white h-screen w-screen">
      <div className="grid justify-items-center">
        <img src={logo} alt="labeddit logo" />
        <h1 className="h-12 text-black font-bold text-4xl">LabEddit</h1>
        <h6 className="text-black font-light text-base">
          Labenu's Social Media Project
        </h6>
      </div>
      <div className="flex flex-wrap justify-self-center justify-center pb-20">
        <form onSubmit={onSubmit} className="w-10/12 pb-10">
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
            <p className="w-10/12 mb-2 mx-8 text-red">Please insert a valid e-mail.</p>
          )}
          <FormInput
           placeholder="Password"
           name="password"
           type="password"
           value={form.password}
           onChange={onChangeInputs}
           isValid={isPasswordValid}>
          </FormInput>
              {isPasswordValid ? (
            ""
          ) : (
            <p className="w-10/12 mb-2 mx-8 text-red">Please insert at least 6 caracters.</p>
          )}
        </form>
        <div className="w-screen flex justify-center">
          {" "}
          <Button
            type="submit"
            text={"Login"}
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
