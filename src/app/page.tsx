import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Jumbotron from "@/components/Jumbotron";
import MyExp from "@/components/MyExp";
import Testimonial from "@/components/Testimonial";
import { Avatar } from "@radix-ui/react-avatar";

export default function Home() {
  return (
    <main className="bg-gray-300 mb-40">
      <Avatar />
      <Jumbotron />
      <AboutMe />
      <MyExp />
      <Testimonial />
      <ContactMe />
    </main>
  );
}
