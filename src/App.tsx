import "./App.css";
import Header from "./components/Header/Header";
import { useAppSelector } from "./store/hook";

function App() {
  const reduxData = useAppSelector((state) => state.contactList.list);
  console.log("reduxData", reduxData);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
