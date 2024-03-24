// basic template for web sdk
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis ? globalThis : e || self).clevertap =
        t());
})(this, function () {
  console.log("This is a test message from the webSDK");
});
