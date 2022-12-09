"use client";
import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from "react";
import styles from "./dialog.module.css";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  show?: boolean;
  backdropClickCloses?: boolean;
  onClose?: () => void;
  backdropColor?: string;
  className?: string;
  children: React.ReactNode;
}

const DialogBox = ({
  show,
  className,
  backdropClickCloses = true,
  backdropColor = "rgba(0, 0, 0, 0)",
  children,
  onClose,
  ...rest
}: Props) => {
  const [open, setOpen] = useState(show);

  //TODO: Create a hook for this
  useEffect(() => {
     setOpen(show);
  }, [show]);

  const handleOnClose = () => {
    onClose && onClose()
    setOpen(false);
  } 

  const handleOnBackdropClick = () => {
    if (backdropClickCloses) {
      handleOnClose()
    }
  };

  if (open)
    return (
      <div className={styles.dialogWrapper}>
        <div className={`${styles.dialogBox} ${className}`} {...rest}>
          {children}
        </div>
        <div
          className={styles.dialogBackdrop}
          style={{ backgroundColor: backdropColor }}
          onClick={handleOnBackdropClick}
        ></div>
      </div>
    );
  return null;
};

export default DialogBox;
