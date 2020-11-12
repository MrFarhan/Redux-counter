import React, { useState } from 'react'
import "../App.css"
import { useDispatch, useSelector } from "react-redux";
import { increaseAction } from '../Redux'
import { decreaseAction } from '../Redux'
import { resetAction } from '../Redux'



export const Counter = () => {

    const state = useSelector(({count}) => count)
    console.log(state,"state")
    const dispatch = useDispatch()
   
   
    const increament = () => {
        dispatch((increaseAction(state+1)))
    }

    return (
        <div className="reduxCounter">
            <h2>Redux Counter</h2>
            <input type="text" />
            <br />
            <button onClick={increament}>+</button>
            <button>-</button>
        </div>
    )
}
