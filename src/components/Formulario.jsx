import React, { useEffect, useState } from "react";
import '../styles/formulario.css';
import { v4 as uuidv4 } from 'uuid';
import { agregarTarea } from "../actions/agregarTarea";
import { useDispatch } from "react-redux";
import { actualizarTarea } from "../actions/actualizarTarea";

function Formulario({textoEditar, idEditar, setEditTask}) {
    const dispatch = useDispatch();
    const [tareaTexto, setTareaTexto] = useState('');
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        if (textoEditar) {
            setTareaTexto(textoEditar)
        }
    }, [textoEditar]);

    const handleCambio = e => {
        setTareaTexto(e.target.value);
    };

    const handleEnvio = e => {
        e.preventDefault();
        setMensaje('');

        if (tareaTexto.trim() === '') {
            setMensaje('No puedes añadir una tarea vacía.')
            return
        }

        const tareaNueva = {
            id: uuidv4(),
            tarea: tareaTexto,
            estatus: 'pendiente'
        }

        if (idEditar) {
            dispatch(actualizarTarea(idEditar, tareaTexto));
            setEditTask({});
        } else {
            dispatch(agregarTarea(tareaNueva));  
        } 

        setTareaTexto('');
    }

    return (
        <>
            <form className='tarea-nueva' onSubmit={handleEnvio}>
                <input
                    className='tarea-input'
                    type='text'
                    autoComplete="off"
                    placeholder='Ingresa una nueva tarea'
                    name='texto'
                    onChange={handleCambio}
                    value={tareaTexto}
                    maxLength={'100'}
                />
                <button type='submit' className='btnTarea'>{textoEditar ? 'Guardar' : 'Agregar'} </button>
                <span className="danger">{mensaje}</span>
            </form>
        </>
    );
}

export default Formulario;