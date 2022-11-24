"use client ";

import Slider from "./(components)/(slider)";
import Image from "next/image";
import { ReactNode } from "react";

interface slideProps {
  image: ReactNode;
  width?: string | number;
  height?: string | number;
}

const sliderHeight = 750;

const ShoeSlider = () => {
  const images = [
    <Image src={"/shoe1.jpg"} width={sliderHeight*0.75} height={sliderHeight} alt="" />,
    <Image src={"/shoe2.jpg"} width={sliderHeight*1.6} height={sliderHeight} alt="" />,
  ];

  return (
    <Slider
      style={{ height: sliderHeight }}
      slides={images}
    />
  );
};

export default ShoeSlider;
