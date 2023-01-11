import { Link, NavLink } from "react-router-dom"
import CatalogAll from "../CatalogAll/CatalogAll"
import "./catalogmain.css"
import { Lang } from "../Lang/Lang"
import { useContext } from "react"
import { LangContext } from "../../Context/LangContext"

const CatalogMain = () => {

    const { lang: til } = useContext(LangContext)

    return (
        <div>
            <div class="catolog-main container">
                <div class="catolg-main__left-box">
                    <h2 class="catolg-main_title">{Lang[til].KatalogPage.KatalogMainHeading}</h2>
                    <hr class="catolg-hr" />
                    <p class="catolg-main_text">{Lang[til].KatalogPage.KatalogMaiinDesc}</p>
                </div>
              <div className="catalog-main-top">
                    <div class="main-catolog">
                        <div class="catolog-main-div">
                            <ul className="list">
                                <li className="item">
                                    <div className="catolg-main-p">
                                        <NavLink to="/catalog/all" className={({ isActive }) =>
                                            isActive
                                                ? "active-link catolg-main-p"
                                                : "catolg-main-p"}>{Lang[til].KatalogPage.KatalogLink1}
                                        </NavLink>
                                    </div>
                                </li>

                                <li className="item">
                                    <div className="catolg-main-p">
                                        <NavLink to="/catalog/basetka" className={({ isActive }) =>
                                            isActive
                                                ? "active-link catolg-main-p"
                                                : "catolg-main-p"}>{Lang[til].KatalogPage.KatalogLink2}
                                        </NavLink>
                                    </div>
                                </li>

                                <li className="item">
                                    <div className="catolg-main-p">
                                        <NavLink to="/catalog/darvoza" className={({ isActive }) =>
                                            isActive
                                                ? "active-link catolg-main-p"
                                                : "catolg-main-p"}>{Lang[til].KatalogPage.KatalogLink3}</NavLink>
                                    </div>
                                </li>

                                <li className="item">
                                    <div className="catolg-main-p">
                                        <NavLink to="/catalog/naves" className={({ isActive }) =>
                                            isActive
                                                ? "active-link catolg-main-p"
                                                : "catolg-main-p"}>{Lang[til].KatalogPage.KatalogLink4}
                                        </NavLink>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="catolog-main-div">
                            <ul className="list">
                                <li className="item">
                                    <div className="catolg-main-p">
                                        <NavLink to="/catalog/eskiz" className={({ isActive }) =>
                                            isActive
                                                ? "active-link catolg-main-p"
                                                : "catolg-main-p"}>{Lang[til].KatalogPage.KatalogLink5}
                                        </NavLink>
                                    </div>
                                </li>

                                <li className="item">
                                    <div className="catolg-main-p">
                                        <NavLink to="/catalog/lazer" className={({ isActive }) =>
                                            isActive
                                                ? "active-link catolg-main-p"
                                                : "catolg-main-p"}>{Lang[til].KatalogPage.KatalogLink6}
                                        </NavLink>
                                    </div>
                                </li>

                                <li className="item">
                                    <div className="catolg-main-p">
                                        <NavLink to="/catalog/zina" className={({ isActive }) =>
                                            isActive
                                                ? "active-link catolg-main-p"
                                                : "catolg-main-p"}>{Lang[til].KatalogPage.KatalogLink7}
                                        </NavLink>
                                    </div>
                                </li>

                                <li className="item">
                                    <div className="catolg-main-p">
                                        <NavLink to="/catalog/tosiq" className={({ isActive }) =>
                                            isActive
                                                ? "active-link catolg-main-p"
                                                : "catolg-main-p"}>{Lang[til].KatalogPage.KatalogLink8}
                                        </NavLink>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="catolog-main-div">
                            <ul className="list">
                                <li className="item">
                                    <div className="catolg-main-p">
                                        <NavLink to="/catalog/reshoka" className={({ isActive }) =>
                                            isActive
                                                ? "active-link catolg-main-p"
                                                : "catolg-main-p"}>{Lang[til].KatalogPage.KatalogLink9}
                                        </NavLink>
                                    </div>
                                </li>
                                <div className="catolg-main-p p-23">
                                    <NavLink to="/catalog/savdo" className={({ isActive }) =>
                                        isActive
                                            ? "active-link catolg-main-p"
                                            : "catolg-main-p"}>{Lang[til].KatalogPage.KatalogLink15}
                                    </NavLink>
                                </div>
                                <li className="item">
                                    <div className="catolg-main-p p-3">
                                        <NavLink to="/catalog/mukofot" className={({ isActive }) =>
                                            isActive
                                                ? "active-link catolg-main-p"
                                                : "catolg-main-p"}>{Lang[til].KatalogPage.KatalogLink11}
                                        </NavLink>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="catolog-main-div">
                            <ul className="list">
                                <li className="item">
                                    <div className="catolg-main-p">
                                        <NavLink to="/catalog/devor" className={({ isActive }) =>
                                            isActive
                                                ? "active-link catolg-main-p"
                                                : "catolg-main-p"}>{Lang[til].KatalogPage.KatalogLink12}
                                        </NavLink>
                                    </div>
                                </li>

                                <li className="item">
                                    <div className="catolg-main-p">
                                        <NavLink to="/catalog/tosiq" className={({ isActive }) =>
                                            isActive
                                                ? "active-link catolg-main-p"
                                                : "catolg-main-p"}>{Lang[til].KatalogPage.KatalogLink13}
                                        </NavLink>
                                    </div>
                                </li>

                                <li className="item">
                                    <div className="catolg-main-p">
                                        <NavLink to="/catalog/shirma" className={({ isActive }) =>
                                            isActive
                                                ? "active-link catolg-main-p"
                                                : "catolg-main-p"}>{Lang[til].KatalogPage.KatalogLink14}
                                        </NavLink>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
              </div>
            </div>
        </div>
    )
}

export default CatalogMain