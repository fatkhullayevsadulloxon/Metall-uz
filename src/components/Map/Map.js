import "./map.css"


const Map = () => {
    return (
        <div class="section-map ">
            <div class="map__map-wrapper">
                <iframe class="map__img" height="600"
                    src="https://maps.google.com/maps?q=tashkent%20naf&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
            </div>
        </div>
    )
}

export default Map