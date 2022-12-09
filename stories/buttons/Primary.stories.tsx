import { ComponentMeta, ComponentStory } from "@storybook/react";
import PrimaryButton from "../../app/(components)/(buttons)/PrimaryButton";

export default {
  title: "Product Page/Buttons/Primary",
  component: PrimaryButton,
  argTypes: { onClick: { action: "selected" } },
} as ComponentMeta<typeof PrimaryButton>;

export const Default: ComponentStory<typeof PrimaryButton> = (args) => (
  <PrimaryButton {...args} />
);
Default.args = {
    text: 'Click me'
}

export const Strech: ComponentStory<typeof PrimaryButton> = (args) => (
  <PrimaryButton {...args} />
);
Strech.args = {
    text: 'Click me',
    strech: true
}