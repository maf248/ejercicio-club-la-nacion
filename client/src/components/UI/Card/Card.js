import React from 'react'
import './Card.css'

import Button from '../Button/Button';

export default function Card(props) {
//haveVoucher
    const cardInfo = (
                    <>
                    <a href={`https://club.lanacion.com.ar/${props.data.crmid}`} target="_blank" rel="noopener noreferrer">
                        <p className='card-title'>{props.data.name}</p>
                    </a>
                    </>
                        );
    const cardButton = (
                    <>
                    <p className='card-title'>{props.data.name}</p>
                    <a href={`https://club.lanacion.com.ar/${props.data.crmid}`} target="_blank" rel="noopener noreferrer">
                        <Button btntext={'QUIERO MI CODIGO'} cardbtn='card-button' />
                    </a>
                    </>
                    );
    return (
        <div className='card-container'>
            <a href={`https://club.lanacion.com.ar/${props.data.crmid}`} target="_blank" rel="noopener noreferrer">
                <img className='card-picture' src={props.data.images[0].url} alt={props.data.name} />
            </a>
            <div className='card-data-container'>
                {props.design === 'card-info' ? cardInfo : cardButton }
                
            </div>
        </div>
    )
}
