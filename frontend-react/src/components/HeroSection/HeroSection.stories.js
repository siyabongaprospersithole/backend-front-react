// Import the HeroSection component from the current directory.
import { HeroSection } from ".";

// Export a story configuration for the HeroSection component.
export default {
  title: "Components/HeroSection", // Title for the storybook category.
  component: HeroSection, // Specify the component to be used in the story.
};

// Export a default story for the HeroSection component.
export const Default = {
  args: {
    backgroundUrl: {}, // Default arguments for the component story.
  },
};
