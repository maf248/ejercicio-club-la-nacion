import React from 'react'
import './Card.css'

import Button from '../Button/Button';

export default function Card(props) {

    // Encuentra la "location" menor del array branches de cada account. (Por ende, calcula la sucursal mas cercana de dicho card)
    // En caso de ser menor a 1000 m lo muestra en metros (240 m) y en caso de superar 1000 m lo expresa en kilometros y con coma (3,5 km)
    const closestLocation = Math.min.apply(null, props.data.branches.map(branch => branch.location));
    
    // Componentes JSX para retornar dinamicamente acorde a cada caso. => Turismo / Descuentos
    const cardInfo = (
                    <>
                    <a href={`https://club.lanacion.com.ar/${props.data.crmid}`} target="_blank" rel="noopener noreferrer">
                        <img className='card-picture' src={props.data.images[0].url} alt={props.data.name} />
                    </a>
                    <div className='card-data-container border'>
                        <a href={`https://club.lanacion.com.ar/${props.data.crmid}`} target="_blank" rel="noopener noreferrer">
                            <p className='card-title tourism'>{props.data.name}</p>
                        </a>
                        <div className='card-categories-discounts'>
                            <span className='category-black'>20 %</span>
                            <span style={{color: 'gray', opacity: '50%'}}>|</span>
                            <span className='category-premium'>0 %</span>
                            <span style={{color: 'gray', opacity: '50%'}}>|</span>
                            <span className='category-classic'>0 %</span>
                        </div>
                        <div className='card-data-location'>
                            <i className="fas fa-map-marker-alt" />
                            <p>{`A ${closestLocation >= 1000 ? `${(closestLocation/1000).toString().replace(".", ",")} km` : `${closestLocation} m` }`}</p>
                        </div>
                    </div>
                    </>
                        );
    const cardButton = (
                    <>
                    <img className='card-picture' src={props.data.images[0].url} alt={props.data.name} />
                    <div className='card-data-container blue'>
                        <p className='card-title discount'>{props.data.name}</p>
                        <a href={`https://club.lanacion.com.ar/${props.data.crmid}`} target="_blank" rel="noopener noreferrer">
                            <Button btntext={'QUIERO MI CODIGO'} cardbtn='card-button' />
                        </a>
                    </div>
                    </>
                    );
    // Retorna el contenido correspondiente para cada card en ambos sliders.
    return (
        <div className={`card-container ${props.design === 'card-info' ? 'card-info' : '' }`}>
            {props.design === 'card-info' ? cardInfo : cardButton }
        </div>
    )
}
