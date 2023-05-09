import "./SelectCategory.scss";
import Select from "react-select";
import { ISelectCategory } from "./types";
import { useState } from "react";

const SelectCategory = () => {
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
            value: "other",
            label: "Other",
        },
    ];

    const [selectedOption, setSelectedOption] = useState<ISelectCategory>(
        options[0]
    );

    const getValue = (): ISelectCategory | null => {
        return selectedOption ? options.find((o) => o.value === selectedOption.value) || null : null;
    };

    const handleChange = (selectedOption: ISelectCategory | null) => {
        setSelectedOption(selectedOption || options[0]);
    };
console.log(selectedOption)
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
