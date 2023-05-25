export const AgreementTerms = () => {
  return (
    <div className=" w-full px-10 font-noto text-xs">
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
  );
};
