import "./footer.css"
import Logo from "../../assets/img/footer-logo.png"
import Telegram from "../../assets/img/telegram.png"
import Instagram from "../../assets/img/instagram.png"
import Facebook from "../../assets/img/facebok.png"
import Location from "../../assets/img/loation.png"
import Phone from "../../assets/img/phone.png"
import Tbt from "../../assets/img/tbtlogo.png"
import { Lang } from "../Lang/Lang"
import { useContext } from "react"
import { LangContext } from "../../Context/LangContext"

const Footer = () => {

    const {lang: til} = useContext(LangContext)

    return (
        <footer class="footer">
            <div class="footer__wrapper container">
                <div class="footer__left-content-box">
                    <div class="footer__logo-box">
                        <a href="#" class="footer__logo-link">
                            <img className="logo" src={Logo} alt="logo" class="footer__logo" width="10" height="10" />
                        </a>    
                    </div>
                    <div class="footer__messenger-box">
                        <p class="footer__text-messenger">{Lang[til].homePage.FooterNetwork}</p>
                        <div class="footer__icon-wrapper">
                            <a href="#" class="footer__messenger-link">
                                <img class="footer__messenger-icon" src={Facebook} alt="icon"/>
                            </a>
                            <a href="#" class="footer__messenger-link">
                                <img class="footer__messenger-icon" src={Telegram} alt="icon" />
                            </a>
                            <a href="https://www.instagram.com/realproffuz/" class="footer__messenger-link">
                                <img class="footer__messenger-icon" src={Instagram} alt="icon" />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="footer__right-content-box">
                    <div class="footer__location-box">
                        <p class="location-box__title">{Lang[til].homePage.FooterKontakt}</p>
                        <div class="location-box__wrapper">
                            <img class="location-box__icon" src={Location} alt="icon" width="15" height="20" />
                            <p class="location-box__address">{Lang[til].homePage.FooterKontaktDesc}</p>
                        </div>
                    </div>
                    <div class="footer__phone-box">
                        <img class="phone-icon" src={Phone} alt="icon" width="18" height="18" />
                            <div class="footer__phone-wrapper">
                                <a href="tel:+998910010011" class="phone-number">91 001 00 11</a>
                                <a href="tel:+998905430307" class="phone-number">90 543 03 07</a>
                            </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom container">
                <p class="footer__info">Copyright © 2022 | Naf agency</p>
                <p class="footer__info-link">Sayt yaratuvchisi | <a href="https://t.me/Tbtuzofficial"><img className="footer__logo-tbt" src={Tbt} alt="" width={180} height={50} /></a></p>
                <p class="footer__info">{Lang[til].homePage.FooterNaf}</p>

            </div>
        </footer>
    )
}

export default Footer