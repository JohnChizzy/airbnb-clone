import React from 'react';

const Slider = ({ slides, currentSlide }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const goToPreviousSlide = () => {
//     setCurrentSlide(currentSlide - 1);
//   };

//   const goToNextSlide = () => {
//     setCurrentSlide(currentSlide + 1);
//   };

  return (
    <div className="slider">
      <div className="slider-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            {slide}
          </div>
        ))}
      </div>

      {/* <button className="prev-button" onClick={goToPreviousSlide} disabled={currentSlide === 0}>
        Previous
      </button>
      <button className="next-button" onClick={goToNextSlide} disabled={currentSlide === slides.length - 1}>
        Next
      </button> */}
    </div>
  );
};

export default Slider;
