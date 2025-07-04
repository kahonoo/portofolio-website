import { Avatar, AvatarImage } from "./ui/avatar";
const AboutMe = () => {
  return (
    <section id="AboutMe" className="container mx-auto px-4 mt-16 ">
      <h1 className="text-center text-4xl text-[#343434] font-extrabold">
        My Works Skills
      </h1>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 motion-preset-expand">
        <div className=" border border-black rounded-lg bg-white text-[#343434]">
          <h1 className="text-1xl flex justify-center mt-3 font-bold">
            Front-End Skills
          </h1>
          <div className="flex justify-center gap-6 mt-5 ">
            <p>
              <Avatar className="size-20">
                <AvatarImage src="/css.webp" alt="thumbnail" />
              </Avatar>
            </p>
            <p>
              <Avatar className="size-20">
                <AvatarImage src="/html.webp" alt="thumbnail"/>
              </Avatar>
            </p>
            <p>
              <Avatar className="size-20">
                <AvatarImage src="/js.webp" alt="thumbnail"/>
              </Avatar>
            </p>
          </div>
        </div>
        <div className="w-full h-[150px] border border-black rounded-lg bg-white text-[#343434]">
          <h1 className="text-1xl flex justify-center mt-3 font-bold">
            Back-End Skills
          </h1>
          <div className="flex justify-center gap-6 mt-5 ">
            <p>
              <Avatar className="size-20">
                <AvatarImage src="/nodejs.webp" alt="thumbnail"/>
              </Avatar>
            </p>
          </div>
        </div>
        <div className="w-full h-[150px] border border-black rounded-lg bg-white text-[#343434]">
          <h1 className="text-1xl flex justify-center mt-3 font-bold">
            DevOps & Tools
          </h1>
          <div className="flex justify-center gap-6 mt-5 ">
            <p>
              <Avatar className="size-20">
                <AvatarImage src="/git.webp" alt="thumbnail"/>
              </Avatar>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
