import s from "./Header.module.scss";
import InputSearch from "./InputSearch/InputSearch";
import AddContactBtn from "./AddContactBtn/AddContactBtn";
import SelectCategory from "./SelectCategory/SelectCategory";
const Header = () => {
  return (
    <>
      <header className={s.header}>
        <div className={s.logo}>Contact</div>
        <div className={s.inputBtn}>
          <InputSearch />
          <AddContactBtn />
        </div>
        <SelectCategory />
      </header>
    </>
  );
};
export default Header;
