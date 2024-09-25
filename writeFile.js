const fs = require("node:fs");

fs.writeFile(
  "Biodata.txt",
  "Halo,perkenalkan nama saya Bagas Aditya Ramadhan,  Umur saya 16, Saya lahir di Bekasi 8 Oktober 2007, dan saya bersekolah di SMKN 15 KOTA BEKASI. ",
  function (error) {
    if (error) {
      console.error("Terjadi error karena : ", error);
    } else {
      console.log("File berhasil dibuat");
    }
  }
);