import { types } from "../types/types";

export const actualizarTarea = (idEditar, tareaTexto) => {  
    return {
        type: types.actualizarTarea,
        payload: {
            id: idEditar, 
            tarea: tareaTexto
        }
    };
};