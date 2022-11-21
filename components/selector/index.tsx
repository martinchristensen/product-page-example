import { useState } from "react";
import { selectableItem } from "../../types";
import styles from "./selector.module.css";

interface Props {
  selectableItems: selectableItem[];
  onSelect: (selectedItem?: selectableItem) => void
}

const Selector = (props: Props) => {
  const { selectableItems, onSelect } = props;
  const [selectedItem, setSelectedItem] = useState<selectableItem>()

  const handleOnClick = (clickedItem: selectableItem) => {
    if (selectedItem?.id !== clickedItem.id) {
        setSelectedItem(clickedItem)
        onSelect(clickedItem)
    } else {
        setSelectedItem(undefined)
        onSelect()
    }
  }

  return (
    <div className={styles.wrapper}>
      {selectableItems.map((selectableItem) => {
        return <div key={selectableItem.id} onClick={() => handleOnClick(selectableItem)}>{selectableItem.element}</div>;
      })}
    </div>
  );
};

export default Selector;
