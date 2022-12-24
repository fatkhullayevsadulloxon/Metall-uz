import "./aboutservis.css"
import Servis from "../../assets/img/xizmatlar.jpg"
import { Lang } from "../Lang/Lang"
import { useContext } from "react"
import { LangContext } from "../../Context/LangContext"

const AboutServis = () => {

    const{lang: til} = useContext(LangContext)

    return (
        <div class="o-nas__xizmatlar-section container">
            <div class="xizmatlar__right-wrapper">
                <h6>{Lang[til].AboutPage.AboutServisHeading}</h6>
                <ul class="xizmatlar__lists">
                    <li class="xizmatlar__list-item"><p>{Lang[til].AboutPage.AboutServisLi1}</p></li>
                    <li class="xizmatlar__list-item"><p>{Lang[til].AboutPage.AboutServisLi2}</p></li>
                    <li class="xizmatlar__list-item"><p>{Lang[til].AboutPage.AboutServisLi3}</p></li>
                    <li class="xizmatlar__list-item"><p>{Lang[til].AboutPage.AboutServisLi4}</p></li>
                    <li class="xizmatlar__list-item"><p>{Lang[til].AboutPage.AboutServisLi5}</p></li>
                    <li class="xizmatlar__list-item"><p>{Lang[til].AboutPage.AboutServisLi6}</p></li>
                    <li class="xizmatlar__list-item"><p>{Lang[til].AboutPage.AboutServisLi7}</p></li>
                    <li class="xizmatlar__list-item"><p>{Lang[til].AboutPage.AboutServisLi8}</p></li>
                    <li class="xizmatlar__list-item"><p>{Lang[til].AboutPage.AboutServisLi9}</p></li>
                    <li class="xizmatlar__list-item"><p>{Lang[til].AboutPage.AboutServisLi10}</p></li>
                    <li class="xizmatlar__list-item"><p>{Lang[til].AboutPage.AboutServisLi11}</p></li>
                    <li class="xizmatlar__list-item"><p>{Lang[til].AboutPage.AboutServisLi12}</p></li>
                </ul>
            </div>
            <img class="xizmatlar__img" src={Servis} alt="img" width="607" height="607"/>
        </div>
    )
}

export default AboutServis