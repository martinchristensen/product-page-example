"use-client";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTooltip from "react-tooltip";
import styles from "./selector-item.module.css";

interface Props {
    size: "35"|"36"|"37"|"38"|"39"|"40"|"41"|"42"|"43"|"44"|"45";
    value: string;
    selected?: boolean;
  }

const SizeSelectorItem = (props: Props) => {
  const { size, value, selected = false } = props;
  return (
    <>
      <a>
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
