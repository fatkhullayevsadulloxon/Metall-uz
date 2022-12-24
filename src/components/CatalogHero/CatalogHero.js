import "./cataloghero.css"
import { Lang } from "../Lang/Lang"
import { useContext } from "react"
import { LangContext } from "../../Context/LangContext"

const CatalogHero = () => {
    
    const{lang: til} = useContext(LangContext)


    
    return (
        <div>
            <div class="intro_section-p2">
                <div class="discription-wrapper-p2 container">
                    <h2 class="intro__title-p2">{Lang[til].homePage.Catalog}</h2>
                </div>
            </div>
        </div>
    )
}

export default CatalogHero