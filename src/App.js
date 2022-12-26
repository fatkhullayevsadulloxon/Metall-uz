import Header from "./components/Header/Header";
import "./app.css"
import HomePage from "./components/Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/footer";
import About from "./components/Pages/About";
import Catalog from "./components/Pages/Catalog";
import CatalogAll from "./components/CatalogAll/CatalogAll";
import ServisPage from "./components/Pages/ServisPage";
import KontaktPage from "./components/Pages/KontaktPage";
import "../node_modules/wowjs/dist/wow.min.js"
import "../node_modules/animate.css/animate.min.css"
import CatalogDarvoza from "./components/CatalogLink/CatalogDarvoza/CatalogDarvoza";
import CatalogNaves from "./components/CatalogLink/CatalognNaves/CatalognNaves";
import CatalogZina from "./components/CatalogLink/CatalogZina/CatalogZina";
import CatalogEskiz from "./components/CatalogLink/CatalogEskiz/CatalogEskiz";
import CatalogResh from "./components/CatalogLink/CatalogResh/CatalogResh";
import CatalogMukofot from "./components/CatalogLink/CatalogMukofot/CatalogMukofot";
import CatalogDevor from "./components/CatalogLink/CatalogDevor/CatalogDevor";
import CatalogSavdo from "./components/CatalogLink/CatalogSavdo/CatalogSavdo";
import CatalogTosiq from "./components/CatalogLink/CatalogTosiq/CatalogTosiq";
import CatalogShirma from "./components/CatalogLink/CatalogShirma/CatalogShirma";
import CatalogBasetka from "./components/CatalogLink/CatalogBasetka/CatalogBasetka";
import CatalogLazer from "./components/CatalogLink/CatalogLazer/CatalogLazer";
import ServisLinkPatinatsiya from "./components/ServisLink/ServisLinkPatinatsiya/ServisLinkPatinatsiya";
import ServisLinkMetall from "./components/ServisLink/ServisLinkMetall/ServisLinkMetall";
import ServisLinkLazer from "./components/ServisLink/ServisLinkLazer/ServisLinkLazer";
import ServisLinkMetall2 from "./components/ServisLink/ServisLinkMetall2/ServisLinkMetall2";
import ServisLinkProkat from "./components/ServisLink/ServisLinkProkat/ServisLinkProkat";
import ServisLinkProkatLazer from "./components/ServisLink/ServisLinkProkatLazer/ServisLinkProkatLazer";
import ReactWOW from 'react-wow'

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/servis' element={<ServisPage />} />
        <Route path='/contact' element={<KontaktPage />} />
        {/* CATALOG CATALOG */}
        <Route path='/catalog/all' element={<CatalogAll />} />
        <Route path='/catalog/darvoza' element={<CatalogDarvoza />} />
        <Route path='/catalog/naves' element={<CatalogNaves />} />
        <Route path='/catalog/zina' element={<CatalogZina />} />
        <Route path='/catalog/eskiz' element={<CatalogEskiz />} />
        <Route path='/catalog/reshoka' element={<CatalogResh />} />
        <Route path='/catalog/mukofot' element={<CatalogMukofot />} />
        <Route path='/catalog/devor' element={<CatalogDevor />} />
        <Route path='/catalog/savdo' element={<CatalogSavdo />} />
        <Route path='/catalog/tosiq' element={<CatalogTosiq />} />
        <Route path='/catalog/shirma' element={<CatalogShirma />} />
        <Route path='/catalog/basetka' element={<CatalogBasetka />} />
        <Route path='/catalog/lazer' element={<CatalogLazer />} />
        {/* SERVIS ROUTE */}
        <Route path='/servis/patinatsiya' element={<ServisLinkPatinatsiya />} />
        <Route path='/servis/metall' element={<ServisLinkMetall />} />
        <Route path='/servis/lazerli' element={<ServisLinkLazer />} />
        <Route path='/servis/metall-egiltirish' element={<ServisLinkMetall2 />} />
        <Route path='/servis/metall-prokat' element={<ServisLinkProkat />} />
        <Route path='/servis/metal-prokat-lazer' element={<ServisLinkProkatLazer/>} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
