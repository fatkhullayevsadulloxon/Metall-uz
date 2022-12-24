import "./material.css"
import { Lang } from "../Lang/Lang"
import { LangContext } from "../../Context/LangContext"
import { useContext } from "react"

const Material = () => {

    const { lang: til, } = useContext(LangContext)


    return (
        <div>
            <div class="container izgotovlenie-section wow  ">
            <div class="izgotovleniye">
                <div class="izgotovlenie__box">
                        <h2 class="izgotovlenie__title">{Lang[til].homePage.MaterialHeading}</h2>
                        <p class="izgotovlenie__discription">{Lang[til].homePage.MaterialDesc}</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Material