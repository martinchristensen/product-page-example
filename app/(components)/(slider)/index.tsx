"use client";

import { AnimatePresence, motion } from "framer-motion";
import { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import EncircledArrow from "../(arrows)/encircledArrow";
import styles from "./slider.module.css";

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  slides: JSX.Element[];
  className?: string
}

const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

const Slider = ({ slides, className, ...rest }: Props) => {
  const [[activeSlide, direction], setActiveSlide] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    if (0 < newDirection && activeSlide < slides.length - 1) {
        setActiveSlide([activeSlide + newDirection, newDirection]);
    } else if (0 > newDirection && 0 < activeSlide) {
        setActiveSlide([activeSlide + newDirection, newDirection]);
    }
  };

  return (
    <div className={`${styles.sliderContainer} ${className}`} {...rest}>
      <div className={styles.imageContainer}>
        {/* {slides.map((slide, index) => {
          return <div key={index}>{cloneElement(slide)}</div>;
        })} */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeSlide}
            variants={variants}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            {slides[activeSlide]}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className={styles.bottomBar}>
        <div className={styles.arrowsContainer}>
          <EncircledArrow
            className={styles.arrow}
            onClick={() => {
              paginate(-1);
            }}
            disabled={activeSlide < 1}
            direction="left"
          />
          <span className="">
            {activeSlide + 1}/{slides.length}
          </span>
          <EncircledArrow
            className={styles.arrow}
            onClick={() => {
              paginate(1);
            }}
            disabled={slides.length - 1 <= activeSlide}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
