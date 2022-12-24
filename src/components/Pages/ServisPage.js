import ServisCatalog from "../ServisCatalog/ServisCatalog"
import ServisHero from "../ServisHero/ServisHero"
import ServisMain from "../ServisMain/ServisMain"

const ServisPage = () => {
    return (
        <div>
            <ServisHero/>
            <ServisMain/>
            <ServisCatalog/>
        </div>
    )
}

export default ServisPage