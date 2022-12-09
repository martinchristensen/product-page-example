"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import PrimaryButton from "../(components)/(buttons)/PrimaryButton";
import DialogBox from "../(components)/(dialog)";
import ReviewForm from "./reviewForm";
import styles from "./reviews.module.css";

const CreateReview = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const router = useRouter()

  const create = async(body?: BodyInit | null) => {
    await fetch(`${process.env.NEXT_PUBLIC_PB_URL}/collections/reviews/records`, 
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: body
    })
    setDialogOpen(false) 
    router.refresh()
  }

  return (
    <>
      <PrimaryButton
        text="Leave a fake review"
        strech
        onClick={() => setDialogOpen(true)}
      />
      <DialogBox show={dialogOpen} onClose={() => setDialogOpen(false)}>
        <div className={styles.formWrapper}>
          <ReviewForm onSubmit={create}/>
        </div>
      </DialogBox>
    </>
  );
};

export default CreateReview;
