import s from "./AddContactBtn.module.scss";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import FormAddContact from "../AddContact/FormAddContact/FormAddContact";
import { Provider } from "react-redux";
import store from "../../../store";

const AddContactBtn = () => {
  const MySwal = withReactContent(Swal);
  const closeModal = () => {
    MySwal.close();
  };
  return (
    <>
      <div
        className={s.btnAddContact}
        onClick={() => {
          MySwal.fire({
            html: (
              <Provider store={store}>
                <FormAddContact
                  closeModal={closeModal}
                  buttonText={"Submit"}
                  title={"Add contact"}
                />
              </Provider>
            ),
            showConfirmButton: false,
          });
        }}
      ></div>
    </>
  );
};
export default AddContactBtn;
