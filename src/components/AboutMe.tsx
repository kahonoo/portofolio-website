

const AboutMe = () => {
  return (
    <section className="container mx-auto px-4 mt-16">
      <h1 className="text-center text-4xl">My Works Skills</h1>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className=" border border-black">
          <h1 className="text-1xl flex justify-center">Front-End Skills</h1>
          <p className="container mx-auto">
            Technologies like HTML, CSS, JavaScript, React, Angular, etc.
          </p>
        </div>
        <div className="w-full h-[150px] border border-black">
          <h1 className="text-1xl flex justify-center">Back-End Skills</h1>
          <p>
            Frameworks and languages like Node.js, Express, Django, or Ruby on
            Rails.
          </p>
        </div>
        <div className="w-full h-[150px] border border-black">
          <h1 className="text-1xl flex justify-center">DevOps & Tools</h1>
          <p>
            Tools used in development, such as Docker, Git, Jenkins, AWS, or
            CI/CD solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
