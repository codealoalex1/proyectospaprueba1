import { NavLink } from "react-router-dom";

/* Importar rutas */
import { ENLACES_NAV } from "../../utils/enlaces.js";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className={"navbar-brand"} to={"/catalogo"}>Tienda virtual de ropa</NavLink>
                {/* Boton de hamburguesa */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {ENLACES_NAV.map((enlace, index) => (
                            <li key={index} className="nav-item">
                                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'text-info fw-semibold' : ''}`} to={enlace.ruta}>{enlace.nombre}</NavLink>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <span>Modo oscuro</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}