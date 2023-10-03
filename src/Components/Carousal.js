import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://nmccat.com/wp-content/uploads/2021/10/02-Advantages-of-Renting-Construction-Equipment-min.jpg"
          alt="First slide"
          style={{height:"600px",width:"80%"}}
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/sWUHuUiVSFg/maxresdefault.jpg"
          alt="Second slide"
          style={{height:"600px",width:"80%"}}
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://content3.jdmagicbox.com/comp/def_content/gaming-console-dealers/h4artixstv1-gaming-console-dealers-1-glz1z.jpg?clr=223344"
          alt="Third slide"
          style={{height:"600px",width:"80%"}}
        />
    </Carousel.Item>
    </Carousel>
  );
}

// render(<ControlledCarousel />);