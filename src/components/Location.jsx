import React, {useState } from "react";


const Location = ({location}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {       
        if(newIndex < 0){ 
            newIndex = location.images.length - 1;
        } else if (newIndex >= location.images.length){
            newIndex = 0;
        }
       setActiveIndex(newIndex);

    };

    return (
        <div className="location" key={location.id}>
            <div className="img-carousel">
            {
                activeIndex > 0 &&
                <button onClick={() => {
                    updateIndex(activeIndex - 1);
                }} className="image-prev">
                    &lt;
                </button>
            }
                <div className="carousel-inner "
                style={{transform: `translateX(-${activeIndex * 100}%)`}}>
                    {location.images.map((image) =>(
                        <div key={image.id} className="img-container">
                            <img className="location-img" src={image.url} alt="img" />
                        </div>
                        )
                    )}
                </div>
                {
                                    
                activeIndex < ((activeIndex + 1) % location.images.length) &&
                <button onClick={() => {
                    updateIndex(activeIndex + 1);
                }} className="image-next">
                    &gt;
                </button>
                }

                <div className="dots">
                    {location.images.map((image) => (
                       <span 
                        key={image.id} 
                        className={
                            // highlights the dot that corresponds to the image
                            location.images[activeIndex].id === image.id ? 'active dot' : 'dot'}
                            // go the corresponding image when the user clicks on the dot
                            onClick={() =>{setActiveIndex(location.images.indexOf(image));}}
                        ></span> 
                    )
                    )}
                </div>                            
        </div>
        <p>{location.country}</p>
    </div>
    );

}


export default Location;