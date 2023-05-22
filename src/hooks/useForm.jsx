import { useState } from "react";

export function useForm(initialState) {
  const [form, setForm] = useState(initialState);

  const onChangeForm = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const resetForm = () => {
    setForm(initialState);
  };
  return { form, onChangeForm, resetForm };
}
