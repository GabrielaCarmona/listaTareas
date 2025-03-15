import { types } from "../types/types";

export const realizarTarea = (id) => {
    return {
        type: types.realizarTarea,
        payload: id
    };
};