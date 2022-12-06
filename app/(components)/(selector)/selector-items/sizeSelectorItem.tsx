"use-client";
import { selectableSizes } from "../../../../types";
import styles from "./selector-item.module.css";

interface Props {
    size: selectableSizes
    value: string;
    selected?: boolean;
  }

const SizeSelectorItem = (props: Props) => {
  const { value, selected = false } = props;
  return (
    <>
      <a className={styles.anchor}>
        <div
          className={`${styles.sizeItem} ${
            selected ? styles.selectedSizeItem : ""
          }`}
        >
            {value}
        </div>
      </a>
    </>
  );
};

export default SizeSelectorItem;
