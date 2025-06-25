import { Avatar, AvatarImage } from "./ui/avatar";

const Testimonial = () => {
  return (
    <section className="container mx-auto px-4 mt-10">
      <h1 className="text-4xl text-center mb-5">Testimonial</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border to-black">
          <div>
            <Avatar className="container mx-auto w-[100px] h-[100px] mt-4 ">
              <AvatarImage src="/profile.jpg" />
            </Avatar>
            <h1 className="text-center mt-3">
              Rama
              <p className="mt-3">Sample text.Click to select the text box
                Click again or double click to start editing
                the text.
              </p>
            </h1>
          </div>
        </div>

        <div className="border to to-black">
          <div>
            <Avatar className="container mx-auto w-[100px] h-[100px] mt-4 ">
              <AvatarImage src="/profile.jpg" />
            </Avatar>
            <h1 className="text-center mt-3">
              Banta
              <p className="mt-3">Sample text.Click to select the text box
                Click again or double click to start editing
                the text.</p>
            </h1>
          </div>
        </div>

        <div className="border to to-black">
          <div>
            <Avatar className="container mx-auto w-[100px] h-[100px] mt-4 ">
              <AvatarImage src="/profile.jpg" />
            </Avatar>
            <h1 className="text-center mt-3">
              Nino
              <p className="mt-3">Sample text.Click to select the text box
                Click again or double click to start editing
                the text.</p>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
