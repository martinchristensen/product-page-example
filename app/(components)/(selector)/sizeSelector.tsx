'use client'

import { useState } from "react";
import { selectableItem } from "../../../types";
import Selector from ".";
import SizeSelectorItem from "./selector-items/sizeSelectorItem";

const SizeSelector = () => {
    const [selectedItem, setSelectedItem] = useState<selectableItem>()

    const sizes = [
        {
            id: 1,
            value: "40",
            element: <SizeSelectorItem size="39" value="39" />,
          },
          {
            id: 2,
            value: "45",
            element: <SizeSelectorItem size="40" value="40" />,
          },
          {
            id: 3,
            value: "46",
            element: <SizeSelectorItem size="41" value="41" />,
          },
    ]

    return (
        <Selector
            selectableItems={sizes}
            onSelect={(selectedItem) => {
                setSelectedItem(selectedItem);
            }}
          />
    )
}

export default SizeSelector