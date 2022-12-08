"use client";

import { useState } from "react";
import styles from "./review.module.css";

interface Props {
  text: string;
  maxLength?: number;
}

const Spoiler = ({ maxLength = 500, text }: Props) => {
  const [hidden, setHidden] = useState(true);
  let shortText;
  if (text.length > maxLength) {
    shortText = text.slice(0, maxLength);
    return (
      <div>
        <pre className={styles.spoilerText}>
          {hidden ? `${shortText}...` : text}
        </pre>
        <div className={styles.spoilBtn} onClick={() => setHidden(!hidden)}>{hidden ? `spoil` : `hide`}</div>
      </div>
    );
  }
  return <pre className={styles.spoilerText}>{text}</pre>;
};

export default Spoiler;
