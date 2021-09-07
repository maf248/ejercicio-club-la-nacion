import React from "react";
import "./DiscountSlider.css";

export default function BtnDiscountSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className='btn-discount-slide'
    >
      <i className={direction === "next" ? "fas fa-chevron-right" : "fas fa-chevron-left"} alt={direction === "next" ? 'Right Arrow' : 'Left Arrow'} />
    </button>
  );
}
