"use client";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTooltip from "react-tooltip";
import ProgressBar from ".";

interface Props {
  stars: number;
  starColor?: string;
  length?: number;
  backgroundColor?: string;
}

const StarsProgress = (props: Props) => {
  const {
    stars,
    starColor = "#E6B91E",
    backgroundColor = "white",
    length = 5,
  } = props;

  const progress = (stars / length) * 100;

  return (
    <>
      <a data-tip data-for={"StarsFromReview"}>
        <ProgressBar
          progress={progress}
          length={length}
          progressColor={starColor}
          backgroundColor={backgroundColor}
          progressIcon={<FontAwesomeIcon icon={faStar} />}
        />
      </a>
      <ReactTooltip id="StarsFromReview">{Math.round(stars * 100) / 100} stars</ReactTooltip>
    </>
  );
};

export default StarsProgress;
