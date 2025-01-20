import { defineConfig } from "vite";

export default defineConfig({
  root: "./src", // Cambia la raíz a "src" para usar el index.html dentro de src
  build: {
    outDir: "../docs", // Los archivos construidos irán a "docs" en la raíz del proyecto
  },
});
