import { ComponentMeta, ComponentStory } from "@storybook/react";
import Slider from "../../app/(components)/(slider)";

export default {
  title: "Product Page/Slider",
  component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const ImageSlider = Template.bind({});
ImageSlider.args = {
  slides: [
    <div style={{ width: 100, height: 100, backgroundColor: "blue" }}></div>,
    <div style={{ width: 100, height: 100, backgroundColor: "yellow" }}></div>,
    <div style={{ width: 120, height: 300, backgroundColor: "green" }}></div>,
  ],
  goToSlide: 0
};
