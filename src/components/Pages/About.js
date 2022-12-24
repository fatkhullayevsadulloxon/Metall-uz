import AboutAdvertising from "../AboutAdvertising/AboutAdvertising"
import AboutHero from "../AboutHero/AboutHero"
import AboutMission from "../AboutMission/AboutMission"
import AboutServis from "../AboutServis/AboutServis"
import Kontakt from "../Kontakt/Kontakt"

const About = () => {
    return (
        <div>
          <AboutHero/>
          <AboutMission/>
          <AboutAdvertising/>
          <AboutServis/>
          <Kontakt/>
        </div>
    )
}

export default About