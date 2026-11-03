# Manual: modo oscuro con variables CSS

Dos formas de hacerlo, de menos a más control:

1. **Modo fácil (automático)**: CSS puro con `@media (prefers-color-scheme: dark)`.
2. **Modo con control total**: `data-theme` + JavaScript + botón, respetando la preferencia del sistema.

La base de ambos es la misma: **variables CSS** en dos niveles.

---

## 0. Base común: primitivas y semánticas

- **Primitivas**: los colores «en bruto». No cambian entre claro y oscuro.
- **Semánticas**: el *rol* del color (fondo, texto…). Estas **sí cambian** según el tema.

```css
:root {
  /* primitivas */
  --color-gris-100: #f2f6f7;
  --color-tinta-100: #c9d3e6;
  --color-tinta-900: #14213d;

  /* semánticas (tema claro por defecto) */
  --color-fondo: var(--color-gris-100, #f2f6f7);
  --color-texto-principal: var(--color-tinta-900, #14213d);
}
```

> El segundo valor de `var(--x, valor)` es el **fallback**: se usa si `--x` no está definida. Es lo que exporta el plugin variables2css con la opción *add fallback*.

Y siempre se usan las semánticas en los componentes:

```css
body {
  background: var(--color-fondo);
  color: var(--color-texto-principal);
}
```

Añade también, para que formularios y barras de scroll se adapten:

```css
:root { color-scheme: light dark; }
```

---

## 1. Modo fácil: automático con `@media`

El navegador pregunta al sistema operativo si el usuario prefiere oscuro. **Sin JavaScript.**

```css
:root {
  --color-fondo: var(--color-gris-100, #f2f6f7);
  --color-texto-principal: var(--color-tinta-900, #14213d);
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-fondo: var(--color-tinta-900, #14213d);
    --color-texto-principal: var(--color-tinta-100, #c9d3e6);
  }
}
```

**Pasos**

1. Define primitivas y semánticas del tema claro en `:root`.
2. Redefine **solo las semánticas** dentro del `@media`.
3. Usa las semánticas en todo el CSS.

**Cómo probarlo**: cambia el tema de tu sistema, o en Chrome DevTools → `Ctrl+Shift+P` → «Emulate CSS prefers-color-scheme: dark».

**Ventajas**: muy simple, cero JS. **Limitación**: el usuario no puede elegir desde tu web.

---

## 2. Modo con control total: `data-theme` + JS

Aquí el tema lo decide un atributo en `<html>`:

```html
<html data-theme="dark">
```

### 2.1 CSS

Hay que cubrir tres casos: sin elección (manda el sistema), elección «claro» y elección «oscuro».

```css
:root {
  color-scheme: light dark;
  --color-fondo: var(--color-gris-100, #f2f6f7);
  --color-texto-principal: var(--color-tinta-900, #14213d);
}

/* Sin elección manual: manda el sistema */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --color-fondo: var(--color-tinta-900, #14213d);
    --color-texto-principal: var(--color-tinta-100, #c9d3e6);
  }
}

/* Elección manual: oscuro */
:root[data-theme="dark"] {
  color-scheme: dark;
  --color-fondo: var(--color-tinta-900, #14213d);
  --color-texto-principal: var(--color-tinta-100, #c9d3e6);
}

/* Elección manual: claro */
:root[data-theme="light"] {
  color-scheme: light;
}
```

### 2.2 HTML

```html
<button id="tema" type="button">Cambiar tema</button>
```

### 2.3 JavaScript

```js
const root = document.documentElement;
const boton = document.getElementById("tema");

// 1. Recuperar la elección guardada (si existe)
try {
  const guardado = localStorage.getItem("tema");
  if (guardado) root.dataset.theme = guardado;
} catch (e) {}

// 2. Saber qué tema se está viendo ahora
function temaActual() {
  return (
    root.dataset.theme ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );
}

// 3. Alternar y guardar
boton.addEventListener("click", () => {
  const nuevo = temaActual() === "dark" ? "light" : "dark";
  root.dataset.theme = nuevo;
  try { localStorage.setItem("tema", nuevo); } catch (e) {}
});
```

**Opcional: volver al tema del sistema**

```js
function usarSistema() {
  delete root.dataset.theme;
  try { localStorage.removeItem("tema"); } catch (e) {}
}
```

### 2.4 Evitar el «parpadeo» al cargar

Si el script se ejecuta tarde, se ve un instante el tema claro. Solución: pon la lectura del tema en un `<script>` **dentro del `<head>`**, antes del CSS visible:

```html
<script>
  try {
    const t = localStorage.getItem("tema");
    if (t) document.documentElement.dataset.theme = t;
  } catch (e) {}
</script>
```

---

## 3. Comparativa

| | `@media` | `data-theme` + JS |
|---|---|---|
| Quién decide | El sistema del usuario | El usuario (botón) o el sistema |
| Necesita JS | No | Sí |
| Recuerda la elección | No aplica | Sí (`localStorage`) |
| Complejidad | Baja | Media |
| Ideal para | Aprender, webs sencillas | Proyectos reales con botón de tema |

## 4. Errores típicos

- **Light y dark en el mismo `:root`**: el segundo pisa al primero. Sepáralos con `@media` o `[data-theme]`.
- **Redefinir también las primitivas**: solo hay que cambiar las semánticas.
- **Usar colores sueltos (`#fff`) en los componentes**: no cambiarán con el tema. Usa siempre `var(--semántica)`.
- **Olvidar `color-scheme`**: inputs y scrollbars se verán claros en tema oscuro.
- **Contraste insuficiente**: comprueba el texto sobre el fondo en ambos temas (mínimo 4.5:1).
