import "./kontakt.css"
import Order from "../../assets/img/order.jpg"
import { Lang } from "../Lang/Lang"
import { useContext } from "react"
import { LangContext } from "../../Context/LangContext"

const Kontakt = () => {
    
    const {lang: til} = useContext(LangContext)
    
    return (

         <div class="section-order container">
            <div class="order__background">
                <img src={Order} alt="img" width="731" height="578"/>

                <form id="kontakt" class="order__form">
                    <p class="order__title">{Lang[til].homePage.KontaktHeading}</p>
                    <input type="text" name="name" class="order__input-name input-m" placeholder={Lang[til].homePage.KontaktPleaceholder1} />
                    <input type="tel" name="phone" class="order__input-phone input-m" placeholder={Lang[til].homePage.KontaktPleaceholder2}/>
                    <input type="text" name="message" class="order__input-info input-m" placeholder={Lang[til].homePage.KontaktPleaceholder3 }/>
                    <button type="submit" class="order__btn">{Lang[til].homePage.KontaktBtn}</button>
                </form>

            </div>
        </div>
    )
}

export default Kontakt