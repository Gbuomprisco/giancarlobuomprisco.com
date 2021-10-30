const Author = () => {
  return (
    <div className="flex flex-row space-x-3 items-center">
      <a
        target="_blank"
        rel="noreferrer noopened"
        href="https://twitter.com/gc_psk"
      >
        <img width="45px" height="45px" src="/assets/giancarlo-2.png" />
      </a>

      <a
        className="text-xs text-gray-600"
        target="_blank"
        rel="noreferrer noopened"
        href="https://twitter.com/gc_psk"
      >
        @gc_psk
      </a>
    </div>
  );
};

export default Author;
