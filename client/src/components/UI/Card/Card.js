import React from 'react'
import './Card.css'

export default function Card(props) {


    return (
        <div className='card-container'>
            <a href={`https://club.lanacion.com.ar/${props.data.crmid}`} target="_blank" rel="noopener noreferrer">
                <img className='card-picture' src={props.data.images[0].url} alt={props.data.name} />
            </a>
            <div className='card-data-container'>
                <a href={`https://club.lanacion.com.ar/${props.data.crmid}`} target="_blank" rel="noopener noreferrer">
                    <p className='card-title'>{props.data.name}</p>
                </a>
            </div>
        </div>
    )
}
