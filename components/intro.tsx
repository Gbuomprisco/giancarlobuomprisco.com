import TwitterLogo from "./twitter-logo";
import LinkedinLogo from "./linkedin-logo";
import GithubLogo from "./github-logo";

import { LINEKDIN_URL } from "../lib/constants";

import {
  TWITTER_URL,
  GITHUB_URL,
  PROFILE_IMAGE,
  AUTHOR,
} from "../lib/constants";

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex md:mt-8 mb-8 md:mb-12 items-center">
      <div className="flex flex-col space-y-4 md:w-7/12">
        <div className="flex-col space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight md:pr-8">
            Ciao! This is Giancarlo 👋
          </h2>
        </div>

        <div className="flex-col space-y-6">
          <h2 className="text-2xl font-medium">
            I&apos;m a programmer, startup founder, teacher, sometimes
            weightlifter
          </h2>

          <p className="text-base font-serif">
            On this site I write about programming, the projects I&apos;m
            working on, and my life in general
          </p>

          <p className="text-base font-serif">
            Lately, I&apos;ve been getting more and more interested in
            Serverless for Front-end Developers, and helping beginners to write
            full-stack applications from scratch
          </p>
        </div>
      </div>

      <div className="mx-auto hidden md:flex">
        <div className="flex flex-col space-y-6">
          <div>
            <img
              style={{ width: "200px", height: "200px" }}
              src={PROFILE_IMAGE}
              alt={AUTHOR}
            />
          </div>

          <div className="flex flex-row space-x-6 justify-center">
            <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer">
              <TwitterLogo />
            </a>

            <a href={LINEKDIN_URL} target="_blank" rel="noopener noreferrer">
              <LinkedinLogo />
            </a>

            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <GithubLogo />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
