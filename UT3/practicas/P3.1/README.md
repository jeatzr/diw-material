# **Práctica 3.1: Maquetación Responsive con SASS y Vite**

> Diseño de Interfaces. S2DAW.

## **Objetivo**

Crear una página web responsive a partir del diseño de las dos páginas (landing y formulario) realizado en **Figma**, implementando SASS con **Vite**. Los alumnos deberán aplicar conceptos avanzados de SASS, como variables, anidamiento, mixins, y media queries, para realizar la maquetación.

---

## **Instrucciones**

### **1. Diseñar la versión móvil en Figma**

1. A partir del diseño de escritorio de las dos páginas ya realizado en una práctica anterior:
   - Diseñar la versión móvil o estrecha siguiendo principios de diseño responsive. El diseño móvil se hará en base a las variables de Figma ya definidas y también puede generar nuevas variables.
   - Realizar los cambios necesarios en el sistema de diseño para que de cabida a la versión móvil.
   - Exportar los recursos gráficos necesarios y las variables en versión SASS para la implementación.

---

### **2. Configuración del Proyecto**

1. Crear el proyecto utilizando Vite. Sigue las instrucciones del archivo **[ANEXO1-vite.md](ANEXO1-vite.md)**.
2. Organiza las carpetas y archivos del proyecto de la siguiente manera:

```
src/
├── styles/
│   ├── _variables.scss
│   ├── _mixins.scss
│   ├── _header.scss
│   ├── _footer.scss
│   ├── _layout.scss
│   └── main.scss
├── assets/
│   ├── imágenes, íconos, etc.
├── main.js
├── index.html
```

### **3. Implementación**

#### **HTML**

- Estructura el contenido con etiquetas semánticas, como `header`, `main`, `footer`.
- Utiliza las clases necesarias para identificar cada sección.

#### **SASS**

1. **Variables**:

   - Pegar las variables exportadas de Figma en formato SASS al fichero `_variables.scss`.
   - Define otras variables a mano si fuese necesario pero siempre en dicho archivo.
   - Ejemplo:

   ```scss
   $primary-color: #3498db;
   $secondary-color: #2ecc71;
   $font-stack: "Roboto", sans-serif;
   ```

2. **Mixins**:

   - Crea al menos un mixin en `_mixins.scss` para estilos reutilizables.
   - Ejemplo:

   ```scss
   @mixin button($bg-color, $text-color) {
     background-color: $bg-color;
     color: $text-color;
     padding: 1rem;
     border-radius: 5px;
     cursor: pointer;
   }
   ```

3. **Breakpoints y Media Queries**:

   - Define un gestor de media queries en `_mixins.scss` utilizando mapas y mixins.
   - Ejemplo:

   ```scss
   $breakpoints: (
     "small": (
       max-width: 599px,
     ),
     "medium": (
       min-width: 600px,
       max-width: 1199px,
     ),
     "large": (
       min-width: 1200px,
     ),
   );

   @mixin respond-to($breakpoint) {
     $raw-query: map-get($breakpoints, $breakpoint);

     @if $raw-query {
       $query: "";
       @each $prop, $value in $raw-query {
         $query: #{$query} and (#{$prop}: #{$value});
       }

       @media #{$query} {
         @content;
       }
     } @else {
       @error 'No value found for `#{$breakpoint}`. '
                + 'Please make sure it is defined in `$breakpoints` map.';
     }
   }
   ```

4. **Anidamiento**:

   - Usa anidamiento para organizar estilos relacionados dentro de cada componente.
   - Ejemplo (en `_header.scss`):

   ```scss
   header {
     background-color: $primary-color;

     nav {
       ul {
         list-style: none;

         li {
           display: inline-block;

           a {
             text-decoration: none;
             color: $secondary-color;

             &:hover {
               color: $primary-color;
             }
           }
         }
       }
     }
   }
   ```

5. **Compilación SCSS**:
   - Usa el archivo principal `main.scss` para importar todos los parciales: (usar la directiva `@use` en vez de la deprecada `@import`)
     ```scss
     @use "layout";
     @use "header";
     ...
     ```
   - Consulta el archivo **[ANEXO2-variables-sass](ANEXO2-variables-sass.md)** para los detalles.

---

### **4. Entrega**

1. Entregar el proyecto completo con la estructura generada por Vite en un repositorio de GitHub.
2. Dicho repositorio contendrá la carpeta `src` con el código organizado como se pide en la práctica.
3. Dicho repositorio contendrá la carpeta `docs` la cual seleccionaremos para poder servir el sitio web en GitHub Pages. En Vite, la carpeta de salida predeterminada para los archivos generados en la compilación es `dist`. Si necesitas cambiar esta carpeta (por ejemplo, a `docs` para que sea compatible con GitHub Pages), puedes hacerlo configurando el parámetro `build.outDir` en el archivo `vite.config.js`.

   ```js
   ///vite.config.js
   import { defineConfig } from "vite";
   export default defineConfig({
     build: {
       outDir: "docs", // Cambia la carpeta de salida a "docs"
     },
   });
   ```

4. Si tu sitio web consta de más de un HTML tendrás que darle la configuración necesaria según se explica en el [ANEXO IV](ANEXO4-varios-html-y-vite.md)

---

## **Criterios de Evaluación**

| **Categoría**                    | **Criterios**                                                                                   | **Puntuación Máxima** |
| -------------------------------- | ----------------------------------------------------------------------------------------------- | --------------------- |
| **1. Organización del Proyecto** |                                                                                                 | **10 puntos**         |
|                                  | - Estructura del proyecto clara y ordenada (carpetas `/src`, `/styles`, `/assets`).             | 2 puntos              |
|                                  | - División del código SASS en parciales (`_variables.scss`, `_mixins.scss`, etc.).              | 3 puntos              |
|                                  | - Configuración correcta de Vite y funcionalidad de la compilación automática de SASS.          | 5 puntos              |
| **2. HTML Semántico**            |                                                                                                 | **10 puntos**         |
|                                  | - Uso de etiquetas semánticas (`header`, `main`, `footer`, etc.) para estructurar el contenido. | 5 puntos              |
|                                  | - Código HTML limpio, indentado y sin errores.                                                  | 5 puntos              |
| **3. Uso de SASS**               |                                                                                                 | **35 puntos**         |
|                                  | - Uso correcto de **variables** para colores, fuentes, tamaños comunes (mínimo 3 variables).    | 5 puntos              |
|                                  | - Implementación de al menos **un mixin** funcional y reutilizable.                             | 5 puntos              |
|                                  | - Uso adecuado de **anidamiento** para estructurar estilos relacionados.                        | 5 puntos              |
|                                  | - Uso de **listas o mapas** en SASS para gestionar datos repetidos (mínimo 1 ejemplo).          | 5 puntos              |
|                                  | - Aplicación correcta de **media queries** para diseño responsive.                              | 10 puntos             |
|                                  | - Código SASS limpio, organizado y sin redundancias.                                            | 5 puntos              |
| **4. Diseño Responsive**         |                                                                                                 | **25 puntos**         |
|                                  | - Adaptación fiel del diseño de Figma para **escritorio** (desktop).                            | 10 puntos             |
|                                  | - Adaptación fiel del diseño de Figma para **móvil** (mobile).                                  | 10 puntos             |
|                                  | - Manejo adecuado de la reorganización del contenido en pantallas pequeñas.                     | 5 puntos              |
| **5. Funcionalidad y Entrega**   |                                                                                                 | **10 puntos**         |
|                                  | - El proyecto se ejecuta correctamente en el servidor local de Vite.                            | 5 puntos              |
|                                  | - Entrega completa con todos los archivos así como de la carpeta                                | 5 puntos              |
| **6. Creatividad y Extensiones** |                                                                                                 | **10 puntos **        |
|                                  | - Uso de animaciones, transiciones o efectos para enriquecer la experiencia del usuario.        | 5 puntos (Opcional)   |
|                                  | - Publicación del proyecto en una plataforma como GitHub Pages.                                 | 5 puntos              |

**Puntuación Total Máxima: 100 puntos**

---

### **Anexos**

- **[ANEXO1-vite](ANEXO1-vite.md)**: Cómo crear el proyecto Vite y organizar las carpetas.
- **[ANEXO2-variables-sass](ANEXO2-variables-sass.md)**: Detalles sobre cómo compilar múltiples archivos SCSS en uno solo.
- **[ANEXO3-layout](ANEXO3-layout.md)**: Detalle de qué debe contener el fichero `_layout.sass`.
- **[ANEXO IV](ANEXO4-varios-html-y-vite.md)**: Cómo tener hacer que VITE compile varios HTML.
