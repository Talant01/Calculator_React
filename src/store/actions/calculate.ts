import { EVALUATE, SET_EXPRESSION } from "../types"

export const setExp = (expression: string) => {
    return {
        type: SET_EXPRESSION,
        payload: {
            value: expression
        }
    }
}

export const evalExp = () => {
    return {
        type: EVALUATE,
    }
}