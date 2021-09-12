import React from 'react';
import './DiscountSlider.css';

import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import { useEffect, useState } from 'react'

import BtnDiscountSlider from './BtnDiscountSlider';

export default function DiscountSlider(props) {
    // Se define el estado de "data" y luego se realiza un pedido fetch al endpoint correspondiente.
    const [data, setData] = useState();
    // Se establece un estado para manejar la paginación de la API.
    const [pageIndex, setPageIndex] = useState(1);
    
    // Función para obtener data paginada de los endpoints API correspondientes.
    const getData = async (pageIndex) => {
        const response = await fetch(`${props.endpoint}?page=${pageIndex}&limit=4`);
        const json = await response.json();
        setData({...json});
        console.log(json);
    }
    //useEffect con dependencia pageIndex, para que se ejecute solo una vez al renderizar el componente o al cambiar pageIndex, pidiendo la data.
    useEffect(() => {
        getData(pageIndex);
    }, [pageIndex]);
    // En caso de establecer color de fondo del slider, se utiliza, caso contrario utiliza fondo transparente.
    const bgcolor = {
        backgroundColor : props.bgcolor || 'transparent'
    }
    
    // Función para pasar al siguiente slide, en caso de haber más, caso contrario hacer loop circular.
    const nextSlide = () => {
        // En caso de haber otra pagina de resultados, aumenta el pageIndex lo cual mediante useEffect realiza el nuevo pedido API.
        if (data.meta.nextPage) {
            setPageIndex(pageIndex + 1)
        }
        console.log('NEXT')
    }
    // Función para pasar al anterior slide, en caso de haber más, caso contrario hacer loop circular.
    const prevSlide = () => {
        if (data.meta.previousPage) {
            setPageIndex(pageIndex - 1)
        }
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
