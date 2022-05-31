import SubHeading from "./subheading";

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex md:mt-8 mb-8 md:mb-12">
      <div className="flex flex-col space-y-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter">
          <span>Ciao! This is Giancarlo 👋</span>
        </h2>

        <SubHeading>
          Coder and Founder. I love building digital products and sharing my learnings.
        </SubHeading>

        <div className="flex-col space-y-2">
          <p>
            Currently, I&apos;m busy building and running two projects:
          </p>

          <ul className={'flex flex-col space-y-2 list-disc pl-4'}>
            <li>I founded{" "}
              <a
                target={"_blank noopener"}
                className="border-b-2 font-semibold pb-0.5 border-[#efee00]"
                href="https://makerkit.dev"
              >
                MakerKit
              </a>, a SaaS Starter for Next.js and Firebase</li>
            <li>
              I co-founded{" "}
              <a
                target={"_blank noopener noreferrer"}
                className="border-b-2 font-semibold pb-0.5 border-[#1e88e5]"
                href="https://formtoro.com"
              >
                Formtoro
              </a> - a premier form builder for eCommerce
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Intro;
