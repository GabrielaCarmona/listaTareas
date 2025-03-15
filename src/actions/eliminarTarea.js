import { types } from "../types/types";

export const eliminarTarea = (id) => {
    return {
        type: types.eliminarTarea,
        payload: id
    };
};