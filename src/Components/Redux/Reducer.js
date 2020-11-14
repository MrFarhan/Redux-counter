import React from "react";

export default function Reducer(state, { type, payload }) {
    switch (type) {
        case "INCREASE":
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
