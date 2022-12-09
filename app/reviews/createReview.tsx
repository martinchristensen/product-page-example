"use client";

import { useState } from "react";
import PrimaryButton from "../(components)/(buttons)/PrimaryButton";
import DialogBox from "../(components)/(dialog)";

const CreateReview = () => {
    const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      <PrimaryButton text="Leave a fake review" strech onClick={() => setDialogOpen(true)} />
      <DialogBox show={dialogOpen} onClose={() => setDialogOpen(false)}>s</DialogBox>
    </>
  );
};

export default CreateReview;
