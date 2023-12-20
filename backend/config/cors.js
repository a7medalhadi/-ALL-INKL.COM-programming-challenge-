module.exports = {
  origin: process.env.CORS_ALLOW_ORIGIN.split(",").map((origin) =>
    origin.trim()
  ),
  // origin: "*",
  allowHeaders: ["Content-Type"],
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
};
