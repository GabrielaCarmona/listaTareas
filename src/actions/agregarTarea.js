import { types } from "../types/types";

export const agregarTarea = (tarea) => {
    return {
        type: types.agregarTarea,
        payload: tarea
    };
};