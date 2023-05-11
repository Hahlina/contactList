import InputGroup from "./InputGroup/InputGroup";
import s from "./FormAddContact.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import { validation } from "../validation";
import SelectGroup from "./SelectGroup/SelectGroup";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch } from "../../../store/hook";
import { addContact } from "../../../store/contactSlise";
import { IFormData } from "./types";
import { FC } from "react";
interface IpropsFormAddContact {
  closeModal: () => void;
}
const FormAddContact: FC<IpropsFormAddContact> = ({ closeModal }) => {
  const dispatch = useAppDispatch();
  const form = useForm({
    mode: "onSubmit",
    resolver: yupResolver(validation),
    defaultValues: {
      id: uuidv4(),
      firstName: "",
      secondName: "",
      email: "",
      phone: "",
      category: "",
      gender: "",
      favorite: false,
    },
  });
  const { reset } = form;
  const onSubmit = (data: IFormData) => {
    if (data) {
      dispatch(addContact(data));
      reset();
      closeModal();
    }
    console.log("=>(FormAddContact.tsx:18) ", data);
  };
  return (
    <>
      <FormProvider {...form}>
        <form
          className={s.form}
          onSubmit={form.handleSubmit(onSubmit)}
          noValidate
        >
          <h3>Add contact</h3>
          <InputGroup label={"First name"} field={"firstName"} />
          <InputGroup label={"Second name"} field={"secondName"} />
          <InputGroup label={"Email"} field={"email"} type={"email"} />
          <InputGroup label={"Phone"} field={"phone"} type={"number"} />
          <SelectGroup
            value={["Private", "Work", "Family", "Other"]}
            field={"category"}
            label={"Category"}
          />
          <SelectGroup
            value={["Male", "Female", "Other"]}
            field={"gender"}
            label={"Gender"}
          />
          <div className={s.checkbox}>
            <InputGroup
              label={"Favorite"}
              field={"favorite"}
              type={"checkbox"}
            />
          </div>
          <div className={s.btnWrapper}>
            <button type={"submit"}>Submit</button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};
export default FormAddContact;
