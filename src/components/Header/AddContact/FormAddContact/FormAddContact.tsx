import InputGroup from "./InputGroup/InputGroup";
import s from "./FormAddContact.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import { validation } from "../validation";
import SelectGroup from "./SelectGroup/SelectGroup";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "../../../../store/hook";
import { addContact, updateContact } from "../../../../store/contactSlise";
import { IFormData } from "./types";
import { FC } from "react";
interface IpropsFormAddContact {
  closeModal: () => void;
  buttonText: "Submit" | "Update";
  title: "Add contact" | "Update contact";
  id?: string;
}
const FormAddContact: FC<IpropsFormAddContact> = ({
  closeModal,
  buttonText,
  title,
  id,
}) => {
  const dispatch = useAppDispatch();
  const contactList = useAppSelector((state) => state.contactList.list);
  const thisContact = contactList.find((contact) => contact.id === id);
  const defaultValues = thisContact
    ? {
        id: thisContact.id,
        firstName: thisContact.firstName,
        secondName: thisContact.secondName,
        email: thisContact.email,
        phone: thisContact.phone,
        category: thisContact.category,
        gender: thisContact.gender,
        favorite: thisContact.favorite,
        photo: thisContact?.photo,
      }
    : {
        id: uuidv4(),
        firstName: "",
        secondName: "",
        email: "",
        phone: "",
        category: "",
        gender: "",
        favorite: false,
        photo: "",
      };

  const form = useForm({
    mode: "onSubmit",
    resolver: yupResolver(validation),
    defaultValues,
  });

  const { reset } = form;

  const onSubmit = (data: IFormData) => {
    if (data && buttonText === "Submit") {
      dispatch(addContact(data));
      reset();
      closeModal();
    } else if (data && buttonText === "Update") {
      dispatch(updateContact(data));
      reset();
      closeModal();
    }
  };
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        form.setValue("photo", base64);
      };
    }
  };
  return (
    <>
      <FormProvider {...form}>
        <form
          className={s.form}
          onSubmit={form.handleSubmit(onSubmit)}
          noValidate
        >
          <h3>{title}</h3>
          <InputGroup label={"First name"} field={"firstName"} />
          <InputGroup label={"Second name"} field={"secondName"} />
          <InputGroup label={"Email"} field={"email"} type={"email"} />
          <InputGroup label={"Phone"} field={"phone"} type={"number"} />
          <SelectGroup
            value={["Private", "Work", "Family", "Other"]}
            field={"category"}
            label={"Category"}
          />
          <label htmlFor="file">Chose avatar</label>
          <input type="file" onChange={onFileChange} name="file" />
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
            <button className={s.button} type={"submit"}>
              {buttonText}
            </button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};
export default FormAddContact;
