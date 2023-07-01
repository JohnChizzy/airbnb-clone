import React from 'react';

const CitySlide = ({ LGA, cities, currentSlide, setCurrentSlide }) => {
    const goToPreviousSlide = () => {
        setCurrentSlide(currentSlide - 1);
      };

    return (
  <div>
    <div style={{display: 'flex'}}>
        <button onClick={() => {goToPreviousSlide()} }>
            Back
        </button>
        <h2>{LGA}</h2>
    </div>
    <h3>Select a City</h3>
    {cities.map((city, index) => (
      <button key={index}>{city}</button>
    ))}
  </div>
);
}

export default CitySlide;
