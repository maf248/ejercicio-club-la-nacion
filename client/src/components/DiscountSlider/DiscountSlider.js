import React from 'react';
import './DiscountSlider.css';

import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import { useEffect, useState } from 'react'

import BtnDiscountSlider from './BtnDiscountSlider';

export default function DiscountSlider(props) {
    // Se define el estado de "data" y luego se realiza un pedido fetch al endpoint correspondiente.
    const [data, setData] = useState(false);
    //useEffect con un array de dependencias vacío, para que se ejecute solo una vez al renderizar el componente, pidiendo la data.
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`${props.endpoint}?page=1&limit=4`);
            const json = await response.json();
            setData({...json});
            console.log(json);
        }
        getData();
    }, []);
    // En caso de establecer color de fondo del slider, se utiliza, caso contrario utiliza fondo transparente.
    const bgcolor = {
        backgroundColor : props.bgcolor || 'transparent'
    }
    // Se establece un estado para manejar la posición del slider.
    const [slideIndex, setSlideIndex] = useState(1);
    // Función para pasar al siguiente slide, en caso de haber más, caso contrario hacer loop circular.
    const nextSlide = () => {
        console.log('NEXT')
    }
    // Función para pasar al anterior slide, en caso de haber más, caso contrario hacer loop circular.
    const prevSlide = () => {
        console.log('PREVIOUS')
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
                    <BtnDiscountSlider
                        moveSlide={prevSlide}
                        direction={"prev"}
                    />
                    <div className='slider-body-container'>
                        
                    
                        {data ? data.accounts.map(account => (
                            <Card
                                data={account}
                                key={account.id}
                                design={props.endpoint === '/api/tourism' ? 'card-info' : 'card-button'}
                            />
                        )) : null}
                  
                    
                    </div>
                    <BtnDiscountSlider 
                        moveSlide={nextSlide}
                        direction={"next"}
                    />
                </div>
                
            </div>
        </section>
    )
}
