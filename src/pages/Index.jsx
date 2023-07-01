import React, {useState} from "react";
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
// const locationsList = require("../components/Data.js") 
import Location from "../components/Location";
import Slider from '../components/Slider';
import StateSlide from '../components/StateSlide';
import LGASlide from '../components/LGASlide';
import CitySlide from '../components/CitySlide';

const Index = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedState, setSelectedState] = useState('');
    const [selectedLGA, setSelectedLGA] = useState('');
    const [selectedLGACities, setSelectedLGACities] = useState([]);
    
      const states = [
        {
          name: 'Lagos',
          LGAs: [
            {
              name: 'Ikeja',
              cities: ['City 1', 'City 2', 'City 3'],
            },
            {
              name: 'Victoria Island',
              cities: ['Ikoyi', 'Obalende', 'City 6'],
            },
            {
              name: 'Surulere',
              cities: ['City 7', 'City 8', 'City 9'],
            },
          ],
        },
        {
          name: 'Abuja',
          LGAs: [
            {
              name: 'Garki',
              cities: ['City 10', 'City 11', 'City 12'],
            },
            {
              name: 'Wuse',
              cities: ['City 13', 'City 14', 'City 15'],
            },
            {
              name: 'Asokoro',
              cities: ['City 16', 'City 17', 'City 18'],
            },
          ],
        },
        {
          name: 'Kano',
          LGAs: [
            {
              name: 'Nasarawa',
              cities: ['City 19', 'City 20', 'City 21'],
            },
            {
              name: 'Gwale',
              cities: ['City 22', 'City 23', 'City 24'],
            },
            {
              name: 'Kumbotso',
              cities: ['City 25', 'City 26', 'City 27'],
            },
          ],
        },
      ];
    
    
      const goToPreviousSlide = () => {
        setCurrentSlide(currentSlide - 1);
      };
    
      const goToNextSlide = () => {
        setCurrentSlide(currentSlide + 1);
      };
    
      const handleStateClick = (state) => {
        setSelectedState(state);
        setCurrentSlide(currentSlide + 1);
      };
    
      const handleLGAClick = (LGA) => {
        setSelectedLGA(LGA);
        setCurrentSlide(currentSlide + 1);
      };
    
      const getLGAsForState = (state) => {
        const selectedStateData = states.find((s) => s.name === state.name);
        return selectedStateData ? selectedStateData.LGAs.map((LGA) => LGA.name) : [];
      };
    
      const getCitiesForLGA = (LGA) => {
        const selectedStateData = states.find((state) => state.name === selectedState.name);
        const selectedLGAData = selectedStateData.LGAs.find((lga) => lga.name === LGA);
        setSelectedLGACities(selectedLGAData.cities)
        // return selectedLGAData ? selectedLGAData.cities : [];
      };

      const slides = [
        <StateSlide states={states} onStateClick={handleStateClick}/>,
        <LGASlide state={selectedState.name} LGAs={getLGAsForState(selectedState)} getCities={getCitiesForLGA}onLGAClick={handleLGAClick} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide}/>,
        <CitySlide LGA={selectedLGA} cities={selectedLGACities} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide}/>
      ];

    const locationsList = [
        {
            id: "1",
            city: "Marrakesh",
            country: "Morocco",
            images: [
                {
                    id: "1",
                    url: "https://a0.muscache.com/im/pictures/807af64a-c3ba-4075-9b76-e1f09531c974.jpg?im_w=720"
                },

                {
                    id: "2",
                    url: "https://a0.muscache.com/im/pictures/f192135e-4df8-4d86-9cda-8e4c72fc5d93.jpg?im_w=720"
                },

                {
                    id: "3",
                    url: "https://a0.muscache.com/im/pictures/miso/Hosting-47771464/original/e8f6758f-1348-43f6-832a-066a90523068.jpeg?im_w=720"
                },

                {
                    id: "4",
                    url: "https://a0.muscache.com/im/pictures/c596d286-57a6-460e-b6a8-9698b6f31157.jpg?im_w=720"
                },

                {
                    id: "5",
                    url: "https://a0.muscache.com/im/pictures/d0ca15e5-87bc-4912-bbc0-6c564e42afc7.jpg?im_w=720"
                },
            ],
            distance: "3000km"
        },

        {
            id: "2",
            city: "Marrakesh",
            country: "Morocco",
            images: [
                {
                    id: "1",
                    url: "https://a0.muscache.com/im/pictures/807af64a-c3ba-4075-9b76-e1f09531c974.jpg?im_w=720"
                },

                {
                    id: "2",
                    url: "https://a0.muscache.com/im/pictures/f192135e-4df8-4d86-9cda-8e4c72fc5d93.jpg?im_w=720"
                },

                {
                    id: "3",
                    url: "https://a0.muscache.com/im/pictures/miso/Hosting-47771464/original/e8f6758f-1348-43f6-832a-066a90523068.jpeg?im_w=720"
                },

                {
                    id: "4",
                    url: "https://a0.muscache.com/im/pictures/c596d286-57a6-460e-b6a8-9698b6f31157.jpg?im_w=720"
                },

                {
                    id: "5",
                    url: "https://a0.muscache.com/im/pictures/d0ca15e5-87bc-4912-bbc0-6c564e42afc7.jpg?im_w=720"
                },
            ],
            distance: "3000km"
        },

        {
            id: "3",
            city: "Marrakesh",
            country: "Morocco",
            images: [
                {
                    id: "1",
                    url: "https://a0.muscache.com/im/pictures/807af64a-c3ba-4075-9b76-e1f09531c974.jpg?im_w=720"
                },

                {
                    id: "2",
                    url: "https://a0.muscache.com/im/pictures/f192135e-4df8-4d86-9cda-8e4c72fc5d93.jpg?im_w=720"
                },

                {
                    id: "3",
                    url: "https://a0.muscache.com/im/pictures/miso/Hosting-47771464/original/e8f6758f-1348-43f6-832a-066a90523068.jpeg?im_w=720"
                },

                {
                    id: "4",
                    url: "https://a0.muscache.com/im/pictures/c596d286-57a6-460e-b6a8-9698b6f31157.jpg?im_w=720"
                },

                {
                    id: "5",
                    url: "https://a0.muscache.com/im/pictures/d0ca15e5-87bc-4912-bbc0-6c564e42afc7.jpg?im_w=720"
                },
            ],
            distance: "3000km"
        },

        {
            id: "4",
            city: "Marrakesh",
            country: "Morocco",
            images: [
                {
                    id: "1",
                    url: "https://a0.muscache.com/im/pictures/807af64a-c3ba-4075-9b76-e1f09531c974.jpg?im_w=720"
                },

                {
                    id: "2",
                    url: "https://a0.muscache.com/im/pictures/f192135e-4df8-4d86-9cda-8e4c72fc5d93.jpg?im_w=720"
                },

                {
                    id: "3",
                    url: "https://a0.muscache.com/im/pictures/miso/Hosting-47771464/original/e8f6758f-1348-43f6-832a-066a90523068.jpeg?im_w=720"
                },

                {
                    id: "4",
                    url: "https://a0.muscache.com/im/pictures/c596d286-57a6-460e-b6a8-9698b6f31157.jpg?im_w=720"
                },

                {
                    id: "5",
                    url: "https://a0.muscache.com/im/pictures/d0ca15e5-87bc-4912-bbc0-6c564e42afc7.jpg?im_w=720"
                },
            ],
            distance: "3000km"
        },

        {
            id: "5",
            city: "Marrakesh",
            country: "Morocco",
            images: [
                {
                    id: "1",
                    url: "https://a0.muscache.com/im/pictures/807af64a-c3ba-4075-9b76-e1f09531c974.jpg?im_w=720"
                },

                {
                    id: "2",
                    url: "https://a0.muscache.com/im/pictures/f192135e-4df8-4d86-9cda-8e4c72fc5d93.jpg?im_w=720"
                },

                {
                    id: "3",
                    url: "https://a0.muscache.com/im/pictures/miso/Hosting-47771464/original/e8f6758f-1348-43f6-832a-066a90523068.jpeg?im_w=720"
                },

                {
                    id: "4",
                    url: "https://a0.muscache.com/im/pictures/c596d286-57a6-460e-b6a8-9698b6f31157.jpg?im_w=720"
                },

                {
                    id: "5",
                    url: "https://a0.muscache.com/im/pictures/d0ca15e5-87bc-4912-bbc0-6c564e42afc7.jpg?im_w=720"
                },
            ],
            distance: "3000km"
        },

        {
            id: "6",
            city: "Marrakesh",
            country: "Morocco",
            images: [
                {
                    id: "1",
                    url: "https://a0.muscache.com/im/pictures/807af64a-c3ba-4075-9b76-e1f09531c974.jpg?im_w=720"
                },

                {
                    id: "2",
                    url: "https://a0.muscache.com/im/pictures/f192135e-4df8-4d86-9cda-8e4c72fc5d93.jpg?im_w=720"
                },

                {
                    id: "3",
                    url: "https://a0.muscache.com/im/pictures/miso/Hosting-47771464/original/e8f6758f-1348-43f6-832a-066a90523068.jpeg?im_w=720"
                },

                {
                    id: "4",
                    url: "https://a0.muscache.com/im/pictures/c596d286-57a6-460e-b6a8-9698b6f31157.jpg?im_w=720"
                },

                {
                    id: "5",
                    url: "https://a0.muscache.com/im/pictures/d0ca15e5-87bc-4912-bbc0-6c564e42afc7.jpg?im_w=720"
                },
            ],
            distance: "3000km"
        }, 
    ];

    
    return (
        <Main>
            <main className="container locationContainer" >
                {locationsList.map((location) => (
                    
                       <Location location = {location}/>         
                )
                ) }
                <div>
                    <Slider slides={slides} currentSlide={currentSlide} />
                </div>
            </main>
        </Main>

      
    
    );
  };
  
  export default Index;