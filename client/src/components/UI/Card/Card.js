import React from 'react'
import './Card.css'

import Button from '../Button/Button';

export default function Card(props) {

    // Encuentra la "location" menor del array branches de cada account. (Por ende, calcula la sucursal mas cercana de dicho card)
    // En caso de ser menor a 1000 m lo muestra en metros (240 m) y en caso de superar 1000 m lo expresa en kilometros y con coma (3,5 km)
    const closestLocation = Math.min.apply(null, props.data.branches.map(branch => branch.location));
    
    // Se obtienen todos los descuentos que posee cada categoría para cada account.
    var discountsPerCategory = {
        black: [],
        premium: [],
        classic: []
    };
    props.data.benefits.forEach(benefit => {
        if (benefit.program_name.includes('Club La Nación Black')) {
            let blackDiscount = Number(benefit.type.match(/\d/g).join(''));
            discountsPerCategory.black.push(blackDiscount)
        }
        if (benefit.program_name.includes('Club La Nación Premium')) {
            let premiumDiscount = Number(benefit.type.match(/\d/g).join(''));
            discountsPerCategory.premium.push(premiumDiscount)
        }
        if (benefit.program_name.includes('Club La Nación Classic')) {
            let classicDiscount = Number(benefit.type.match(/\d/g).join(''))
            discountsPerCategory.classic.push(classicDiscount)
        }
    });

    // Se obtiene el mayor descuento de cada categoría.
    var categoryBlackDiscount;
    if (discountsPerCategory.black !== []) {
        categoryBlackDiscount = Math.max(...discountsPerCategory.black);
    } else {
        categoryBlackDiscount = false;
    }
    
    var categoryPremiumDiscount;
    if (discountsPerCategory.premium !== []) {
        categoryPremiumDiscount = Math.max(...discountsPerCategory.premium);
    } else {
        categoryPremiumDiscount = false;
    }

    var categoryClassicDiscount;
    if (discountsPerCategory.classic.length > 0) {
        categoryClassicDiscount = Math.max(...discountsPerCategory.classic);
    } else {
        categoryClassicDiscount = false;
    }
    
    // Componentes JSX para retornar dinamicamente acorde a cada caso. => Turismo / Descuentos
    const cardInfo = (<>
                    <a href={`https://club.lanacion.com.ar/${props.data.crmid}`} target="_blank" rel="noopener noreferrer">
                        <img className='card-picture' src={props.data.images[0].url.replace('http', 'https')} alt={props.data.name} />
                    </a>
                    <div className='card-data-container border'>
                        <a href={`https://club.lanacion.com.ar/${props.data.crmid}`} target="_blank" rel="noopener noreferrer">
                            <p className='card-title tourism'>{props.data.name}</p>
                        </a>
                        <div className='card-categories-discounts'>
                        { categoryBlackDiscount ? 
                            (<>
                                <span className='category-black'>{categoryBlackDiscount} %</span>
                            </>) : '' }
                            { categoryPremiumDiscount ? 
                            (<>
                                <span style={{color: 'gray', opacity: '50%'}}>|</span>
                                <span className='category-premium'>{categoryPremiumDiscount} %</span>
                            </>) : '' }
                            { categoryClassicDiscount ? 
                            (<>
                                <span style={{color: 'gray', opacity: '50%'}}>|</span>
                                <span className='category-classic'>{categoryClassicDiscount} %</span>
                            </>) : '' }
                        </div>
                        <div className='card-data-location'>
                            <i className="fas fa-map-marker-alt" />
                            <p>{`A ${closestLocation >= 1000 ? `${(closestLocation/1000).toString().replace(".", ",")} km` : `${closestLocation} m` }`}</p>
                        </div>
                    </div>
                    </>);
    const cardButton = (<>
                    <img className='card-picture' src={props.data.images[0].url} alt={props.data.name} />
                    <div className='card-data-container blue'>
                        <p className='card-title discount'>{props.data.name}</p>
                        <a href={`https://club.lanacion.com.ar/${props.data.crmid}`} target="_blank" rel="noopener noreferrer">
                            <Button btntext={'QUIERO MI CODIGO'} cardbtn='card-button' />
                        </a>
                    </div>
                    </>);
    // Retorna el contenido correspondiente para cada card en ambos sliders.
    return (
        <div className={`card-container ${props.design === 'card-info' ? 'card-info' : '' }`}>
            {props.design === 'card-info' ? cardInfo : cardButton }
        </div>
    )
}
