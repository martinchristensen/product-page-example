import { cloneElement } from "react";
import styles from "./progress-bar.module.css";

interface Props {
  progress: number;
  progressColor?: string;
  length?: number;
  progressIcon: JSX.Element;
  backgroundColor?: string;
}

const ProgressBar = (props: Props) => {
  const {
    progress,
    progressColor = "#E6B91E",
    length = 5,
    progressIcon,
    backgroundColor,
  } = props;

  let Icons: JSX.Element[] = [];

  for (let i = 0; i < length; i++) {
    Icons = [...Icons, progressIcon];
  }

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className={styles.progrssIcon}>
        {progressIcon &&
          Icons.map((icon, index) => {
            return cloneElement(icon, {
              key: index,
              style: { color: progressColor },
            });
          })}
      </div>
      <div
        className={styles.overlay}
        style={{
          width: `${100 - progress}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
