'use client'

import { useState } from "react";
import { selectableItem } from "../../../types";
import { RED, BLUE } from "../../../utils/constants";
import Selector from ".";
import ColorSelectorItem from "./selector-items/colorSelectorItem";

const ColorSelector = () => {
    const [selectedItem, setSelectedItem] = useState<selectableItem>()

    const colors = [
        { id: 1, value: "red", element: <ColorSelectorItem value="red" color={RED} /> },
        { id: 2, value: "blue", element: <ColorSelectorItem value="blue" color={BLUE} /> },
    ]

    return (
        <Selector
            selectableItems={colors}
            onSelect={(selectedItem) => {
                setSelectedItem(selectedItem);
            }}
          />
    )
}

export default ColorSelector