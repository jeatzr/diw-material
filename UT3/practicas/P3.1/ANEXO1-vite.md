# **ANEXO I: Creación y Configuración del Proyecto con Vite y SASS**

## **1. Crear el Proyecto con Vite Vanilla JS**

Sigue estos pasos para configurar tu proyecto con **Vite**:

1. **Crea el proyecto**:  
   Abre una terminal y ejecuta:

   ```bash
   npm create vite@latest my-project
   cd my-project
   npm install
   ```

   Cuando se te pregunte por la plantilla, selecciona **`vanilla`**.

2. **Inicia el servidor de desarrollo**:  
   Una vez configurado, lanza el servidor de desarrollo con:

   ```bash
   npm run dev
   ```

   Esto abrirá tu proyecto en el navegador. Los cambios se reflejan automáticamente gracias a la recarga en caliente de Vite.

---

## **2. Instalar SASS como Dependencia**

Para habilitar la compilación de SASS a CSS en tu proyecto, instala la dependencia de desarrollo **sass**:

```bash
npm install -D sass
```

Esto asegura que Dart Sass esté disponible para que Vite procese correctamente los archivos SCSS.

---

## **3. Organización del Proyecto**

Organiza tu directorio `/src` de la siguiente manera para mantener un flujo de trabajo limpio y estructurado:

```
src/
├── styles/
│   ├── _variables.scss    # Variables globales
│   ├── _mixins.scss       # Mixins reutilizables
│   ├── _globals.scss      # Archivo central que reenvía variables y mixins
│   ├── _layout.scss       # Estilos generales (e.g., grid, contenedores)
│   ├── _header.scss       # Estilos específicos del header
│   ├── _footer.scss       # Estilos específicos del footer
│   └── main.scss          # Archivo principal que importa los parciales
├── assets/                # Recursos estáticos como imágenes o íconos
├── main.js                # Archivo principal JS
├── index.html             # Entrada principal del proyecto
```

---

## **4. Configurar el Archivo `globals.scss`**

El archivo `_globals.scss` actúa como un punto central para reenviar variables y mixins que serán usados en diferentes partes del proyecto.

**Contenido de `_globals.scss`:**

```scss
@forward "variables";
@forward "mixins";
```

---

## **5. Uso de `@use` en Archivos SCSS**

Con Dart Sass moderno, cada archivo que necesite acceder a las variables o mixins debe usar `@use` explícitamente. Esto asegura modularidad y evita problemas de carga circular.

### **Ejemplo de Uso en `_layout.scss`:**

```scss
@use "globals" as *; // Importa todo desde globals

.container {
  padding: $base-spacing;
  @include flex-center;
}
```

### **Ejemplo de Uso en `_header.scss`:**

```scss
@use "globals" as *;

header {
  background-color: $primary-color;
  @include flex-column;
}
```

---

## **6. Configurar el Archivo Principal SCSS**

En la carpeta `/styles`, crea un archivo `main.scss` que importe todos los parciales necesarios:

```scss
@use "globals" as *;
@use "layout";
@use "header";
@use "footer";
```

### **Importar `main.scss` en `main.js`**

Abre el archivo `main.js` en el directorio raíz y agrega:

```javascript
import "./styles/main.scss";
```

Esto le indicará a Vite que compile el archivo SCSS y lo convierta en CSS.

---

## **7. Configuración de Vite para Usar `/src` como Raíz**

Edita o crea el archivo `vite.config.js` para personalizar el comportamiento de Vite:

```javascript
import { defineConfig } from "vite";

export default defineConfig({
  root: "./src", // Cambia la raíz del proyecto a "src"
  build: {
    outDir: "../docs", // Los archivos construidos irán a la carpeta "docs"
  },
});
```

### **Detalles de la Configuración:**

- **`root: "./src"`**: Cambia la raíz del proyecto a la carpeta `src`. Esto significa que Vite buscará el archivo `index.html` dentro de `src` en lugar de en la raíz.
- **`build.outDir: "../docs"`**: Los archivos generados al construir el proyecto se colocarán en la carpeta `docs`, útil para desplegar en plataformas como GitHub Pages.

---

## **8. Ejecutar y Compilar el Proyecto**

### **Modo Desarrollo**

Para trabajar en el proyecto, inicia el servidor de desarrollo:

```bash
npm run dev
```

### **Modo Producción**

Genera una versión optimizada del proyecto con:

```bash
npm run build
```

Esto creará la carpeta `docs` que contendrá:

- Un archivo CSS único generado desde `main.scss`.
- Recursos optimizados para ser desplegados en producción.

---

## **Resumen**

1. Crea el proyecto con `npm create vite@latest`.
2. Instala SASS como dependencia de desarrollo con `npm install -D sass`.
3. Organiza las carpetas del proyecto en `/src`.
4. Configura el archivo `_globals.scss` para reenviar variables y mixins.
5. Usa `@use "globals" as *;` en cada parcial que necesite acceso a variables o mixins.
6. Configura Vite para usar `src` como raíz y `docs` como carpeta de salida.
7. Ejecuta `npm run dev` para desarrollo y `npm run build` para producción.

Con esta configuración, tendrás un entorno moderno, limpio y modular, listo para desarrollo y despliegue.
