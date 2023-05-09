import s from "./InputSearch.module.scss"


const InputSearch = () =>{
    return(
        <div className={s.searchWrapper}>
            <input className={s.input} name="text" type="text" placeholder="Search"/>
        </div>
    )
}
export default InputSearch