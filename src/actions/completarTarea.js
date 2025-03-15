import { types } from "../types/types";

export const completarTarea = (id) => {
    return {
        type: types.completarTarea,
        payload: id
    };
};