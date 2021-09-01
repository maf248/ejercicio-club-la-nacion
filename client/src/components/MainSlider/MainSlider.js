import React, {useState} from 'react'
import './MainSlider.css'
import BtnMainSlider from './BtnMainSlider'
import dataMainSlider from './dataMainSlider'

export default function MainSlider() {

    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if(slideIndex !== dataMainSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataMainSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataMainSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-main-slider">
            {dataMainSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={process.env.PUBLIC_URL + `/imgs/img${index + 1}.png`}
                        alt={`${obj.title}`}
                        />
                    </div>
                )
            })}
            <BtnMainSlider moveSlide={nextSlide} direction={"next"} />
            <BtnMainSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 6}).map((item, index) => (
                    <div
                    key={`dot${index}`}
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}
