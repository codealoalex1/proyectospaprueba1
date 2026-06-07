import { useState } from "react"
import Campo from "../../components/campo/Campo"
import { CAMPOS_FORM } from "../../utils/camposFormulario"


export default function Formulario({ adicionar }) {
    const [form, setForm] = useState({
        id: new Date(),
        nombre: '',
        descripcion: '',
        categoria: '',
        precio: '',
        urlImagen: '',
        cantidadEnStock: 45
    })

    const llenarForm = (event) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    const vaciarForm = (event) => {
        event.preventDefault()
        setForm({
            nombre: '',
            descripcion: '',
            categoria: '',
            precio: '',
            urlImagen: '',
        })
    }

    return (
        <>
            <h1>Añadir ropa</h1>
            <form className="w-75 m-auto">
                {CAMPOS_FORM.map((campo, index) => (
                    <Campo key={campo.name} id={campo.id} name={campo.name} nombre={campo.nombre} tipo={campo.tipo} value={form[campo.name]} functionHandler={llenarForm} />
                ))}
                <button type="button" onSubmit={vaciarForm} onClick={() => adicionar(form)}>Añadir producto</button>
            </form>
        </>
    )
}