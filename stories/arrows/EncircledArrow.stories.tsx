import { ComponentMeta, ComponentStory } from "@storybook/react";
import EncircledArrow from "../../app/(components)/(arrows)/encircledArrow";

export default {
  title: "Product Page/Arrows/Encircled arrow",
  component: EncircledArrow,
  argTypes: {
    direction: {
      options: ["right", "left"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof EncircledArrow>;

const Template: ComponentStory<typeof EncircledArrow> = (args) => (
  <EncircledArrow {...args} style={{width: 100}} />
);

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  direction: 'right'
};