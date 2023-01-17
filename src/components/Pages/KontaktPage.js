import { useContext } from "react"
import { LangContext } from "../../Context/LangContext"
import Kontakt from "../Kontakt/Kontakt"
import { Lang } from "../Lang/Lang"
import "./kontaktpage.css"


const KontaktPage = () => {
    const { lang: til } = useContext(LangContext)
    return (
        <div>
            <div class="contact__intro-section">
                <h4>{Lang[til].homePage.Kontakt}</h4>
            </div>
            <Kontakt />
        </div>
    )
}

export default KontaktPage