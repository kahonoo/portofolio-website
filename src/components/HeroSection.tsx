import Image from "next/image";

const Jumbotron = () => {
  return (
    <div className="bg-[#f8f8f8] py-16 rounded-b-[100px]">
      <section id="Jumbotron" className="container mx-auto ">
        <div className="flex justify-center gap-14 ">
          <h1 className="text-2xl text-[#343434] font-semibold motion-preset-slide-right motion-duration-2000">
            A BIT ABOUT ME
          </h1>
        </div>
        <p className="container mx-auto flex justify-center text-3xl md:text-8xl text-[#343434] font-bold motion-preset-slide-left motion-duration-2000">
          Who Am I?
        </p>

        <div className="flex justify-center order-1 md:order-2 motion-preset-expand motion-duration-1500 ">
          <Image
            className="rounded-full border-2 border-[#343434] object-cover aspect-square"
            src="/profile.webp"
            alt="thumbnail"
            width={200}
            height={200}
          />
        </div>

        <p className="container mx-auto text-center text-shadow-indigo-100 order-2 md=order-1 mt-5 text-[#343434] px-5 md:px-30 motion-preset-expand motion-duration-1500 ">
          Let me introduce myself, my name is Mas Kahono Riefandika Widodo, I am
          a Purwadhika student majoring in Full Stack Development. My goal in
          joining Purwadhika itself is to show the potential that a non-IT
          background can become a programmer.
        </p>
      </section>
    </div>
  );
};

export default Jumbotron;
