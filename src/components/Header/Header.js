import "./header.css"
import Logo from "../../assets/img/logo.png"
import Hamburger from "../../assets/img/hamburger.png"
import Globus from "../../assets/img/globus-icon.png"
import Close from "../../assets/img/x-icon.png"
import { Link, NavLink } from "react-router-dom"
import { useContext } from "react"
import { LangContext } from "../../Context/LangContext"
import { Lang } from "../Lang/Lang"

const Header = () => {

    const { lang: til, setLang } = useContext(LangContext)

    const HandleToggel = () => {
        const hamburger = document.querySelector(".nav__hamburger");
        const modal = document.querySelector(".header__modalka");
        const removeModal = document.querySelector(".modalka__btn");

        hamburger.addEventListener("click", () => {
            modal.classList.add("modalka-active");
        });
        removeModal.addEventListener("click", () => {
            modal.classList.remove("modalka-active");
        });
    }

    return (
        <div>
            <h1 className="visually-hidden">Realproff</h1>
            <header className="container header">
                <Link to="/" className="header__logo"><img src={Logo} alt="logo" width="80" height="70" /></Link>
                <nav className="container navbar">
                    <div className="nav__box">
                        <NavLink to="/" className="nav__link">{Lang[til].homePage.home}</NavLink>
                        <NavLink to="/about" className="nav__link">{Lang[til].homePage.About}</NavLink>
                        <NavLink to="/catalog" className="nav__link">{Lang[til].homePage.Catalog}</NavLink>
                        <NavLink to="/servis" className="nav__link">{Lang[til].homePage.Servis}</NavLink>
                        <NavLink to="/contact" className="nav__link">{Lang[til].homePage.Kontakt}</NavLink>
                    </div>
                </nav>
                <div className="language-wrapper">
                    <img src={Globus} alt="icon" width="21" height="21" />
                    <select defaultValue={til} onChange={(evt) => {
                        setLang(evt.target.value)
                    }} className="header__select-language" name="language">
                        <option value="uz">UZ</option>
                        <option value="ru">RU</option>
                    </select>
                </div>
                <div className="header__modalka">
                    <div className="modalka__nav__box">
                        <button className="modalka__btn"><img src={Close} alt="icon" width="21" height="21" /></button>
                        <NavLink to="/" className="nav__link">{Lang[til].homePage.home}</NavLink>
                        <NavLink to="/about" className="nav__link">{Lang[til].homePage.About}</NavLink>
                        <NavLink to="/catalog" className="nav__link">{Lang[til].homePage.Catalog}</NavLink>
                        <NavLink to="/servis" className="nav__link">{Lang[til].homePage.Servis}</NavLink>
                        <NavLink to="/contact" className="nav__link">{Lang[til].homePage.Kontakt}</NavLink>
                    </div>
                </div>
                <button onClick={HandleToggel} className="nav__hamburger" type="button"><img src={Hamburger} alt="icon" width="21" height="16" /></button>
            </header>
        </div>
    )
}



export default Header