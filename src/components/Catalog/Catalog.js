import "./catalog.css"
import Item1 from "../../assets/img/item-1.jpg"
import Item2 from "../../assets/img/tosiq.jpg"
import Item3 from "../../assets/img/item3.jpg"
import Item4 from "../../assets/img/item4.jpg"
import { Link } from "react-router-dom"
import { Lang } from "../Lang/Lang"
import { useContext } from "react"
import { LangContext } from "../../Context/LangContext"

const Catalog = () => {

    const { lang: til, setLang } = useContext(LangContext)

    return (
        <div class="katalog-section container">
            <h3 class="katalog__title">{Lang[til].homePage.Catalog}</h3>
            <p class="katalog__discription">{Lang[til].homePage.KatalogDesc}</p>
            <div class="katalog">
                <ul class="catalog__wrapper-1__list">
                    <li class="catalog__list-item">
                        <Link class="catalog__list-item__link" to="catalog/darvoza">
                            <img class="list-item__img-1" src={Item1} alt="img" width="575" height="618" />
                            <div class="list-item__box-1">
                                <h4 class="list-item__title-c">{Lang[til].homePage.Eshiklar}</h4>
                                {/* <p class="list-item__discription-c">Ante mus blandit sapien sociosqu per consequat ad.</p> */}
                            </div>
                        </Link>
                    </li>
                    <li class="catalog__list-item">
                        <Link class="catalog__list-item__link" to="/catalog/tosiq">
                            <img class="list-item__img-2" src={Item2} alt="img" width="339" height="618"/>
                            <div class="list-item__box-2">
                                <h4 class="list-item__title-c">{Lang[til].homePage.Darvozalar}</h4>
                                {/* <!-- <p class="list-item__discription-c">Ante mus blandit sapien sociosqu</p> --> */}
                            </div>
                        </Link>
                    </li>
                </ul>
                <ul class="catalog__wrapper-2__list">
                    <li class="catalog__list-item c_li-3">
                        <Link class="catalog__list-item__link" to="/catalog/reshoka">
                            <img class="list-item__img-3" src={Item3} alt="img" width="454" height="274"/>
                            <div class="list-item__box-3">
                                <h4 class="list-item__title-c">{Lang[til].homePage.Reshotkalar}</h4>
                                {/* <!-- <p class="list-item__discription-c">Ante mus blandit sapien sociosqu per consequat ad.</p> --> */}
                            </div>
                        </Link>
                    </li>
                    <li class="catalog__list-item">
                        <Link class="catalog__list-item__link" to="/catalog/zina">
                            <img class="list-item__img-4" src={Item4} alt="img" width="454" height="274" />
                            <div class="list-item__box-4">
                                <h4 class="list-item__title-c">{Lang[til].homePage.Lesnitsalar}</h4>
                                {/* <!-- <p class="list-item__discription-c">Ante mus blandit sapien sociosqu per consequat ad.</p> --> */}
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <Link class="podrobnie-link" to="/catalog/all">{Lang[til].homePage.KatalogBtn}</Link>
            <p class="katalog__info">
                {Lang[til].homePage.KatalogDescBottom}
                <a class="messenjer-btn-i" href="https://www.instagram.com/realproffuz/">Instagram</a>
            </p>
        </div>
    )
}

export default Catalog