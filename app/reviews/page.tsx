import Link from "next/link";
import Review from "../(components)/(review)";
import ReviewsOverview from "../(components)/(reviews-overview)";
import CreateReview from "./createReview";
import styles from "./reviews.module.css";
import ReviewsList from "./reviewsList";



const getFilteredReviewsByStars = async (stars: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PB_URL}/collections/reviews/records?filter=(stars=${stars})`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data as any;
};

const ReviewsPage = async () => {
  const oneStar = await getFilteredReviewsByStars(1)
  const twoStars = await getFilteredReviewsByStars(2)
  const threeStar = await getFilteredReviewsByStars(3)
  const fourStar = await getFilteredReviewsByStars(4)
  const fiveStar = await getFilteredReviewsByStars(5)

  return (
    <main className={styles.mainWrapper}>
      <div className={styles.leftContent}>
        <Link href={`../`}>Go back</Link>
        <br />
        <ReviewsOverview
          oneStars={oneStar.totalItems}
          twoStars={twoStars.totalItems}
          threeStars={threeStar.totalItems}
          fourStars={fourStar.totalItems}
          fiveStars={fiveStar.totalItems}
        />
        <CreateReview />
      </div>
      <div className={styles.rightContent}>
        <ReviewsList />
      </div>
    </main>
  );
};

export default ReviewsPage;
