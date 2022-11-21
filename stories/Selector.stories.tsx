import { ComponentMeta, ComponentStory } from "@storybook/react";
import Selector from "../components/selector";
import ColorSelectorItem from "../components/selector/selector-items/colorSelectorItem";
import { BLUE, RED } from "../utils/constants";

export default {
    title: 'Product Page/Selector/Selector',
    component: Selector,
    argTypes: { onSelect: { action: 'selected' } },
  } as ComponentMeta<typeof Selector>;

  const Template: ComponentStory<typeof Selector> = (args) => <Selector {...args}/>;

  export const ColorSelector = Template.bind({});
  ColorSelector.args = {
    selectableItems:[{id: 1, value:"red", element:<ColorSelectorItem color={RED} value={'red'} selected={true} />}, {id: 2, value:"blue", element:<ColorSelectorItem color={BLUE} value='blue' />}],
}