import React from 'react';
import './DiscountSlider.css';

import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import { useEffect, useState } from 'react'

import BtnDiscountSlider from './BtnDiscountSlider';

export default function DiscountSlider(props) {
    const [data, setData] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`${props.endpoint}?page=1&limit=4`);
            const json = await response.json();
            console.log(json);
            setData({...json});
        }
        getData();
    }, []);

    const bgcolor = {
        backgroundColor : props.bgcolor || 'transparent'
    }

    return (
        <section style={bgcolor}>
            <div className="container-discount-slider">
                <div className='slider-top'>
                    <div className="slider-title">
                        <h3 className={props.subtitle ? 'bottom-margin-0' : ''}>{props.title}</h3>
                        <p>{props.subtitle}</p>
                    </div>
                    
                    <Button btntext={props.btntext}/>
                </div>
                <div className='slider-body'>
                    <BtnDiscountSlider direction={"prev"}/>
                    <div className='slider-body-container'>
                        
                    
                        {data ? data.accounts.map(account => (
                            <Card
                                data={account}
                                key={account.id}
                                design={props.endpoint === '/api/tourism' ? 'card-info' : 'card-button'}
                            />
                        )) : null}
                  
                    
                    </div>
                    <BtnDiscountSlider  direction={"next"} />
                </div>
                
            </div>
        </section>
    )
}
