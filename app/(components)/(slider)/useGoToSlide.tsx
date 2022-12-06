"use client";

import { useEffect } from "react";

const useGoToSlide = (activeSlide: number, paginate: (n: number) => void, goToSlideIndex?: number) => {
    const goToSlide = (slideIndex: number) => {
        const toPaginate = slideIndex - activeSlide;
        paginate(toPaginate)
      };

    useEffect(() => {
        goToSlideIndex !== undefined && goToSlide(goToSlideIndex)
    }, [goToSlideIndex])
}

export default useGoToSlide