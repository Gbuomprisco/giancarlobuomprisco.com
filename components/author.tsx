import Image from "next/image";

import {
  TWITTER_URL,
  TWITTER_HANDLE,
  PROFILE_IMAGE,
  AUTHOR,
} from "../lib/constants";

const Author = () => {
  return (
    <div className="flex flex-row space-x-3 items-center">
      <a target="_blank" rel="noreferrer noopened" href={TWITTER_URL}>
        <Image
          className="hover:shadow-xl"
          layout="fixed"
          width="50px"
          height="50px"
          src={PROFILE_IMAGE}
          alt={AUTHOR}
        />
      </a>

      <a
        className="text-sm text-gray-600"
        target="_blank"
        rel="noreferrer noopened"
        href={TWITTER_URL}
      >
        {TWITTER_HANDLE}
      </a>
    </div>
  );
};

export default Author;
