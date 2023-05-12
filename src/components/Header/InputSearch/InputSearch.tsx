import s from "./InputSearch.module.scss";
import { useAppDispatch } from "../../../store/hook";
import { addSymbol } from "../../../store/searchSymbol";

const InputSearch = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={s.searchWrapper}>
      <input
        className={s.input}
        name="text"
        type="text"
        placeholder="Search"
        onChange={(e) => {
          dispatch(addSymbol({ value: e.target.value }));
        }}
      />
    </div>
  );
};
export default InputSearch;
