import React from 'react';
import Barra from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Servicios from "./components/servicios/servicios";
import Idiomas from './components/idiomas/idiomas';
import Niveles from "./components/niveles/niveles";
import Contacto from "./components/contacto/contacto";
import Reserva from "./components/reserva/reserva";

import 'bootstrap/dist/css/bootstrap.min.css';

import {Route, Routes, BrowserRouter} from "react-router-dom";



function App () {
  return (
    <div className="main">
<BrowserRouter>
<Barra />
<Routes>
<Route path="/" element={<Home />} />
<Route index element={<Home />} />
<Route path="servicios" element= {<Servicios />} />
<Route path="idiomas" element= {<Idiomas />} />
<Route path="niveles" element= {<Niveles />} />
<Route path="contacto" element= {<Contacto />} />
<Route path="reserva" element= {<Reserva />} />
</Routes>
<Footer />

</BrowserRouter>
    </div>
    )
}
export default App;
