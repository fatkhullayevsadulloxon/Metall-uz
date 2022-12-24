import "./aboutadvertising.css"
import { Lang } from "../Lang/Lang"
import { useContext } from "react"
import { LangContext } from "../../Context/LangContext"

const AboutAdvertising = () => {
   
    const{lang: til} = useContext(LangContext)
   
    return (
        <div class="section_advertising">
            <h6 class="container">{Lang[til].AboutPage.AboutAdvertisingHeading2}</h6>
            <p class="container">{Lang[til].AboutPage.AboutAdvertisingDesc3}</p>
        </div>
    )
}

export default AboutAdvertising