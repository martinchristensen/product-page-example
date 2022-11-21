import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTooltip from "react-tooltip";
import { selectableColors } from "../../../types";
import styles from "./selector-item.module.css";

interface Props {
  color: selectableColors;
  value: string;
  selected?: boolean;
}

const ColorSelectorItem = (props: Props) => {
  const { color, value, selected = false } = props;
  return (
    <>
      <a data-tip data-for={"ColorSelectorItem-" + color}>
        <div className={`${styles.colorItem} ${selected ? styles.selectedColorItem : ''}`} style={{ backgroundColor: color }}>
          {selected && <FontAwesomeIcon icon={faCheck} className={styles.checkmark} />}
        </div>
      </a>
      <ReactTooltip id={"ColorSelectorItem-" + color}>{value}</ReactTooltip>
    </>
  );
};

export default ColorSelectorItem;
