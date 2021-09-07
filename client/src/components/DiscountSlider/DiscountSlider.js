import React from 'react';
import './DiscountSlider.css';

import Button from '../UI/Button/Button';
import { useEffect, useState } from 'react'

export default function DiscountSlider(props) {
    const [isDataReady, setIsDataReady] = useState(false);
    const [data, setData] = useState(false);

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(`${props.endpoint}?page=1&limit=4`);
                const json = await response.json();
                setData({...json});
                setIsDataReady(true);
                if (data) {
                    console.log(data);
                }
                
            } catch (error) {
                console.log(error)
            }
            
        }
        getData();
        
    }, [isDataReady]);

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
