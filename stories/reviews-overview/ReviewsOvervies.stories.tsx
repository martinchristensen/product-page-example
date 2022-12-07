import { ComponentMeta, ComponentStory } from "@storybook/react";
import ReviewsOverview from "../../app/(components)/(review-overview)";

export default {
    title: "Product Page/Reviews Overview",
    component: ReviewsOverview,
} as ComponentMeta<typeof ReviewsOverview>;

const Template: ComponentStory<typeof ReviewsOverview> = (args) => (
    <ReviewsOverview {...args} />
)

export const Default = Template.bind({});
Default.args = {
    oneStars: 1,
    twoStars: 1,
    threeStars: 1,
    fourStars: 1,
    fiveStars: 1
}