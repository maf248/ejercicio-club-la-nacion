import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import MainSlider from './components/MainSlider/MainSlider';

import DiscountSlider from './components/DiscountSlider/DiscountSlider';

import Footer from './components/Footer/Footer';

function App (props) {
  return (
    <>
    <div className='App'>
    <Header/>
    <MainSlider />
    <DiscountSlider title={'Turismo en Buenos Aires'} btntext={'TODOS LOS BENEFICIOS'} endpoint={'/api/tourism'} />
    <DiscountSlider title={'Códigos de descuento'} subtitle={'¿Sos socio Club LA NACIÓN? Descarga tu código y disfrutá beneficios exclusivos en tus marcas favoritas.'} btntext={'TODOS LOS CÓDIGOS'} endpoint={'/api/discount'} />
    
    </div>
    <Footer />
    </>
  );
};

export default App;