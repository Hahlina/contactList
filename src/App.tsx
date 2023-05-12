import "./App.css";
import Header from "./components/Header/Header";
import { useAppSelector } from "./store/hook";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const reduxData = useAppSelector((state) => state.contactList.list);
  console.log("reduxData", reduxData);
  return (
    <>
      <Header />
      <ContactList />
    </>
  );
}

export default App;
