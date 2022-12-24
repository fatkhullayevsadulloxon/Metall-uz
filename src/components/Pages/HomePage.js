import Catalog from "../Catalog/Catalog"
import Hero from "../Hero/Hero"
import Info from "../Info/Info"
import Kontakt from "../Kontakt/Kontakt"
import Map from "../Map/Map"
import Material from "../Material/Material"
import Servis from "../Servis/Servis"

const HomePage = () => {
    

    return (
        <div>
            <Hero/>
            <Material/>
            <Catalog/>
            <Info/>
            <Servis/>
            <Kontakt/>
            <Map/>
        </div>
    )
}


export default HomePage