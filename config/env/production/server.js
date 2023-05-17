module.exports = ({ env }) => ({
  url: env("RENDER_EXTERNAL_URL"),
  dirs: {
    public: "/api/data/public",
  },
});
