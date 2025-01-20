const sharp = require("sharp");
const fs = require("fs");

// Carpetas de entrada y salida
const inputFolder = "./input/";
const outputFolder = "./output/";

// Tamaños deseados
const sizes = [320, 640, 1280];

// Leer las imágenes de la carpeta
fs.readdirSync(inputFolder).forEach((file) => {
  sizes.forEach((size) => {
    sharp(`${inputFolder}/${file}`)
      .resize(size) // Cambiar el tamaño
      .toFile(`${outputFolder}/${file.split(".")[0]}-${size}.jpg`, (err) => {
        if (err) console.error(err);
        else console.log(`Generada: ${file.split(".")[0]}-${size}.jpg`);
      });
  });
});
