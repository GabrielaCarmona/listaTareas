import { types } from "../types/types";

const initialState = {
    listaTareas: [
        {
            id: '1',
            tarea: 'Haz click en esta tarea para marcarla como completada.',
            estatus: 'Pendiente'
        },
        {
            id: '2',
            tarea: 'Haz click en el reloj para indicar que esta tarea está en progreso.',
            estatus: 'Pendiente'
        },
        {
            id: '3',
            tarea: 'Haz click en el lápiz para editar esta tarea.',
            estatus: 'Pendiente'
        },
        {
            id: '4',
            tarea: 'Haz click en la X para eliminar esta tarea.',
            estatus: 'Pendiente'
        },
    ]
}

export const tareasReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.agregarTarea:
            return {
                ...state,
                listaTareas: [...state.listaTareas, action.payload]
            }
        case types.eliminarTarea:
            return {
                ...state,
                listaTareas: state.listaTareas.filter(tarea => tarea.id !== action.payload),
            }
        case types.completarTarea:
            return {
                ...state,
                listaTareas: state.listaTareas.map(tarea => {
                    if (tarea.id === action.payload) {
                        if (tarea.estatus === 'Pendiente' || tarea.estatus === 'Progreso') {
                            return { ...tarea, estatus: 'Completado' };
                        } else {
                            return { ...tarea, estatus: 'Pendiente' };
                        }
                    }
                    return tarea;
                }),
            }
        case types.actualizarTarea:
            return {
                ...state,
                listaTareas: state.listaTareas.map(tarea => {
                    if (tarea.id === action.payload.id) {
                        return { ...tarea, tarea: action.payload.tarea };
                    }
                    return tarea;
                })
            }
        case types.realizarTarea:
            return {
                ...state,
                listaTareas: state.listaTareas.map(tarea => {
                    if (tarea.id === action.payload) {
                        if (tarea.estatus === 'Pendiente') {
                            return { ...tarea, estatus: 'Progreso' };
                        } else {
                            return { ...tarea, estatus: 'Pendiente' };
                        }
                    }
                    return tarea;
                }),
            }
        default:
            return state;
    }
}