export default function Campo({nombre, tipo, id, name, value, functionHandler}) {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{nombre}</label>
            <input type={tipo} name={name} className="form-control" id={id} value={value} onChange={functionHandler}/>
        </div>
    )
}