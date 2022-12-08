import { ComponentMeta, ComponentStory, storiesOf } from "@storybook/react";
import Review from "../../app/(components)/(review)";

export default {
  title: "Product Page/Reviews/Review",
  component: Review,
  argTypes: {
      onHelpful: {action: 'Helpful review'}
  }
} as ComponentMeta<typeof Review>;

const Template: ComponentStory<typeof Review> = (args) => <Review {...args} />;

export const ShortReview = Template.bind({});
ShortReview.args = {
  stars: 3,
  helpful: 1,
  dateString: "2022-12-05 17:44",
  review: "Hmm... very mediocre product.",
  author: "Bob",
  title: "Okay product"
};

export const LongReview = Template.bind({});
LongReview.args = {
  stars: 3,
  dateString: "2022-12-05 17:44",
  review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam quisque id diam vel quam elementum pulvinar etiam non. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Morbi quis commodo odio aenean sed adipiscing. Commodo ullamcorper a lacus vestibulum sed arcu. At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Pharetra et ultrices neque ornare aenean euismod elementum nisi quis. Sed odio morbi quis commodo odio aenean sed. Orci sagittis eu volutpat odio. Elementum nisi quis eleifend quam adipiscing vitae. Vivamus at augue eget arcu dictum.
    
Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. In mollis nunc sed id semper risus in. Adipiscing commodo elit at imperdiet dui accumsan sit. Urna nunc id cursus metus aliquam eleifend. Diam vel quam elementum pulvinar etiam non quam. Fusce ut placerat orci nulla pellentesque dignissim. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Suscipit tellus mauris a diam maecenas sed enim ut sem. Augue interdum velit euismod in. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Volutpat commodo sed egestas egestas. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Phasellus egestas tellus rutrum tellus pellentesque. In mollis nunc sed id semper risus in hendrerit gravida.
    
Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Semper auctor neque vitae tempus. Sapien nec sagittis aliquam malesuada bibendum arcu. Cras sed felis eget velit aliquet sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada. Nec tincidunt praesent semper feugiat nibh sed. Pellentesque dignissim enim sit amet. Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Tincidunt id aliquet risus feugiat in. Tellus elementum sagittis vitae et. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Posuere morbi leo urna molestie at. Mattis vulputate enim nulla aliquet porttitor. Arcu dui vivamus arcu felis bibendum ut tristique et.
    
Et malesuada fames ac turpis egestas maecenas pharetra convallis. Interdum velit euismod in pellentesque massa placerat. Ultricies lacus sed turpis tincidunt id aliquet risus. Bibendum ut tristique et egestas quis ipsum. Dui sapien eget mi proin sed libero enim. Orci eu lobortis elementum nibh tellus molestie nunc non. Tortor condimentum lacinia quis vel eros donec ac odio tempor. Feugiat vivamus at augue eget arcu. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Vitae justo eget magna fermentum iaculis eu non. Scelerisque viverra mauris in aliquam. Turpis egestas pretium aenean pharetra magna ac. Egestas dui id ornare arcu.
    
Rhoncus mattis rhoncus urna neque. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Ac placerat vestibulum lectus mauris. Lectus arcu bibendum at varius vel pharetra. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Volutpat est velit egestas dui id ornare arcu odio ut. Quam nulla porttitor massa id. Diam quis enim lobortis scelerisque fermentum dui faucibus. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Tortor id aliquet lectus proin nibh nisl condimentum. Mauris cursus mattis molestie a iaculis at erat. Congue eu consequat ac felis.`,
  author: "Bob",
  title: "Okay product",
};
