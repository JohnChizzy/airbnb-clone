import React from 'react';

const LGASlide = ({ state, LGAs, getCities, onLGAClick, currentSlide, setCurrentSlide }) => {
    const goToPreviousSlide = () => {
        setCurrentSlide(currentSlide - 1);
      };
    
    
    return (
  <div>
    <div style={{display: 'flex'}}>
        <button onClick={() => {goToPreviousSlide()} }>
            Back
        </button>
        <h2>{state}</h2>
    </div>
    <h3>Select an LGA</h3>
    {LGAs.map((LGA, index) => (
        <div style={{display: 'flex'}}>
            <p>{LGA}</p> 
            <button key={index} onClick={() => {onLGAClick(LGA); getCities(LGA); } }>
                {LGA}
            </button>
        </div>    
    ))}
  </div>
);
}
export default LGASlide;
