import "./cataloginfo.css"
import Reshetki from "../../assets/img/reshetki-c.jpg"
import { Lang } from "../Lang/Lang"
import { useContext } from "react"
import { LangContext } from "../../Context/LangContext"

const CatalogInfo = () => {

    const {lang: til} = useContext(LangContext)

    return (
        <div className="section-info-product container">
            <div class="slideshow-container2">
                <div class="info-product__img-wrapper mySlides5 fade2">
                    <img src={Reshetki} alt="img" width="611" height="431"/>
                </div>
            </div>
            <div class="info-product__text-wrapper">
                <h4>{Lang[til].KatalogPage.KatalogInfoHeading}</h4>
                <hr class="info-product__hr" />
                <p>
                   {Lang[til].KatalogPage.KatalogInfoDesc}
                </p>
            </div>
        </div>
    )
}

export default CatalogInfo