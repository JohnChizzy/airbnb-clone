import React from 'react';

const StateSlide = ({ states, onStateClick }) => {
    
    return (
  <div>
    <h2>Select a State</h2>
    {states.map((state, index) => (
    <div style={{display: 'flex'}}>
        <p>{state.name}</p>
        <button key={index} onClick={() => {onStateClick(state);}}>
            {state.name}
        </button>
    </div>
    ))}
  </div>
);
    }

export default StateSlide;
