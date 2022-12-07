import StarsProgress from "../(progress-bar)/stars-progress";
import styles from "./reviewsOverview.module.css";

interface Props {
  oneStars: number;
  twoStars: number;
  threeStars: number;
  fourStars: number;
  fiveStars: number;
}

const ReviewsOverview = ({
  oneStars,
  twoStars,
  threeStars,
  fourStars,
  fiveStars,
}: Props) => {
  const nReviews =
    Math.max(oneStars, 0) +
    Math.max(twoStars, 0) +
    Math.max(threeStars, 0) +
    Math.max(fourStars, 0) +
    Math.max(fiveStars, 0);
  const toPercent = (n: number) => {
    if (n > 0) return Math.round((n / nReviews) * 100);
    return 0;
  };
  return (
    <div className={styles.container}>
      <span className={`${styles.header}`}>{nReviews} customer reviews</span>
      <div className={styles.starsContainer}>
        <div className={styles.starsItem}>
          <StarsProgress stars={1} id={'oneStars'} />
          <span>
            {oneStars} ({toPercent(oneStars)}%)
          </span>
        </div>
        <div className={styles.starsItem}>
          <StarsProgress stars={2} id={'twoStars'}/>
          <span>
            {twoStars} ({toPercent(twoStars)}%)
          </span>
        </div>
        <div className={styles.starsItem}>
          <StarsProgress stars={3} id={'threeStars'}/>
          <span>
            {threeStars} ({toPercent(threeStars)}%)
          </span>
        </div>
        <div className={styles.starsItem}>
          <StarsProgress stars={4} id={'fourStars'}/>
          <span>
            {fourStars} ({toPercent(fourStars)}%)
          </span>
        </div>
        <div className={styles.starsItem}>
          <StarsProgress stars={5} id={'fiveStars'}/>
          <span>
            {fiveStars} ({toPercent(fiveStars)}%)
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewsOverview;
