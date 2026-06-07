import { TIPOS_ROPA} from "../../utils/enlaces.js"
import Boton from "../../components/boton/Boton"
import Tarjeta from "../../components/tarjeta/Tarjeta.jsx"

export default function Catalogo({prendas, functionAdicionar}) {
    return (
        <main>
            <h1>Nuestra Colección</h1>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {TIPOS_ROPA.map((tipo, index) => (
                    <Boton key={index} texto={tipo} />
                ))}
            </div>
            <div className="w-75 m-auto row row-cols-1 row-cols-md-3 g-5">
                {prendas.map((prenda, index) => (
                    <Tarjeta key={prenda.id} prenda={prenda} functionHandler={functionAdicionar}/>
                ))}
            </div>
        </main>
    )
}