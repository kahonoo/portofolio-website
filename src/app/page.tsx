import AboutMe from "@/components/WorkSkill";
import ContactMe from "@/components/ContactMe";
import Jumbotron from "@/components/HeroSection";
import KeyValue from "@/components/SoftSkill";
import MyExp from "@/components/MyExp";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Testimonial";
import { Avatar } from "@radix-ui/react-avatar";

export default function Home() {
  return (
    <main className="bg-[#efefed] mb-40">
      <Navbar />
      <Avatar />
      <Jumbotron />
      <AboutMe />
      <KeyValue />
      <MyExp />
      <Testimonial />
      <ContactMe />
    </main>
  );
}
