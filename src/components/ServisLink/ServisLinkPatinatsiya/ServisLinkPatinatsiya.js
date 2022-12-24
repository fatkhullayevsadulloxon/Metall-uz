import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { LangContext } from "../../../Context/LangContext"
import { Lang } from "../../Lang/Lang"
import ServisHero from "../../ServisHero/ServisHero"
import ServisMain from "../../ServisMain/ServisMain"
import Catalog1 from "../../../assets/img/pg-katalog2.jpg"

const ServisLinkPatinatsiya = () => {

    const {lang: til} = useContext(LangContext)

    return (
        <div>
            <ServisHero/>
            <ServisMain/>
                <div class="catalog-wrapper container">
                    <div class="catalog-table">
                        <div class="catalog-table__btn-wrapper">
                            <NavLink id="1" to="/servis/metall" className="btn-wrapper__btn btn-js" tymetallpe="button">{Lang[til].ServisPage.ServisPageLink1}</NavLink>
                            <NavLink id="1" to="/servis/patinatsiya" className="btn-wrapper__btn btn-js button-active" type="button">{Lang[til].ServisPage.ServisPageLink2}</NavLink>
                            <NavLink id="1" to="/servis/lazerli" className="btn-wrapper__btn btn-js" type="button">{Lang[til].ServisPage.ServisPageLink3}</NavLink>
                            <NavLink id="1" to="/servis/metall-egiltirish" className="btn-wrapper__btn btn-js" type="button">{Lang[til].ServisPage.ServisPageLink4}</NavLink>
                            <NavLink id="1" to="/servis/metall-prokat" className="btn-wrapper__btn btn-js" type="button">{Lang[til].ServisPage.ServisPageLink5}</NavLink>
                            <NavLink id="1" to="/servis/metal-prokat-lazer" className="btn-wrapper__btn btn-js" type="button">{Lang[til].ServisPage.ServisPageLink6}</NavLink>
                        </div>
                        <p class="catalog-table__discription-x">{Lang[til].ServisPage.ServisPageLinkDesc2}</p>
                        <img class="catalog-table__img-x" src={Catalog1} alt="img" width="324" height="384" />
                    </div>
                </div>
            </div>
    )
}

export default ServisLinkPatinatsiya