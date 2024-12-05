# ANEXO IV: Configuración de Vite para manejar varios archivos HTML y desplegarlos en GitHub Pages

Vite está pensado para incluir un solo HTML, ya que está ideado para generar SPA's (Single Page Application).

Así que si tienes múltiples archivos HTML en tu proyecto y quieres incluirlos todos en el build para GitHub Pages, sigue estos pasos:

---

## 1. Usar la configuración de entradas múltiples (`rollupOptions`) en `vite.config.js`

Edita tu archivo `vite.config.js` o `vite.config.ts` para incluir varias entradas HTML. Usa la opción `rollupOptions.input` para especificar los archivos HTML:

```javascript
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "./src", // no olvidemos cambiar la raíz del proyecto a "src"
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./src/index.html"), // Página principal
        about: resolve(__dirname, "./src/about.html"), // Otra página
        contact: resolve(__dirname, "./src/contact.html"), // Otra página
        // Añade más entradas si es necesario
      },
    },
  },
  base: "./", // Opcional: rutas relativas para mayor compatibilidad
});
```

---

## 2. Estructura del proyecto

Asegúrate de que los archivos HTML que quieres incluir estén organizados correctamente en tu proyecto. En el **ANEXO I** se explica cómo tener todo el código dentro de `src` Por ejemplo:

```plaintext
├src/
|   ├── index.html
|   ├── about.html
|   ├── contact.html
|   ├── scripts/
│   |   └── main.js
|   └── style/
├── vite.config.js
└── package.json
```

---

## 3. Compilar el proyecto

Ejecuta el comando de build para generar los archivos estáticos:

```bash
npm run build
```

Esto generará una carpeta de salida (`dist` por defecto) que incluirá todos los archivos HTML especificados.

---

## 4. Subir a GitHub Pages

Si necesitas que el contenido se sirva desde la carpeta `docs`, modifica la configuración de salida en `vite.config.js`:

```javascript
export default defineConfig({
  build: {
    root: "./src", // Cambia la raíz del proyecto a "src"
    outDir: "../docs", // Cambia el directorio de salida
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html"),
      },
    },
  },
  base: "./",
});
```

Luego, sube la carpeta `docs` generada a la rama que estés utilizando para GitHub Pages.

---

## 5. Acceso a las páginas

Después del despliegue, tus páginas estarán disponibles en las siguientes URLs:

- `https://tu-usuario.github.io/mi-proyecto/` → `index.html`
- `https://tu-usuario.github.io/mi-proyecto/about.html` → `about.html`
- `https://tu-usuario.github.io/mi-proyecto/contact.html` → `contact.html`

---

## Notas adicionales

- Asegúrate de que el valor de `base` en la configuración de Vite corresponde al directorio base de tu proyecto en GitHub Pages como `base: /mi-proyecto/'`. Si no estás seguro, usa `base: './'` para rutas relativas.
- Si estás utilizando GitHub Actions para automatizar el despliegue, asegúrate de configurar correctamente el flujo de trabajo para incluir todos los archivos de la carpeta de salida (`docs` o `dist`).

¡Y eso es todo! Ahora puedes manejar múltiples archivos HTML en tu proyecto de Vite y desplegarlos en GitHub Pages.
