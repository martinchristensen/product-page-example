import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ProgressBar from "../../app/(components)/(progress-bar)";

export default {
  title: "Product Page/Progress bar",
  component: ProgressBar
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);
export const Starts = Template.bind({});
Starts.args = {
  progress: 25,
  progressColor: '#E6B91E',
  length: 5,
  progressIcon: <FontAwesomeIcon icon={faStar} />,
  backgroundColor: 'white'
};
