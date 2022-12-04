'use client';

import Slider from "./(components)/(slider)";
import Image from "next/image";
import { useEffect, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
// import useWindowDimensions from "../hooks/useWindowDimensions";

// const sliderHeight =  750;
// const sliderHeight = width < 768 ? 200 : 750;

const PantsSlider = () => {
  const {width} = useWindowDimensions()
  const [sliderHeight, setSliderHeight] = useState<number>(width < 768 ? 350 : 750)

  useEffect(() => {
    setSliderHeight(width < 768 ? 350 : 750)
  },[width])

  const images = [
    <Image src={"/pants-blue.jpg"} width={sliderHeight*0.75} height={sliderHeight} alt="" />,
    <Image src={"/pants-red.jpg"} width={sliderHeight*0.67} height={sliderHeight} alt="" />,
  ];

  return (
    <Slider
      style={{ height: sliderHeight }}
      slides={images}
    />
  );
};

export default PantsSlider;
