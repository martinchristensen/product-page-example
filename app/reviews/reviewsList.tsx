"use client";

import { useEffect, useState } from "react";
import Select from "react-select";
import Review from "../(components)/(review)";
import styles from "./reviews.module.css";

interface Props {}

const ReviewsList = ({}: Props) => {
  const [reviews, setReviews] = useState<any[]>();
  const [sortBy, setSortBy] = useState('-created');
  const options = [
    { value: "-created", label: "Newest" },
    { value: "created", label: "Oldest" },
    { value: "-stars", label: "Most stars" },
    { value: "stars", label: "Least stars" },
    //TODO: Most helpful
  ];

  useEffect(() => {
    const getReviews = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_PB_URL}/collections/reviews/records?perPage=30&sort=${sortBy}`,
        { cache: "no-store" }
      );
      const data = await res.json();
      setReviews(data?.items);
    };
    getReviews();
  }, [sortBy]);

  return (
    <>
      <div className={styles.sortContainer}>
        <h4>Sort by:</h4>
        <Select options={options} defaultValue={options[0]} onChange={(option) => {setSortBy(option ? option?.value : sortBy)}}/>
      </div>
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
    </>
  );
};

export default ReviewsList;
