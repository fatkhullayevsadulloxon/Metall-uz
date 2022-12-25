import CatalogHero from "../CatalogHero/CatalogHero"
import CatalogMain from "../CatalogMain/CatalogMain"
import Item1 from "../../assets/img/item-1.jpg"
import Item2 from "../../assets/img/item2.jpg"
import Item3 from "../../assets/img/item3.jpg"
import Item4 from "../../assets/img/item4.jpg"
import Zina from "../../assets/img/zina.jpg"
import Savdo from "../../assets/img/savdo.jpg"
import rishotka from "../../assets/img/rishotka.jpg"
import tosiq from "../../assets/img/tosiq.jpg"
import Devor from "../../assets/img/devor.jpg"
import divan from "../../assets/img/divan.png"
import eskiz from "../../assets/img/eskiz.jpg"
import Shirmalar from "../../assets/img/Shirmalar.jpg"
import { Lang } from "../Lang/Lang"

import "./catalogAll.css"
import CatalogInfo from "../CatalogInfo/CatalogInfo"
import { useContext } from "react"
import { LangContext } from "../../Context/LangContext"

const CatalogAll = () => {
   
    const {lang: til} = useContext(LangContext)

    return (
        <div>
            <CatalogHero />
            <CatalogMain/>
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
                        <img src={Zina} alt="img" width="400" height="492" />
                        <div class="list-item__box-text">
                            <p>Asssssss ssssss</p>
                            <span>asdfgh kdsjfdnfj</span>
                        </div>
                    </li>
                    <li class="catalog-images__list-item">
                        <img src={tosiq} alt="img" width="400" height="492" />
                        <div class="list-item__box-text">
                            <p>Asssssss ssssss</p>
                            <span>asdfgh kdsjfdnfj</span>
                        </div>
                    </li>
                    <li class="catalog-images__list-item">
                        <img src={Savdo} alt="img" width="400" height="492" />
                        <div class="list-item__box-text">
                            <p>Asssssss ssssss</p>
                            <span>asdfgh kdsjfdnfj</span>
                        </div>
                    </li>
                    <li class="catalog-images__list-item">
                        <img src={rishotka} alt="img" width="400" height="492" />
                        <div class="list-item__box-text">
                            <p>Asssssss ssssss</p>
                            <span>asdfgh kdsjfdnfj</span>
                        </div>
                    </li>
                    <li class="catalog-images__list-item">
                        <img src={Devor} alt="img" width="400" height="492" />
                        <div class="list-item__box-text">
                            <p>Asssssss ssssss</p>
                            <span>asdfgh kdsjfdnfj</span>
                        </div>
                    </li>
                    <li class="catalog-images__list-item">
                        <img src={divan} alt="img" width="400" height="492" />
                        <div class="list-item__box-text">
                            <p>Asssssss ssssss</p>
                            <span>asdfgh kdsjfdnfj</span>
                        </div>
                    </li>
                    <li class="catalog-images__list-item">
                        <img src={eskiz} alt="img" width="400" height="492" />
                        <div class="list-item__box-text">
                            <p>Asssssss ssssss</p>
                            <span>asdfgh kdsjfdnfj</span>
                        </div>
                    </li>
                    <li class="catalog-images__list-item">
                        <img src={Shirmalar} alt="img" width="400" height="492" />
                        <div class="list-item__box-text">
                            <p>Asssssss ssssss</p>
                            <span>asdfgh kdsjfdnfj</span>
                        </div>
                    </li>
                </ul>
                <button class="section-catalog-images__btn">{Lang[til].homePage.KatalogBtn}</button>
            </div>
        </div>
    )
}

export default CatalogAll