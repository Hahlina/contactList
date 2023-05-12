import { FC, InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import s from "./InputGroup.module.scss";
interface InputGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: "text" | "password" | "email" | "number" | "checkbox" | "file";
  field: string;
}

const InputGroup: FC<InputGroupProps> = ({ label, type = "text", field }) => {
  const { register, formState } = useFormContext();
  const errorMassage = formState.errors[field]?.message as string;
  return (
    <>
      <label htmlFor={field}>{label}</label>
      <input type={type} {...register(field)} />
      {formState?.errors?.[field]?.message && (
        <p className={s.error}>{errorMassage}</p>
      )}
    </>
  );
};
export default InputGroup;
