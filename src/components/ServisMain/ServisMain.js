import { useContext } from 'react'
import { LangContext } from '../../Context/LangContext'
import { Lang } from '../Lang/Lang'
import './servismain.css'


const ServisMain = () => {

    const{lang: til} = useContext(LangContext)

    return (
        <div>
            <div class="xizmatlar-box-top container">
                <h4>{Lang[til].ServisPage.ServisPageMainHeading}</h4>
                <div></div>
                <p>{Lang[til].ServisPage.ServisPageMainDesc}</p>
                <hr/>
            </div>
        </div>
    )
}

export default ServisMain