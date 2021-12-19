import Container from "./container";
import MainHeader from "./main-header";
import SectionSeparator from "./section-separator";

import TwitterLogo from "./twitter-logo";
import LinkedinLogo from "./linkedin-logo";
import GithubLogo from "./github-logo";

import { TWITTER_URL, GITHUB_URL, LINEKDIN_URL } from "../lib/constants";

const Footer = () => {
  return (
    <footer>
      <Container>
        <MainHeader />

        <div className="justify-end flex">
          <div className="flex flex-col py-8 justify-center items-center">
            <div className="flex flex-row space-x-12 justify-center">
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
      </Container>
    </footer>
  );
};

export default Footer;
