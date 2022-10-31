import Image from "next/image";

import {
  TWITTER_URL,
  PROFILE_IMAGE,
  AUTHOR,
} from "../lib/constants";

const Author = () => {
  return (
    <div className="flex flex-row space-x-3 items-center">
      <a target="_blank" rel="noreferrer noopened" href={TWITTER_URL}>
        <Image
          priority={true}
          className="hover:shadow-xl rounded-full"
          layout="fixed"
          width="48"
          height="48"
          src={PROFILE_IMAGE}
          alt={AUTHOR}
        />
      </a>
    </div>
  );
};

export default Author;
