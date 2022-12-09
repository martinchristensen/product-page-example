import Link from "next/link";
import Review from "../(components)/(review)";
import ReviewsOverview from "../(components)/(reviews-overview)";
import CreateReview from "./createReview";
import styles from "./reviews.module.css";

const getReviews = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PB_URL}/collections/reviews/records?perPage=30`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data?.items as any[];
};

const getFilteredReviewsByStars = async (stars: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PB_URL}/collections/reviews/records?filter=(stars=${stars})`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data as any;
};

const ReviewsPage = async () => {
  const reviews = await getReviews();
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
        <p>This page is a work in progress...</p>
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
        {reviews?.map((review) => {
          const createdDate = new Date(review.created);
          return (
            <Review
              author={review.author}
              dateString={createdDate.toLocaleDateString()}
              review={review.description}
              stars={review.stars}
              title={review.title}
              helpful={review.helpful}
              reviewId={review.id}
              key={review.id}
              backgroundColor={`rgb(235, 235, 235)`}
            />
          );
        })}
      </div>
    </main>
  );
};

export default ReviewsPage;
