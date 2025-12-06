const serverless = require("serverless-http");
const app = require("./app"); // path to your express app (adjust if needed)

module.exports = serverless(app);
