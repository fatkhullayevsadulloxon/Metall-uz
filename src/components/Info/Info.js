import "./info.css"
import { Lang } from "../Lang/Lang"
import { useContext } from "react"
import { LangContext } from "../../Context/LangContext"

const Info = () => {
    
    const { lang: til, setLang } = useContext(LangContext)
    
    return (
        <div class="section-info">
            <div class="section-info__box-1">
                <div class="container box__wrapper">
                    <h5 class="section-info__title">{Lang[til].homePage.infoHeading1}</h5>
                    <p class="section-info__dicription">
                        {Lang[til].homePage.infoDesc1}
                    </p>
                </div>
            </div>
            <div class="section-info__box-2">
                <div class="container box__wrapper">
                    <h5 class="section-info__title">{Lang[til].homePage.infoHeading2}</h5>
                    <p class="section-info__dicription">
                        {Lang[til].homePage.infoDesc2}
                    </p>
                </div>
            </div>
            <div class="section-info__box-3">
                <div class="container box__wrapper">
                    <h5 class="section-info__title">{Lang[til].homePage.infoHeading3}</h5>
                    <p class="section-info__dicription">
                        {Lang[til].homePage.infoDesc3}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Info