import { INCREASE, DECREASE, RESET } from "../Redux/ActionTypes";

export const increaseAction = (payload) => ({
    type: INCREASE,
    payload
})

export const decreaseAction = (payload) => ({
    type: DECREASE,
    payload
})

export const resetAction = (payload) => ({
    type: RESET,
    payload
})