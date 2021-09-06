import React from 'react'
import './DiscountSlider.css'

import Button from '../UI/Button/Button';

export default function DiscountSlider(props) {


    return (
        <div className="container-discount-slider">
            <div className='slider-top'>
                <div className="slider-title">
                    <h3 className={props.subtitle ? 'bottom-margin-0' : ''}>{props.title}</h3>
                    <p>{props.subtitle}</p>
                </div>
                
                <Button btntext={props.btntext}/>
            </div>
            <div className='slider-body'>

            </div>
            
        </div>
    )
}
