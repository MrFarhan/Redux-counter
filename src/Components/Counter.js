import React from 'react'
import "../App.css"
import { useDispatch, useSelector } from "react-redux";
import { increaseAction } from '../Redux'
import { decreaseAction } from '../Redux'
import { resetAction } from '../Redux'



export const Counter = () => {

    const state = useSelector(({count}) => count)
    console.log(state,"state")
    const dispatch = useDispatch()
   
    

    const decrement = () => {
        dispatch((decreaseAction(state-1)))
    }


    const increament = () => {
        dispatch((increaseAction(state+1)))
    }


    

    const reset = () => {
        dispatch((resetAction(0)))
    }


    return (
        <div className="reduxCounter">
            <h2>Redux Counter</h2>
            <br/>
            <br/>
            <br/>
            <br/>
            {state}
            <br />
            <button onClick={increament}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>

        </div>
    )
}
