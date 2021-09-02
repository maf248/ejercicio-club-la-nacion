import React from "react";
import "./MainSlider.css";

export default function BtnMainSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <i className={direction === "next" ? "fas fa-chevron-right" : "fas fa-chevron-left"} alt={direction === "next" ? 'Right Arrow' : 'Left Arrow'} />
    </button>
  );
}
