import Image from "next/image";
import { PROFILE_IMAGE, AUTHOR } from "../lib/constants";

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex md:mt-8 mb-8 md:mb-12 w-full lg:w-8/12">
      <div className="flex flex-col space-y-4 justify-center">
        <div className="flex-col space-y-4">
          <h2 className="flex space-x-4 items-center text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight md:pr-8">
            <Image
              layout="intrinsic"
              width={60}
              height={60}
              src={PROFILE_IMAGE}
              alt={AUTHOR}
            />

            <span>Ciao! This is Giancarlo 👋</span>
          </h2>
        </div>

        <div className="flex-col space-y-6">
          <p className="text-2xl font-medium">
            Coder and Founder. I ship products, and help businesses do the same.
          </p>

          <p className="text-base">
            On this website I showcase my projects, my learnings, and my life
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
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
