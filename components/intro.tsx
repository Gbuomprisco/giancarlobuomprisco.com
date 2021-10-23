import Navigation from "./navigation";

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex md:justify-between mt-16 mb-16 md:mb-12">
      <div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Ciao. <br />
          Giancarlo here.
        </h1>

        <h3 className="text-xl md:text-2xl text-gray-800 font-light">
          I am a Software consultant, technical writer, and maker
        </h3>
      </div>
    </section>
  );
};

export default Intro;
