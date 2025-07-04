import { Avatar, AvatarImage } from "./ui/avatar";

const KeyValue = () => {
  return (
    <section className="container mx-auto px-4 mt-10 text-[#343434] ">
      <h1 className="text-4xl text-center mb-5 font-extrabold">Soft Skills</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <div className=" rounded-lg">
          <div>
            <Avatar className="container mx-auto w-[100px] h-[100px] mt-4 ">
              <AvatarImage src="/iconpub.webp" alt="thumbnail"/>
            </Avatar>
            <h1 className="text-center mt-3">
              Public Speaking
            </h1>
          </div>
        </div>

        <div className=" rounded-lg">
          <div>
            <Avatar className="container mx-auto w-[100px] h-[100px] mt-4 ">
              <AvatarImage src="/iconCom.webp" alt="thumbnail" />
            </Avatar>
            <h1 className="text-center mt-3">
              Communication Skill
            </h1>
          </div>
        </div>

        <div className="rounded-lg">
          <div>
            <Avatar className="container mx-auto w-[100px] h-[100px] mt-4 ">
              <AvatarImage src="/iconProb.webp" />
            </Avatar>
            <h1 className="text-center mt-3 ">
              Problem Solving
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyValue;
