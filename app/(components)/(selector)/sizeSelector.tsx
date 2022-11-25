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
            value: "S",
            element: <SizeSelectorItem size="S" value="S" />,
          },
          {
            id: 2,
            value: "M",
            element: <SizeSelectorItem size="M" value="M" />,
          },
          {
            id: 3,
            value: "L",
            element: <SizeSelectorItem size="L" value="L" />,
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