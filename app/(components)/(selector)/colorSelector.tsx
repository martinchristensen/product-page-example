"use client";
import { selectableItem } from "../../../types";
import { RED, BLUE } from "../../../utils/constants";
import Selector from ".";
import ColorSelectorItem from "./selector-items/colorSelectorItem";

interface Props {
  onSelect?: (selectedItem?: selectableItem) => void;
}

const ColorSelector = ({ onSelect }: Props) => {

  const colors = [
    {
      id: 1,
      value: "red",
      element: <ColorSelectorItem value="red" color={RED} />,
    },
    {
      id: 2,
      value: "blue",
      element: <ColorSelectorItem value="blue" color={BLUE} />,
    },
  ];

  return (
    <Selector
      selectableItems={colors}
      onSelect={(selectedItem) => {
        onSelect && onSelect(selectedItem);
      }}
    />
  );
};

export default ColorSelector;
