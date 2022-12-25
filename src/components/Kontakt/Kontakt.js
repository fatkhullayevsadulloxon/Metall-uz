import "./kontakt.css"
import Order from "../../assets/img/order.jpg"
import { Lang } from "../Lang/Lang"
import { useContext } from "react"
import { LangContext } from "../../Context/LangContext"
import axios from "axios"

const Kontakt = () => {
    
    const {lang: til} = useContext(LangContext)

    const bot = () => {
        const TOKEN = "5654097511:AAFF7TnWd8nZxfnYCVDiGWBgspW-46opct4";
        const CHAT_ID = "-1001434361962";
        const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
        const form = document.getElementById("kontakt");
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            if (!this.name.value) {
                this.name.classList.add("input-red");
            } else if (!this.phone.value) {
                this.phone.classList.add("input-red");
            } else {
                let message = `<b>Заявка с сайта!</b> \n`;
                message += `<b>Отправителъ:</b> ${this.name.value} \n`;
                message += `<b>Тел:</b> ${this.phone.value} \n`;
                message += `<b>Текс:</b> ${this.message.value}`;

                axios.post(URI_API, {
                    chat_id: CHAT_ID,
                    parse_mode: "html",
                    text: message,
                });

                this.name.value = null;
                this.phone.value = null;
                this.message.value = null;

                this.name.classList.remove("input-red");
                this.phone.classList.remove("input-red");
            }
            console.log("ok");
        });
    }
    
    return (

         <div onClick={bot} class="section-order container">
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