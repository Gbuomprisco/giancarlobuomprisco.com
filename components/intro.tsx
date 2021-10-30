const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex md:mt-8 mb-8 md:mb-12 items-center">
      <div className="flex flex-col space-y-4 md:w-6/12">
        <div className="flex-col space-y-4">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter leading-tight md:pr-8">
            Ciao, this is Giancarlo —
          </h2>
        </div>

        <div className="flex-col space-y-6">
          <h2 className="text-2xl">
            I am a programmer, startup founder, teacher, sometimes weightlifter
          </h2>

          <p>
            On this site I write about coding, the projects I am working on, and
            my life in general
          </p>

          <p>
            Building digital products is my biggest passion. Another of my areas
            of interests is Serverless for Front-end Developers, and helping
            everyone to write full-stack applications from scratch
          </p>
        </div>
      </div>

      <div className="mx-auto hidden sm:flex">
        <img
          style={{ width: "250px", height: "250px" }}
          className="rounded-full object-cover"
          src="/assets/giancarlo.jpeg"
          alt="Giancarlo"
        />
      </div>
    </section>
  );
};

export default Intro;
