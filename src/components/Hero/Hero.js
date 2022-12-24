import { useContext, useEffect, useState } from "react"
import "./hero.css"
import { Link } from "react-router-dom"
import { Lang } from "../Lang/Lang"
import { LangContext } from "../../Context/LangContext"

const Hero = () => {

    const { lang: til, setLang } = useContext(LangContext)

    return (
        <main>

            <div class="slideshow-container">
                <div class="mySlides fade">
                    <h2 class="carusel__title">{Lang[til].homePage.Hero}</h2>
                    <div class="carusel__wrapper-link container">
                        <a href="./catalog.html" class="carusel__link">{Lang[til].homePage.ButtonHero1}</a>
                        <a href="tel:+951113537" class="carusel__link">{Lang[til].homePage.ButtonHero2}</a>
                       
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Hero