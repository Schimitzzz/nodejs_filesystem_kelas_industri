const fs = require("node:fs");

fs.readFile("Biodata.txt", "utf8", (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Isi file = ", data);
  }
});