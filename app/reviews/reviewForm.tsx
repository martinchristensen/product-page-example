"use client";

import { useState } from "react";
import PrimaryButton from "../(components)/(buttons)/PrimaryButton";
import styles from "./reviews.module.css";
import StarRating from "./starRating";

interface Props {
  onSubmit?: (body?: BodyInit | null) => void
}

const ReviewForm = ({onSubmit}: Props) => {
  const idPrefix = "review-form-";
  const [title, setTitle] = useState<string>();
  const [name, setName] = useState<string>();
  const [review, setReview] = useState<string>();
  const [stars, setStars] = useState<number>();

  const handleSubmit = async () => {
    const body = JSON.stringify({
      'title': title,
      'author': name,
      'description': review,
      'stars': stars
    })
    setTitle('');
    setName('');
    setReview('');
    setStars(undefined);
    onSubmit && onSubmit(body)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h6 className={styles.formTitle}>Create a "review"</h6>
      <div className={styles.inputContainer}>
        <label htmlFor={`${idPrefix}name`}>
          Name<span className={styles.required}>*</span>
        </label>
        <input
          id={`${idPrefix}name`}
          type="text"
          placeholder={`Bob`}
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor={`${idPrefix}title`}>
          Title<span className={styles.required}>*</span>
        </label>
        <input
          id={`${idPrefix}title`}
          type="text"
          placeholder={`Title`}
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor={`${idPrefix}review`}>
          Title<span className={styles.required}>*</span>
        </label>
        <textarea
          id={`${idPrefix}review`}
          placeholder={`Review`}
          required
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor={`${idPrefix}stars`}>
          Stars<span className={styles.required}>*</span>
        </label>
        <input
          className={styles.hidden}
          id={`${idPrefix}stars`}
          type="number"
          required
          value={stars}
        />
        <StarRating onChange={(stars) => setStars(stars)} />
      </div>
      <div className={styles.formButtonContainer}>
        <PrimaryButton text="Submit" type="submit" />
      </div>
    </form>
  );
};

export default ReviewForm;
