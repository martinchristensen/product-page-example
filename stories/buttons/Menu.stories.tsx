import { ComponentMeta, ComponentStory } from "@storybook/react";
import MenuButton from "../../app/(components)/(buttons)/MenuButton";

export default {
  title: "Product Page/Buttons/Menu",
  component: MenuButton,
  argTypes: { onClick: { action: "selected" } },
} as ComponentMeta<typeof MenuButton>;

export const Default: ComponentStory<typeof MenuButton> = (args) => (
  <MenuButton {...args} />
);

Default.args = {
    text: 'Click me'
}