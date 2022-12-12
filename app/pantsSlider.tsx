'use client';

import Slider from "./(components)/(slider)";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { ProductDetailsContext } from "./productDetailsContext";

const colorToIndex = (color?: string) => {
  if (color === "red") return 1;
  if (color === "blue") return 0;
  return undefined;
};

const PantsSlider = () => {
  const {width} = useWindowDimensions()
  const [sliderHeight, setSliderHeight] = useState<number>(width < 768 ? 350 : 750)
  const ProductDetails = useContext(ProductDetailsContext)

  useEffect(() => {
    setSliderHeight(width < 768 ? 350 : 750)
  },[width])

  const images = [
    <Image placeholder="blur" src={"/pants-blue.jpg"} width={sliderHeight*0.75} height={sliderHeight} alt="" />,
    <Image placeholder="blur" src={"/pants-red.jpg"} width={sliderHeight*0.67} height={sliderHeight} alt="" />,
  ];

  return (
    <Slider
      style={{ height: sliderHeight }}
      slides={images}
      goToSlide={colorToIndex(ProductDetails?.color)}
    />
  );
};

export default PantsSlider;