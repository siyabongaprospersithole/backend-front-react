import { Navbar } from ".";  // Import the Navbar component from the current directory.

export default {
  title: "Components/Navbar",  // Define the story title and category for Navbar.
  component: Navbar,  // Specify the component that this story represents.
};

export const Default = {
  args: {
    logo: "/img/logo.svg",  // Provide default arguments for the Navbar component, setting the logo prop.
  },
};
