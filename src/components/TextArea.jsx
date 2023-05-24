export const TextArea = (props) => {
  const { name, type, value, onChange, placeholder, isValid } = props;

  if (!isValid) {
    return (
      <textarea
        className="h-24 w-80 bg-gray-header rounded-xl mt-8 p-4 placeholder:text-gray-inputPost font-ibm font-normal border border-red"
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></textarea>
    );
  } else {
    return (
      <textarea
        className="h-24 w-80 bg-gray-header rounded-xl mt-8 mb-4 p-4 placeholder:text-gray-inputPost font-ibm font-normal"
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></textarea>
    );
  }
};
