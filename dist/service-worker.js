if (!self.define) {
  let e,
    t = {};
  const i = (i, s) => (
    (i = new URL(i + ".js", s).href),
    t[i] ||
      new Promise((t) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = i), (e.onload = t), document.head.appendChild(e);
        } else (e = i), importScripts(i), t();
      }).then(() => {
        let e = t[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (s, n) => {
    const o =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (t[o]) return;
    let r = {};
    const l = (e) => i(e, o),
      d = { module: { uri: o }, exports: r, require: l };
    t[o] = Promise.all(s.map((e) => d[e] || l(e))).then((e) => (n(...e), r));
  };
}
define(["./workbox-2b403519"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: "index.html", revision: "a97401bb835be96637e813473fb71e53" },
        { url: "main.js", revision: "29fd20012b4b98e51defd0028b0efd38" },
      ],
      {}
    );
});
