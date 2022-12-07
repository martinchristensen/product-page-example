import Link from "next/link";
import ReviewsOverview from "../(components)/(review-overview)";
import styles from "../Home.module.css";

const ReviewsPage = () => {
  return (
    <main className={styles.mainWrapper}>
      <div>
        <Link href={`../`}>Go back</Link>
        <br />
        <p>This page is a work in progress...</p>
        <ReviewsOverview oneStars={1} twoStars={2} threeStars={3} fourStars={3} fiveStars={2} />
      </div>
    </main>
  );
};

export default ReviewsPage;
