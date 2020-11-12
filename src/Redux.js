import { createStore } from "redux"

const initialState = {
    count: 0
}


export const store = createStore(
    reducer,
    initialState
)

function reducer(state, { type, payload }) {
    switch (type) {
        case 'INCREASE':
            return {
                ...state,
                count: payload

            }
        case 'DECREASE':
            return {
                ...state,
                count: payload
            }
        case 'RESET':
            return {
                ...state,
                count: payload
            }
        default:
            return state
    }
}

export const increaseAction = (abc) => ({
    type: "INCREASE",
    payload: abc
})

export const decreaseAction = (def) => ({
    type: "DECREASE",
    payload: def
})

export const resetAction = (ghi) => ({
    type: "RESET",
    payload: ghi
})