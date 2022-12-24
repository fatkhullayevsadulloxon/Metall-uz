import "./abouthero.css"
import { Lang } from "../Lang/Lang"
import { useContext } from "react"
import { LangContext } from "../../Context/LangContext"


const AboutHero = () => {

    const{lang: til} = useContext(LangContext)

    return (
        <div class="o-nas__intro-section">
            <div class="o-nas__intro__text-wrapper container">
                <h4 class="o-nas__intro__title">{Lang[til].homePage.About}</h4>
                <p>{Lang[til].AboutPage.AboutHeroDesc}</p>
            </div>
        </div>
    )
}

export default AboutHero