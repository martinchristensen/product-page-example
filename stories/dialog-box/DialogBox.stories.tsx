import { ComponentMeta, ComponentStory } from "@storybook/react";
import DialogBox from "../../app/(components)/(dialog)";

export default {
  title: "Product Page/Dialog box",
  component: DialogBox,
} as ComponentMeta<typeof DialogBox>;

const Template: ComponentStory<typeof DialogBox> = (args) => (
  <DialogBox {...args} />
);
export const Default = Template.bind({});
Default.args = {
  show: true,
  children: <p>This is a dialog box</p>,
  style: {padding: '10px'},
  backdropClickCloses: true,
};
