import { useEffect, useRef } from "react";

declare var Cal: any;

declare global {
  interface Window {
    Cal: typeof Cal;
  }
}

const CalWidget = () => {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) {
      return;
    }

    loadCalScript();
    initCalDotCom();

    mounted.current = true;
  }, []);

  return (
    <>
      <div className={'w-full h-full overflow-scroll'} id="my-cal-inline" />
    </>
  );
};

function initCalDotCom() {
  Cal("init", {origin:"https://app.cal.com"});

  Cal("inline", {
    elementOrSelector:"#my-cal-inline",
    calLink: "gianc/30min"
  });

  Cal("ui", {
    theme: "light",
    styles: {
      branding: {"brandColor":"#fff"}
    }
  });
}

function loadCalScript() {
  (function (C, A, L) { let p = function (a: { q: unknown[] }, ar: unknown[]) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { // @ts-ignore
    p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
}

export default CalWidget;
