import "./aboutmission.css"
import { Lang } from "../Lang/Lang"
import { useContext } from "react"
import { LangContext } from "../../Context/LangContext"
import Diagram from "../../assets/img/diagram.png"
import Kalendar from "../../assets/img/kalendar-icon.png"
import Magistrt from "../../assets/img/magistr-icon.png"

const AboutMission = () => {
    
    const{lang: til} = useContext(LangContext)
    
    return (
        <div>
            <div class="mission-section container">
                <ul class="mission__list">
                    <li class="mission__list-item">
                        <img src={Magistrt} alt="icon" width="50" height="30" />
                        <p>{Lang[til].AboutPage.AboutMissionHeading1}</p>
                        <span>{Lang[til].AboutPage.AboutMissionDesc1}</span>
                    </li>
                    <li class="mission__list-item">
                        <img src={Kalendar} alt="icon" width="37" height="37" />
                        <p>{Lang[til].AboutPage.AboutMissionHeading2}</p>
                        <span>{Lang[til].AboutPage.AboutMissionDesc1}</span>
                    </li>
                    <li class="mission__list-item">
                        <img src={Diagram} alt="icon" width="37" height="29"/>
                        <p>{Lang[til].AboutPage.AboutMissionHeading3}</p>
                        <span>{Lang[til].AboutPage.AboutMissionDesc3}</span>
                    </li>

                </ul>
                <h5 class="mission-section__title">{Lang[til].AboutPage.AboutAdvertisingHeading1}</h5>
                <div class="mission__line-wrapper"><div class="mission-section__line"></div></div>
                <div class="mission__info-wrapper">
                    <p class="mission-section__subtitle">{Lang[til].AboutPage.AboutAdvertisingDesc}</p>
                    <span class="mission-section__info">{Lang[til].AboutPage.AboutAdvertisingDesc2}
                    </span>
                    </div>
                </div>
        </div>
    )
}

export default AboutMission