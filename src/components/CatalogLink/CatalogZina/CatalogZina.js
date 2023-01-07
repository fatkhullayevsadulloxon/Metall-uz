import CatalogHero from "../../CatalogHero/CatalogHero"
import CatalogMain from "../../CatalogMain/CatalogMain"
import { Lang } from "../../Lang/Lang"
// RASMLAR //

import Item1 from "../../../assets/img/zina1.jpg"
import Item2 from "../../../assets/img/zina2.jpg"
import Item3 from "../../../assets/img/zina3.jpg"
import Item4 from "../../../assets/img/zina4.jpg"
import Item5 from "../../../assets/img/zina5.jpg"
import Item6 from "../../../assets/img/zina6.jpg"
import Item7 from "../../../assets/img/zina7.jpg"
import Item8 from "../../../assets/img/zina8.jpg"
import Item9 from "../../../assets/img/zina9.jpg"

import "./catalogzina.css"
import CatalogInfo from "../../CatalogInfo/CatalogInfo"
import { useContext } from "react"
import { LangContext } from "../../../Context/LangContext"

const CatalogZina = () => {

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
                    <li class="catalog-images__list-item">
                        <img src={Item4} alt="img" width="400" height="492" />
                        <div class="list-item__box-text">
                            <p>Asssssss ssssss</p>
                            <span>asdfgh kdsjfdnfj</span>
                        </div>
                    </li>
                    <li class="catalog-images__list-item">
                        <img src={Item5} alt="img" width="400" height="492" />
                        <div class="list-item__box-text">
                            <p>Asssssss ssssss</p>
                            <span>asdfgh kdsjfdnfj</span>
                        </div>
                    </li>
                    <li class="catalog-images__list-item">
                        <img src={Item6} alt="img" width="400" height="492" />
                        <div class="list-item__box-text">
                            <p>Asssssss ssssss</p>
                            <span>asdfgh kdsjfdnfj</span>
                        </div>
                    </li>
                    <li class="catalog-images__list-item">
                        <img src={Item7} alt="img" width="400" height="492" />
                        <div class="list-item__box-text">
                            <p>Asssssss ssssss</p>
                            <span>asdfgh kdsjfdnfj</span>
                        </div>
                    </li>
                    <li class="catalog-images__list-item">
                        <img src={Item8} alt="img" width="400" height="492" />
                        <div class="list-item__box-text">
                            <p>Asssssss ssssss</p>
                            <span>asdfgh kdsjfdnfj</span>
                        </div>
                    </li>
                    <li class="catalog-images__list-item">
                        <img src={Item9} alt="img" width="400" height="492" />
                        <div class="list-item__box-text">
                            <p>Asssssss ssssss</p>
                            <span>asdfgh kdsjfdnfj</span>
                        </div>
                    </li>

                </ul>
                
            </div>
        </div>
    )
}

export default CatalogZina