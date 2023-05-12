import "./ContactList.scss";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { FaUserEdit, FaRegTrashAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import { removeContact } from "../../store/contactSlise";
import { Provider } from "react-redux";
import store from "../../store";
import FormAddContact from "../Header/AddContact/FormAddContact/FormAddContact";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import HeartItem from "./HeartItem/HeartItem";
import avatar from "/avatar.png";

const ContactList = () => {
  const contactList = useAppSelector((state) => state.contactList.list);
  const choseCategory = useAppSelector((state) => state.categorySlice.category);
  const serchSymbols = useAppSelector((state) => state.searchSymbolSlice);

  const contactForCategory =
    choseCategory.value === "favorite"
      ? contactList.filter((contact) => contact.favorite)
      : contactList.filter(
          (contact) => contact.category === choseCategory.value
        );

  const dispatch = useAppDispatch();
  const MySwal = withReactContent(Swal);
  const closeModal = () => {
    MySwal.close();
  };
  return (
    <div className="container">
      <div className="table">
        {choseCategory.value === "allContacts" ? (
          <h3>Contacts:{contactList.length}</h3>
        ) : (
          <h3>Contacts: {contactForCategory.length}</h3>
        )}
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Contact Name</th>
              <th>Contacts</th>
              <th>Category</th>
              <th>Gender</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {choseCategory.value === "allContacts"
              ? contactList
                  .filter((item) => {
                    return serchSymbols.value.toLowerCase() === ""
                      ? item
                      : item.firstName
                          .toLowerCase()
                          .includes(serchSymbols.value) ||
                          item.secondName
                            .toLowerCase()
                            .includes(serchSymbols.value);
                  })
                  .map((contact) => (
                    <tr key={contact.id}>
                      <td>
                        <HeartItem state={contact.favorite} id={contact.id} />
                      </td>
                      <td>
                        <div className={"avatarWrapper"}>
                          {contact.photo !== "" ? (
                            <img
                              className={"avatar"}
                              src={contact.photo}
                              alt="img"
                            />
                          ) : (
                            <img className={"avatar"} src={avatar} alt="img2" />
                          )}
                          {contact.firstName} {contact.secondName}
                        </div>
                      </td>
                      <td className={"contact"}>
                        <p>{contact.email}</p>
                        <p>{contact.phone}</p>
                      </td>
                      <td>{contact.category}</td>
                      <td>{contact.gender}</td>
                      <td className={"edit"}>
                        <IconContext.Provider
                          value={{
                            size: "1.3rem",
                            className: "edit-icon",
                          }}
                        >
                          <div>
                            <FaUserEdit
                              onClick={() => {
                                MySwal.fire({
                                  html: (
                                    <Provider store={store}>
                                      <FormAddContact
                                        closeModal={closeModal}
                                        buttonText={"Update"}
                                        title={"Update contact"}
                                        id={contact.id}
                                      />
                                    </Provider>
                                  ),
                                  showConfirmButton: false,
                                });
                              }}
                            />
                          </div>
                        </IconContext.Provider>

                        <IconContext.Provider
                          value={{
                            size: "1.3rem",
                            className: "edit-icon",
                          }}
                        >
                          <div>
                            <FaRegTrashAlt
                              onClick={() => {
                                dispatch(removeContact(contact.id));
                              }}
                            />
                          </div>
                        </IconContext.Provider>
                      </td>
                    </tr>
                  ))
              : contactForCategory
                  .filter((item) => {
                    return serchSymbols.value.toLowerCase() === ""
                      ? item
                      : item.firstName
                          .toLowerCase()
                          .includes(serchSymbols.value) ||
                          item.secondName
                            .toLowerCase()
                            .includes(serchSymbols.value);
                  })
                  .map((contact) => (
                    <tr key={contact.id}>
                      <td>
                        <HeartItem state={contact.favorite} id={contact.id} />
                      </td>
                      <td>
                        {contact.firstName} {contact.secondName}
                      </td>
                      <td>
                        {contact.email} {contact.phone}
                      </td>
                      <td>{contact.category}</td>
                      <td>{contact.gender}</td>
                      <td className={"edit"}>
                        <IconContext.Provider
                          value={{
                            size: "1.3rem",
                            className: "edit-icon",
                          }}
                        >
                          <div>
                            <FaUserEdit
                              onClick={() => {
                                MySwal.fire({
                                  html: (
                                    <Provider store={store}>
                                      <FormAddContact
                                        closeModal={closeModal}
                                        buttonText={"Update"}
                                        title={"Update contact"}
                                        id={contact.id}
                                      />
                                    </Provider>
                                  ),
                                  showConfirmButton: false,
                                });
                              }}
                            />
                          </div>
                        </IconContext.Provider>

                        <IconContext.Provider
                          value={{
                            size: "1.3rem",
                            className: "edit-icon",
                          }}
                        >
                          <div>
                            <FaRegTrashAlt
                              onClick={() => {
                                dispatch(removeContact(contact.id));
                              }}
                            />
                          </div>
                        </IconContext.Provider>
                      </td>
                    </tr>
                  ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ContactList;
