module.exports = [
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: [
        "https://cwk-startup.onrender.com",
        "localhost:1338",
        "http://localhost:1338",
      ], //allow all
      headers: ["*"], //allow all headers
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "https://cwk-startup.onrender.com",
            "localhost:1338",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "https://cwk-startup.onrender.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
