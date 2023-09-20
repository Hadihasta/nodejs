const fs = require("fs");

fs.readFile("log.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  }

  console.log("LOG DATA : ", data);
});
