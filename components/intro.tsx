import SubHeading from "./subheading";

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex md:mt-8 mb-8 md:mb-12">
      <div className="flex flex-col space-y-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter">
          <span>Ciao! This is Giancarlo 👋</span>
        </h2>

        <SubHeading>
          Coder and Founder. I ship products, and help others do the same.
        </SubHeading>

        <div className="flex-col space-y-2">
          <p className="text-base">
            On this website I showcase my projects, my learnings, and my life.
          </p>

          <p>
            I founded{" "}
            <a
              target={"_blank noreferrer"}
              className="border-b-2 font-semibold pb-1 border-[#efee00]"
              href="https://makerkit.dev"
            >
              MakerKit
            </a>{" "}
            and co-founded{" "}
            <a
              target={"_blank noreferrer"}
              className="border-b-2 font-semibold pb-1 border-[#1e88e5]"
              href="https://formtoro.com"
            >
              Formtoro
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
