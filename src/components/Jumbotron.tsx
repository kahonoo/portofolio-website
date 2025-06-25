import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

const Jumbotron = () => {
  return (
      <section className="container mx-auto ">
        <div className="flex justify-center gap-14">
          <h1 className="text-2xl text-shadow-white">a bit about me</h1>
        </div>
        <p className="container mx-auto flex justify-center text-3xl md:text-8xl text-orange-700 ">
          WHO AM I? 
        </p>

        <div className="flex justify-center order-1 md:order-2">
          <img
            className="rounded-full w-[250px] h-[250px] md:w-[400px] md:h-[400px] border-8 border-orange-700 object-cover"
            src="/profile.jpg"
            alt="thumbnail"
          />
        </div>

        <div className="container mx-auto flex justify-center text-shadow-indigo-100 order-2 md=order-1 mt-5 ">
          Let me introduce myself, my name is Mas Kahono Riefandika Widodo, I am
          a Purwadhika student majoring in Full Stack Development. My goal in
          joining Purwadhika itself is to show the potential that a non-IT
          background can become a programmer.
        </div>
      </section>
  );
};

export default Jumbotron;
