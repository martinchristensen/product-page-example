import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./arrow.module.css";

type direction = "right" | "left";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  disabled?: boolean;
  direction?: direction;
}

const EncircledArrow = ({
  disabled = false,
  direction = "right",
  ...rest
}: Props) => {
  return (
    <div {...rest}>
      <FontAwesomeIcon icon={faCircleArrowRight} className={`${styles[direction]} ${styles.arrow} ${disabled && styles.disabled}`} />
    </div>
  );
};

export default EncircledArrow;
