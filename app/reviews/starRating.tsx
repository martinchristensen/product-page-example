"use client";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styles from "./reviews.module.css";

interface Props {
  onChange?: (stars: number) => void;
}

interface StarProps {
  on?: boolean;
  onHover: (starNumber: number) => void;
  starNumber: number;
  onClick: (starNumber: number) => void
}

const StarRating = ({onChange}: Props) => {
  const [hoverStar, setHoverStar] = useState(0);
  const [selectedStar, setSelectedStar] = useState(0)
  const stars = [1, 2, 3, 4, 5];

    const handleSelect = (star: number) => {
        setSelectedStar(star)
        onChange && onChange(star)
    }

  return (
    <div>
      {stars.map((star) => (
        <Star
          starNumber={star}
          onHover={(star) => setHoverStar(star)}
          on={hoverStar >= star || selectedStar >= star}
          key={star}
          onClick={handleSelect}
        />
      ))}
    </div>
  );
};

const Star = ({ on, onHover, starNumber, onClick }: StarProps) => {
  return (
    <FontAwesomeIcon
      onMouseEnter={() => onHover(starNumber)}
      onMouseLeave={() => onHover(0)}
      icon={faStar}
      className={styles.star}
      style={on ? { color: "#E6B91E" } : {}}
      onClick={() => onClick(starNumber)}
    />
  );
};

export default StarRating;
