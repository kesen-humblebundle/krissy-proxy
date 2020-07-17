const path = require("path");
require("dotenv").config({
  path:  path.resolve(__dirname, "../", ".env")
});
const server = require("./server");
const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
