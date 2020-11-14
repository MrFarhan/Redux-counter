import { createStore } from "redux"
import Reducer from "./Reducer"

const initialState = {
    count: 0,
    name:"john"
}


export const store = createStore(
    Reducer,
    initialState
)