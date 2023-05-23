export const FormInput = (props) => {
  const { placeholder, name, type, value, onChange, isValid } = props;
  if (!isValid) {
    return (
      <input
        className="w-10/12 py-5 pl-4 mb-2 mx-8 placeholder:font-noto placeholder:font-normal border-red border "
        placeholder={placeholder}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      ></input>
    );
  }
  return (
    <input
      className="w-10/12 py-5 pl-4 mb-2 mx-8 placeholder:font-noto placeholder:font-normal border-gray-inputBorder border"
      placeholder={placeholder}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    ></input>
  );
};
