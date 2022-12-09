import { ComponentMeta, ComponentStory } from "@storybook/react";
import ReviewForm from "../../app/reviews/reviewForm";

export default {
    title: "Product Page/Review Form",
    component: ReviewForm,
    args: {}
  } as ComponentMeta<typeof ReviewForm>;
  
  export const Default: ComponentStory<typeof ReviewForm> = (args) => (
    <ReviewForm {...args} />
  );
  Default.args = {
  }