import CatalogHero from "../../CatalogHero/CatalogHero"
import CatalogMain from "../../CatalogMain/CatalogMain"
import { Lang } from "../../Lang/Lang"
// RASMLAR //

import Item1 from "../../../assets/img/tosiq1.jpg"
import Item2 from "../../../assets/img/tosiq2.jpg"
import Item3 from "../../../assets/img/tosiq3.jpg"


import "./catalogeskiz.css"
import CatalogInfo from "../../CatalogInfo/CatalogInfo"
import { useContext } from "react"
import { LangContext } from "../../../Context/LangContext"

const CatalogTosiq = () => {

    const { lang: til } = useContext(LangContext)

    return (
        <div>
            <CatalogHero />
            <CatalogMain />
            <div class="section-catalog-images container">
                <ul class="catalog-images__list">
                    <li class="catalog-images__list-item">
                        <img src={Item1} alt="img" width="400" height="492" />
                        <div class="list-item__box-text">
                            <p>Asssssss ssssss</p>
                            <span>asdfgh kdsjfdnfj</span>
                        </div>
                    </li>
                    <li class="catalog-images__list-item">
                        <img src={Item2} alt="img" width="400" height="492" />
                        <div class="list-item__box-text">
                            <p>Asssssss ssssss</p>
                            <span>asdfgh kdsjfdnfj</span>
                        </div>
                    </li>
                    <li class="catalog-images__list-item">
                        <img src={Item3} alt="img" width="400" height="492" />
                        <div class="list-item__box-text">
                            <p>Asssssss ssssss</p>
                            <span>asdfgh kdsjfdnfj</span>
                        </div>
                    </li>

                </ul>
                <button class="section-catalog-images__btn">{Lang[til].homePage.KatalogBtn}</button>
            </div>
            <CatalogInfo />
        </div>
    )
}

export default CatalogTosiq