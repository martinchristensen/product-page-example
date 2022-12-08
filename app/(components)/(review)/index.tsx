import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Key } from "react";
import StarsProgress from "../(progress-bar)/stars-progress";
import styles from "./review.module.css";
import Spoiler from "./spoiler";

interface Props {
  stars: number;
  review: string;
  author: string;
  title: string;
  helpful?: number;
  dateString: string;
  reviewId?: string;
  backgroundColor?: string;
  onHelpful?: () => void;
}

const Review = ({
  stars,
  review,
  author,
  title,
  helpful = 0,
  dateString,
  reviewId="id",
  onHelpful,
  backgroundColor
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.userIconContainer}>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className={styles.headerTextContainer}>
          <span className={styles.author}>{author}</span>
          <span className={styles.discreteText}>{dateString}</span>
        </div>
      </div>
      <div className={styles.titleContainer}>
        <StarsProgress stars={stars} id={`review-stars-${reviewId}`} backgroundColor={backgroundColor} />
        <h6 className={styles.title}>{title}</h6>
      </div>
      <div className={styles.reviewContiner}>
        <Spoiler text={review} />
      </div>
      <span className={styles.discreteText}>
        {helpful > 0 &&
          `${helpful} ${helpful == 1 ? `person` : `people`} found this helpful`}
      </span>
      {onHelpful && (
        <a className={styles.helpfulBtn} onClick={onHelpful}>
          Helpful
        </a>
      )}
    </div>
  );
};
export default Review;
