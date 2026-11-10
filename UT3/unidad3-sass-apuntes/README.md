# Proyecto Sass con Vite

Proyecto de partida para aprender a estilar con **Sass (SCSS)** en HTML vanilla, sin React. Vite compila los archivos `.scss`, recarga el navegador al guardar y, al construir, une todo en **un solo CSS**.

## Arranque rápido

Requisitos: Node.js 20.19 o superior (o 22.12 o superior) y npm.

```bash
npm install        # instala vite y sass
npm run dev        # servidor de desarrollo con recarga automática
npm run build      # genera la versión final en dist/
npm run preview    # sirve dist/ para probar la versión final
```

Después de `npm run build`, abre `dist/assets/`: hay un único archivo CSS con todo fusionado y minificado.

## Estructura

```
├── BEM.md                ← guía de la convención de nombres de clases
├── index.html            ← página de práctica con el HTML de ejemplo
├── package.json
└── src/
    ├── main.js           ← import './styles/main.scss'
    └── styles/
        ├── _variables.scss  ← valores: colores, fuentes, espaciados, breakpoints
        ├── _mixins.scss     ← herramientas reutilizables
        ├── _globals.scss    ← reset y estilos base del documento
        ├── _layout.scss     ← estructura de la página
        ├── _components.scss ← piezas reutilizables (card, button...)
        └── main.scss        ← el único que se compila: los une
```

Cada archivo tiene **una sola responsabilidad**. Los dos primeros no generan CSS (son herramientas); los tres siguientes sí.

| Si es... | Va en... |
| --- | --- |
| Un valor (color, medida, fuente, breakpoint) | `_variables.scss` |
| Un patrón reutilizable o una media query | `_mixins.scss` |
| Algo que afecta a todo el documento (`body`, `a`, reset) | `_globals.scss` |
| La estructura de la página (contenedor, cabecera, rejilla) | `_layout.scss` |
| Una pieza con nombre propio (tarjeta, botón, formulario) | `_components.scss` |

---

# Apuntes de Sass

## 1. Qué es Sass y por qué usarlo

Sass (Syntactically Awesome Style Sheets) es un preprocesador de CSS: escribes en un lenguaje con más recursos que CSS y una herramienta lo convierte (compila) en un archivo `.css` normal que entiende cualquier navegador. El navegador nunca ve Sass, solo el CSS resultante.

Sass resuelve los problemas típicos del CSS plano en proyectos grandes:

- **Repetición**: el mismo color o espaciado escrito en cien sitios. Con variables se cambia en uno.
- **Un único archivo enorme**: con parciales se reparte el código en archivos pequeños, cada uno con su responsabilidad.
- **Selectores largos y repetidos**: con anidamiento se escriben una vez y se compilan completos.
- **Código copiado y pegado**: con mixins se escribe un bloque reutilizable una sola vez.

Existen dos sintaxis. Aquí usamos **SCSS** (extensión `.scss`), que es CSS válido con extras, así que cualquier CSS que ya conozcas funciona tal cual. La otra, la sintaxis indentada (`.sass`), prescinde de llaves y punto y coma y casi nadie la usa hoy.

La implementación oficial y la que se usa hoy es **Dart Sass** (el paquete `sass` de npm). Otras antiguas, como LibSass o Node Sass, están obsoletas.

## 2. Compilar a mano (la anécdota)

Antes de que existieran los bundlers, y todavía hoy para pruebas rápidas, Sass se compilaba a mano desde la terminal. Sirve para entender qué ocurre por debajo, aunque en este proyecto usamos Vite.

1. Instalar Sass globalmente (necesita Node.js): `npm install -g sass`
2. Escribir un archivo, por ejemplo `styles/main.scss`.
3. Compilarlo: `sass styles/main.scss css/main.css`
4. Enlazar el resultado en el HTML: `<link rel="stylesheet" href="css/main.css">`

Para no repetir el comando cada vez que guardas, existe el modo vigilante, que recompila solo cuando cambia algún archivo:

```bash
sass --watch styles/main.scss:css/main.css
```

Otras opciones útiles: `--style=compressed` genera el CSS minificado, y `--no-source-map` evita crear el archivo `.map`.

El inconveniente es evidente: hay que tener la terminal abierta, recordar el comando y el navegador no se recarga solo. Por eso, en cuanto el proyecto crece, conviene delegar todo esto en una herramienta como Vite.

## 3. Compilar con Vite

Vite entiende Sass sin configuración: solo hay que instalar el paquete `sass` como dependencia de desarrollo (ya está en el `package.json`). A partir de ahí, compila los `.scss`, recarga el navegador al guardar y, al construir para producción, deja todo fusionado en un único CSS.

Así se montaría desde cero:

```bash
npm create vite@latest mi-proyecto -- --template vanilla
cd mi-proyecto
npm install
npm install -D sass
```

Se crea la carpeta `src/styles/` con los archivos del apartado 9 y se importa el archivo principal desde el JavaScript de entrada (`src/main.js`):

```js
import './styles/main.scss'
```

- `npm run dev` arranca el servidor de desarrollo. Cada cambio en cualquier parcial se refleja al instante en el navegador.
- `npm run build` genera la versión final. En `dist/assets/` aparece un solo archivo CSS, ya compilado, unido y minificado, que Vite enlaza en el HTML por nosotros.

La idea clave: **escribimos muchos archivos pequeños, el navegador recibe uno solo**. Los parciales existen para organizarnos nosotros, no para el navegador.

## 4. Variables

Una variable guarda un valor (color, medida, fuente...) para reutilizarlo. Se declara con `$` y se usa por su nombre. Si cambia el valor, cambia en todo el proyecto.

```scss
$color-primary: #3a6ea5;
$color-text: #222;
$space-4: 1rem;
$font-base: "Inter", sans-serif;

.button {
  background: $color-primary;
  padding: $space-4;
  font-family: $font-base;
}
```

Compila a:

```css
.button {
  background: #3a6ea5;
  padding: 1rem;
  font-family: "Inter", sans-serif;
}
```

Buenas costumbres con los nombres: describir **el papel** del valor y no su aspecto (`$color-primary` mejor que `$azul`), y usar una escala para los espaciados (`$space-2`, `$space-4`, `$space-6`).

**Variables de Sass frente a custom properties de CSS**

| | Variable Sass (`$color`) | Custom property CSS (`--color`) |
| --- | --- | --- |
| Cuándo se resuelve | Al compilar | En el navegador, en tiempo real |
| Llega al navegador | No, se sustituye por el valor | Sí, queda en el CSS |
| Se puede cambiar con JavaScript o por tema | No | Sí |
| Sirve dentro de funciones y cálculos de Sass | Sí | No directamente |

Las dos se complementan. Un patrón habitual es definir los valores en Sass y publicarlos como custom properties para poder cambiarlos en tiempo de ejecución (por ejemplo, un tema oscuro):

```scss
:root {
  --color-primary: #{$color-primary};
}
```

La construcción `#{...}` se llama interpolación: inserta el valor de una variable de Sass dentro de un texto o selector.

## 5. Anidamiento de reglas

En CSS hay que repetir el selector padre en cada regla. En Sass se escriben las reglas dentro de otras y el compilador construye los selectores completos.

```scss
.nav {
  display: flex;

  a {
    color: $color-text;
    text-decoration: none;
  }

  li {
    margin-right: 1rem;
  }
}
```

Compila a:

```css
.nav { display: flex; }
.nav a { color: #222; text-decoration: none; }
.nav li { margin-right: 1rem; }
```

**El símbolo `&`** representa el selector padre. Sirve para pseudoclases, modificadores y para pegar texto al nombre de la clase:

```scss
.button {
  background: $color-primary;

  &:hover { filter: brightness(0.9); }
  &:disabled { opacity: 0.5; }
  &--secondary { background: transparent; }   // .button--secondary
  &__icon { margin-right: 0.5rem; }            // .button__icon
}
```

**Media queries anidadas**: se escriben dentro de la regla a la que afectan, sin salir a otro bloque:

```scss
.card {
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
}
```

**Advertencia importante**: anidar es cómodo, pero un anidamiento profundo genera selectores enormes, difíciles de sobrescribir y pegados a la estructura del HTML. Regla práctica: **no más de 2 o 3 niveles**. Si te hace falta más, probablemente conviene dar una clase propia al elemento.

## 6. Mixins

Un mixin es un bloque de estilos reutilizable. Se define con `@mixin` y se usa con `@include`. Es la forma de no copiar y pegar el mismo conjunto de declaraciones.

```scss
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero {
  @include flex-center;
  min-height: 50vh;
}
```

**Con argumentos y valores por defecto**: los mixins aceptan parámetros, igual que una función.

```scss
@mixin card-shadow($blur: 8px, $opacity: 0.15) {
  box-shadow: 0 2px $blur rgba(0, 0, 0, $opacity);
}

.card { @include card-shadow; }              // usa los valores por defecto
.modal { @include card-shadow(24px, 0.3); }  // valores propios
```

**Con `@content`**: el mixin recibe un bloque de estilos y lo coloca donde se indica. Es la base de los mixins para media queries, probablemente el más útil de todos:

```scss
$breakpoints: (
  sm: 576px,
  md: 768px,
  lg: 1024px,
);

@mixin respond($name) {
  @media (min-width: map.get($breakpoints, $name)) {
    @content;
  }
}

.card {
  padding: 1rem;

  @include respond(md) {
    padding: 2rem;
  }
}
```

El ejemplo usa un *map* (ver apartado 7), y para `map.get` hay que cargar el módulo con `@use "sass:map";` al principio del archivo.

**Cuándo usar un mixin**: cuando varias reglas comparten un patrón de declaraciones o cuando necesitas parámetros. Si solo quieres reutilizar un valor suelto, es mejor una variable.

## 7. Otras herramientas principales

**Operaciones matemáticas.** Sass calcula con `+`, `-`, `*` y `%`. Para dividir se usa el módulo `math`, porque la barra `/` ya no hace de división:

```scss
@use "sass:math";

$container: 1200px;

.col-3 { width: math.div($container, 4); }   // 300px
.gap   { margin: $space-4 * 2; }             // 2rem
```

**Funciones propias.** Devuelven un valor, a diferencia de un mixin, que devuelve estilos:

```scss
@function rem($px, $base: 16) {
  @return math.div($px, $base) * 1rem;
}

h1 { font-size: rem(32); }   // 2rem
```

**Maps.** Son listas de pares clave-valor, ideales para colores, breakpoints o tamaños:

```scss
@use "sass:map";

$colors: (
  primary: #3a6ea5,
  success: #2e7d32,
  danger:  #c62828,
);

.alert { color: map.get($colors, danger); }
```

**Bucles con `@each`.** Generan varias reglas a partir de un map o una lista, sin repetir código:

```scss
@each $name, $value in $colors {
  .text-#{$name} { color: $value; }
}
// genera .text-primary, .text-success y .text-danger
```

**Condicionales con `@if`.**

```scss
@mixin theme($mode) {
  @if $mode == dark {
    background: #111;
    color: #eee;
  } @else {
    background: #fff;
    color: #222;
  }
}
```

**`@extend`: mejor evitarlo.** Permite que un selector herede los estilos de otro, pero agrupa selectores de formas poco previsibles y complica la depuración. Un mixin o una clase compartida en el HTML resuelven casi siempre lo mismo con menos sorpresas.

**Comentarios.** `// comentario` solo existe en el `.scss` y no llega al CSS. `/* comentario */` sí se conserva en el CSS generado.

## 8. Parciales y @use

Lo que más ayuda a organizar un proyecto es repartir el código en varios archivos. Sass lo hace con **parciales** y la regla **`@use`**.

**Parciales.** Un archivo cuyo nombre empieza por guion bajo (`_variables.scss`) es un parcial: Sass sabe que no debe compilarlo por separado, solo servir de pieza para otro archivo. Los que no llevan guion bajo (`main.scss`) son los puntos de entrada que se compilan.

**`@use`.** Carga otro archivo dentro del actual. Al cargarlo se escribe el nombre sin guion bajo ni extensión:

```scss
@use "variables";

.button {
  background: variables.$color-primary;   // se accede con el nombre del archivo
}
```

Por defecto, lo que viene de un archivo se usa con su nombre como prefijo (`variables.$color-primary`). Se puede acortar con `as`, o quitar el prefijo con `as *`:

```scss
@use "variables" as v;
@use "mixins" as m;

.card {
  padding: v.$space-4;
  @include m.respond(md) { padding: v.$space-6; }
}
```

**Ámbito.** Con `@use`, cada archivo ve solo lo que importa explícitamente. Si `_layout.scss` necesita las variables, debe escribir su propio `@use "variables"`: no las hereda de `main.scss`. Es un poco más de escritura, pero siempre se sabe de dónde viene cada cosa.

**Dos detalles que conviene saber**

- El CSS de un parcial se incluye **una sola vez**, aunque lo cargues desde varios archivos. Las variables y mixins no generan CSS, así que cargarlos muchas veces no tiene coste.
- `@use` debe ir **al principio** del archivo, antes de cualquier regla.

**`@forward`.** Reexporta un archivo para que otro lo cargue de paso. Es útil cuando se crea un archivo índice que reúne varios (`@forward "variables"; @forward "mixins";`). En un proyecto pequeño no hace falta.

**Por qué no `@import`.** Era la forma antigua de unir archivos. Lo volcaba todo en un ámbito global, lo que provocaba choques de nombres y obligaba a adivinar de qué archivo venía cada variable. Está deprecado y se eliminará del todo en una versión futura de Sass, así que en proyectos nuevos no debe usarse.

## 9. Los 5 parciales y main.scss

Todo el código está ya en `src/styles/`. Resumen de lo que hace cada archivo:

- **`_variables.scss`**: la única fuente de verdad de los valores. Nada de colores ni medidas sueltas en el resto de archivos.
- **`_mixins.scss`**: `respond()` (media query mobile first con `@content`) y `flex-center`.
- **`_globals.scss`**: reset, estilos base y las custom properties de CSS publicadas en `:root`.
- **`_layout.scss`**: `.container`, `.site-header`, `.site-footer` y la rejilla `.grid` (1, 2 y 3 columnas según el ancho).
- **`_components.scss`**: `.card` y `.button` con nombres BEM (`bloque__elemento--modificador`) para evitar choques entre clases globales. Todo sobre la convención en [BEM.md](BEM.md).
- **`main.scss`**: el único archivo que importa Vite. Lista los parciales en el orden en que debe aparecer su CSS, de lo más general a lo más específico:

```scss
@use "variables";   // sin CSS, solo documenta qué hay
@use "mixins";      // sin CSS
@use "globals";     // 1. reset y base
@use "layout";      // 2. estructura
@use "components";  // 3. piezas, lo más específico al final
```

Cuando el proyecto crezca, el siguiente paso natural es partir `_components.scss` en una carpeta `components/` con un archivo por pieza (`_card.scss`, `_button.scss`) y sumarlos en `main.scss`. Nada más cambia.

## 10. Buenas prácticas para proyectos organizados

**Reglas que evitan problemas**

- **Un valor, un sitio.** Si un color o una medida aparece escrito dos veces, debería ser una variable.
- **Nombres por papel, no por aspecto**: `$color-primary`, no `$azul`.
- **BEM para las clases**: `bloque__elemento--modificador`. Como las clases son globales, el prefijo del bloque evita choques. Guía completa con reglas, ejemplos y ejercicio en [BEM.md](BEM.md).
- **Estilar por clase, no por etiqueta** dentro de los componentes. `.card__title` es más seguro que `.card h2`.
- **Máximo 2 o 3 niveles de anidamiento.** El Sass anidado debe leerse como el CSS que generaría.
- **Mobile first**: estilos base para pantalla pequeña y `@include respond(md)` para ampliar. Es más corto y más fácil de mantener.
- **`@use`, nunca `@import`.**
- **Evitar `@extend`**. Un mixin o una clase compartida son más predecibles.
- **Comentarios con `//`** para explicar el porqué de algo no obvio; no llegan al CSS final.

**Errores frecuentes**

- *"Undefined variable"*: falta el `@use "variables" as v;` en ese parcial. Con `@use` nada se hereda.
- *Usar la variable sin prefijo*: con `as v` hay que escribir `v.$color-primary`, no `$color-primary`.
- *Olvidar el guion bajo en el nombre del archivo*: con `@use` el archivo seguirá funcionando, pero ya no se distingue como parcial y, si compilas una carpeta entera desde la terminal, Sass generará un CSS suelto para él.
- *Los cambios no se ven*: comprobar que `main.js` importa `main.scss` y que el servidor `npm run dev` sigue en marcha.
- *Dividir con `/`*: usar `math.div`, con `@use "sass:math";`.

## 11. Chuleta y ejercicio

| Concepto | Sintaxis | Para qué sirve |
| --- | --- | --- |
| Variable | `$nombre: valor;` | Guardar un valor y reutilizarlo |
| Anidamiento | `.a { .b { ... } }` | Escribir selectores sin repetir el padre |
| Selector padre | `&:hover`, `&__hijo`, `&--variante` | Pseudoclases, BEM y modificadores |
| Mixin | `@mixin x { ... }` y `@include x;` | Reutilizar un bloque de estilos |
| Mixin con bloque | `@content` | Mixins como `respond(md) { ... }` |
| Cargar un archivo | `@use "archivo" as a;` | Unir parciales y acceder con `a.$var` |
| Interpolación | `#{$var}` | Meter una variable en texto o selectores |
| Map | `map.get($mapa, clave)` | Agrupar valores por nombre |
| Bucle | `@each $k, $v in $mapa { ... }` | Generar reglas repetidas |
| Condicional | `@if ... { } @else { }` | Elegir estilos según un valor |
| Función | `@function f($x) { @return ...; }` | Calcular y devolver un valor |
| División | `math.div(a, b)` con `@use "sass:math";` | Dividir sin usar `/` |
| Comentario | `// texto` | Nota que no llega al CSS |

### Ejercicio práctico

1. Arrancar este proyecto con `npm install` y `npm run dev`, y cambiar `$color-primary` en `_variables.scss` para ver cómo se actualiza todo.
2. Añadir en `_variables.scss` un map `$status-colors` con `success` y `danger`.
3. Crear en `_components.scss` un componente `.alert` y generar con `@each` sus variantes `.alert--success` y `.alert--danger`.
4. Escribir un mixin `truncate` (texto en una línea con puntos suspensivos) en `_mixins.scss` y usarlo en `.card__title`.
5. Hacer que `.grid` pase a 4 columnas desde el breakpoint `lg`.
6. Ejecutar `npm run build`, abrir el CSS de `dist/assets/` y comprobar que es un solo archivo con todo fusionado.

Criterio de revisión: ningún color ni medida escrito suelto fuera de `_variables.scss`, y ningún anidamiento de más de 3 niveles.
