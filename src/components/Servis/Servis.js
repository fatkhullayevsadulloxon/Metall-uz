import "./servis.css"
import Mask1 from "../../assets/img/Mask1.jpg"
import Mask2 from "../../assets/img/Mask2.jpg"
import Mask3 from "../../assets/img/Mask3.jpg"
import Mask4 from "../../assets/img/Mask4.jpg"
import { Link } from "react-router-dom"
import { Lang } from "../Lang/Lang"
import { useContext } from "react"
import { LangContext } from "../../Context/LangContext"

const Servis = () => {
  
    const {lang: til, setLang} = useContext(LangContext) 
    
    return (
        <div class="section-xizmatlar container">
            <h3 class="xizmatlar__title">{Lang[til].homePage.servisHeading}</h3>
            <div class="xizmatlar__line"></div>
            <p class="xizmatlar__info">
                {Lang[til].homePage.servisDesc}
            </p>
            <ul class="xizmatlar__list">
                <li class="xizmatlar__item">
                    <img src={Mask1} alt="img" class="list-item__img" width="333" height="333"/>
                        <h5 class="list-item__title">{Lang[til].homePage.servisKesish}</h5>
                </li>
                <li class="xizmatlar__item">
                    <img src={Mask2} alt="img" class="list-item__img" width="333" height="333"/>
                    <h5 class="list-item__title">{Lang[til].homePage.servisMetal}</h5>
                </li>
                <li class="xizmatlar__item">
                    <img src={Mask3} alt="img" class="list-item__img" width="333" height="333"/>
                    <h5 class="list-item__title">{Lang[til].homePage.servisProkat}</h5>
                </li>
                <li class="xizmatlar__item">
                    <img src={Mask4} alt="img" class="list-item__img" width="333" height="333"/>
                    <h5 class="list-item__title">{Lang[til].homePage.servisLazer}</h5>
                </li>
            </ul>
            <Link class="xizmatlar__btn" to="/servis">{Lang[til].homePage.servisButtonAll}</Link>
        </div>
    )
}

export default Servis