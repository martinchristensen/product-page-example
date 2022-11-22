import { ComponentMeta, ComponentStory } from "@storybook/react";
import Selector from "../../app/(components)/(selector)";
import ColorSelectorItem from "../../app/(components)/(selector)/selector-items/colorSelectorItem";
import SizeSelectorItem from "../../app/(components)/(selector)/selector-items/sizeSelectorItem";
import { BLUE, RED } from "../../utils/constants";

export default {
  title: "Product Page/Selector/Selector",
  component: Selector,
  argTypes: { onSelect: { action: "selected" } },
} as ComponentMeta<typeof Selector>;

const Template: ComponentStory<typeof Selector> = (args) => (
  <Selector {...args} />
);

export const ColorSelector = Template.bind({});
ColorSelector.args = {
  selectableItems: [
    {
      id: 1,
      value: "red",
      element: <ColorSelectorItem color={RED} value={"red"} />,
    },
    {
      id: 2,
      value: "blue",
      element: <ColorSelectorItem color={BLUE} value="blue" />,
    },
  ],
};

export const SizeSelector = Template.bind({});
SizeSelector.args = {
  selectableItems: [
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
  ],
};
