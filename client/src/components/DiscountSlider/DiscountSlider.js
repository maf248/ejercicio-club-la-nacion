import React from 'react';
import './DiscountSlider.css';

import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import { useEffect, useState } from 'react'

import BtnDiscountSlider from './BtnDiscountSlider';

export default function DiscountSlider(props) {
    // Se define el estado de "data" y luego se realiza un pedido fetch al endpoint correspondiente.
    const [data, setData] = useState(false);
    // Se establece un estado para manejar la paginación de la API.
    const [paginationIndex, setpaginationIndex] = useState(1);
    // Se establece un estado para los accounts actuales del slider.
    const [sliderData, setSliderData] = useState(false);

    // Función para obtener data paginada de los endpoints API correspondientes.
    const getData = async (paginationIndex) => {
        const response = await fetch(`${props.endpoint}?page=${paginationIndex}&limit=4`);
        const json = await response.json();
        if (data) {
            setData({ meta: {...json.meta}, accounts: [...data.accounts, ...json.accounts]});
            setSliderData([...data.accounts, ...json.accounts]);
        } else {
            setData({...json});
            setSliderData([...json.accounts]);
        }
    }
    
    useEffect(() => {
        console.log(data)
    }, [data]);

    //useEffect con dependencia paginationIndex, para que se ejecute solo una vez al renderizar el componente o al cambiar paginationIndex, pidiendo la data.
    useEffect(() => {
        getData(paginationIndex);
    }, [paginationIndex]);

    // En caso de establecer color de fondo del slider, se utiliza, caso contrario utiliza fondo transparente.
    const bgcolor = {
        backgroundColor : props.bgcolor || 'transparent'
    }
    
    // Función para pasar al siguiente slide, en caso de haber más, caso contrario hacer loop circular.
    const nextSlide = () => {
        // En caso de haber otra pagina de resultados, aumenta el paginationIndex lo cual mediante useEffect realiza el nuevo pedido API.
        if (data.meta.nextPage && data.meta.total > data.accounts.length) {
            setpaginationIndex(paginationIndex + 1);
        }
        let actualData = sliderData.slice();
        let lastElement = actualData.pop();
        actualData.unshift(lastElement);

        setSliderData(actualData)

        console.log('NEXT')
    }
    // Función para pasar al anterior slide, en caso de haber más, caso contrario hacer loop circular.
    const prevSlide = () => {
        if (data.meta.total > data.accounts.length) {
            let lastIndex = Math.ceil(data.meta.total / 4);
            setpaginationIndex(lastIndex)
        }
        let actualData = sliderData.slice();
        let firstElement = actualData.shift();
        actualData.push(firstElement);

        setSliderData(actualData)

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
                        
                    
                        {sliderData ? sliderData.slice(0, 4).map(account => (
                            <Card
                                data={account}
                                key={account.id}
                                design={props.endpoint === '/api/tourism' ? 'card-info' : 'card-button'}
                            />
                        )) : <i className="fas fa-spinner spinning"/>}
                  
                    
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
