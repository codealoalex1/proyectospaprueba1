import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navegador/Navbar";
import Catalogo from "./pages/catalogo/Catalogo";
import Formulario from "./pages/formulario/Formulario";
import Carrito from "./pages/carrito/Carrito";
import { useState } from "react";

import { TOTAL_PRENDAS } from "./utils/enlaces";
export default function App() {

    const [catalogo, setCatalogo] = useState(TOTAL_PRENDAS);
    const [carrito, setCarrito] = useState([]);

    const adicionarPrenda = (prenda) => {
        setCatalogo([...catalogo, prenda]);
    }

    const adicionarCarrito = (prenda) => {
        const existencia = carrito.find(item => item.id === prenda.id);
        setCarrito(() => {
            if (existencia) {
                return carrito.map(item => item.id === prenda.id ? { ...item, cantidad: item.cantidad + 1 } : item)
            }
            return [...carrito, prenda];
        })
    }

    console.log(carrito);

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/catalogo" element={<Catalogo prendas={catalogo} functionAdicionar={adicionarCarrito} />} />
                <Route path="/carrito" element={<Carrito carrito={carrito} />} />
                <Route path="/formulario" element={<Formulario adicionar={adicionarPrenda} />} />
                <Route path="*" element={<h1>Página no encontrada</h1>} />
            </Routes>
        </BrowserRouter>
    )
}