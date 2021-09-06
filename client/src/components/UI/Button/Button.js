import React from 'react'
import './Button.css'

export default function Button(props) {


    return (
        <div className='Button-container'>
            <button className='ButtonUI'>{props.btntext}</button>
        </div>
    )
}
