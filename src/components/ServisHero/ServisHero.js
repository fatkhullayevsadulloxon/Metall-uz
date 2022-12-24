import { useContext } from "react"
import { LangContext } from "../../Context/LangContext"
import { Lang } from "../Lang/Lang"
import "./servishero.css"

const ServisHero = () => {

    const {lang: til} = useContext(LangContext)

    return (
        <div class="xizmatlar-pg__intro-section">
            <div class="xizmatlar-pg__intro-box container">
                <h3 class="intro-box__title">{Lang[til].ServisPage.ServisPageHeading}</h3>
            </div>
        </div>
    )
}

export default ServisHero