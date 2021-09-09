import React from 'react'
import './Button.css'

export default function Button(props) {


    return (
        <div className={`${props.cardbtn ? 'Card-button-container' : 'Button-container'}`}>
            <button className={`ButtonUI ${props.cardbtn ? props.cardbtn : ''}`}>{props.btntext}</button>
        </div>
    )
}
