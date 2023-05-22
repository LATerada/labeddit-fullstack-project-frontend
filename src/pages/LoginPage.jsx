import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { useForm } from "../hooks/useForm";

const LoginPage = () => {
  const navigate = useNavigate();

  const { form, onChangeInputs, clearInputs } = useForm({
    email: "",
    password: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <div className="grid grid-rows-2 justify-center items-center bg-white h-screen w-screen">
      <div className="grid justify-items-center">
        <img src="./labeddit-logo.svg" alt="labeddit logo" />
        <h1 className="h-12 text-black font-bold text-4xl">LabEddit</h1>
        <h6 className="text-black font-light text-base">
          Labenu's Social Media Project
        </h6>
      </div>
      <div className="flex flex-wrap justify-self-center justify-center pb-20">
        <form onSubmit={onSubmit} className="pb-10">
          <input
            className="w-10/12 py-5 pl-4 mb-2 mx-8 placeholder:font-noto placeholder:font-normal border-gray-inputBorder border"
            placeholder="E-mail"
            name="email"
            type="email"
            value={form.email}
            onChange={onChangeInputs}
          ></input>
          <input
            className="w-10/12 py-5 pl-4 mx-8 placeholder:font-noto placeholder:font-normal  border-gray-inputBorder border"
            placeholder="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={onChangeInputs}
          ></input>
        </form>
        <Button
          type="submit"
          text={"Login"}
          round={"rounded-full"}
          bg={"gradient"}
          onClick={onSubmit}
        ></Button>
        <div className=" bg-gradient-to-r from-rose to-orange-border w-80 h-px my-4"></div>
        <Button text={"Signup!"} round={"rounded-full"} bg={"null"}>
          {" "}
        </Button>
      </div>
    </div>
  );
};
export default LoginPage;
