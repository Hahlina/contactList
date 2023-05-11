import { FC } from "react";
import { useFormContext } from "react-hook-form";
interface IPropsSelectGroup {
  value: string[];
  field: string;
  label: string;
}
const SelectGroup: FC<IPropsSelectGroup> = ({ value, field, label }) => {
  const { register } = useFormContext();
  return (
    <>
      <label htmlFor={field}>{label}</label>
      <select {...register(field)}>
        {value.map((val, index) => (
          <option key={index} value={val.toLowerCase()} placeholder={"Chose"}>
            {val}
          </option>
        ))}
      </select>
    </>
  );
};
export default SelectGroup;
