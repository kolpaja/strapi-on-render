module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1338),
  url: env("APP_URL", "http://localhost:1338"),
  app: {
    keys: env.array("APP_KEYS"),
  },
  dirs: {
    public: "./public",
  },
});
