module.exports = {
    globDirectory: "build/",
    globPatterns: ["**/*.{html,js,css,json,png,jpg,svg}"],
    swDest: "build/service-worker.js",
    clientsClaim: true,
    skipWaiting: true,
  };
  