import React, { useState, useEffect } from "react";
import axios from "axios";
import HeroSlider from "react-slick";

//Component
import { NextArrow, PrevArrow } from "./Arrows.component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel=()=>{
  const [images, setImages] = useState([]);

  useEffect(() => {
    const requestNowPlayingMovies = async() => {
      const getImages = await axios.get("/movie/now_playing");
      setImages(getImages.data.results);
    };
    requestNowPlayingMovies();
  }, []);

  console.log({images});

  const settingsLg = {
    centerMode: true,
    centerPadding: "100px",
    autoplay: false,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
        {
          images.map((image) => (
            <div className="w-full h-56 md:h-96 py-3">
              <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full" />
            </div>
          ))
        }
        </HeroSlider>
      </div>

      <div className="hidden lg:block">
        <HeroSlider {...settingsLg}>
        {
          images.map((image) => (
            <div className="w-full h-80 px-1 py-2">
              <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full rounded" />
            </div>
          ))
        }
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;
