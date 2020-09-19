const path = require("path");
require("dotenv").config({
  path:  path.resolve(__dirname, "../", ".env")
});
const server = require("./server");
const PORT = process.env.PORT || 1000;

server.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
