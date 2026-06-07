export default function Tarjeta({prenda, functionHandler}) {
    return (
        <div className="col">
            <div className="card">
                <img src={prenda.urlImagen} className="card-img-top" alt={`Imagen de ${prenda.nombre}`} width={300} height={300}/>
                <div className="card-body text-center">
                    <h4 className="card-title">{prenda.nombre}</h4>
                    <span className="card-text">{prenda.categoria}</span>
                    <h6 className="card-text">{prenda.precio}</h6>
                </div>
                <button className="btn btn-primary" onClick={() => functionHandler({...prenda, cantidad:1})}>Añadir al carrito</button>
            </div>
        </div>
    )
}