import "./SelectCategory.scss";
import Select from "react-select";
import { ISelectCategory } from "./types";
import { useState } from "react";
import { useAppDispatch } from "../../../store/hook";
import { addCategory } from "../../../store/choseCategorySlise";

const SelectCategory = () => {
  const dispatch = useAppDispatch();
  const options: ISelectCategory[] = [
    {
      value: "allContacts",
      label: "All contacts",
    },
    {
      value: "favorite",
      label: "Favorite",
    },
    {
      value: "work",
      label: "Work",
    },
    {
      value: "family",
      label: "Family",
    },
    {
      value: "private",
      label: "Private",
    },
    {
      value: "other",
      label: "Other",
    },
  ];

  const [selectedOption, setSelectedOption] = useState<ISelectCategory>(
    options[0]
  );

  const getValue = (): ISelectCategory | null => {
    return selectedOption
      ? options.find((o) => o.value === selectedOption.value) || null
      : null;
  };

  const handleChange = (selectedOption: ISelectCategory | null) => {
    setSelectedOption(selectedOption || options[0]);
    if (selectedOption) {
      dispatch(addCategory(selectedOption));
    }
  };
  return (
    <div className={"selectWrapper"}>
      <Select
        options={options}
        value={getValue()}
        onChange={handleChange}
        classNamePrefix={"customSelect"}
      />
    </div>
  );
};

export default SelectCategory;
