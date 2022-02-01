import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img alt="" loading="lazy" src="https://links.papareact.com/gi1" />
        </div>
        <div>
          <img alt="" loading="lazy" src="https://links.papareact.com/6ff" />
        </div>
        <div>
          <img alt="" loading="lazy" src="https://links.papareact.com/7ma" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
