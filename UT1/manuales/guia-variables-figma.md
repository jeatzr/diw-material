# Guía completa de variables en Figma

De qué son y para qué sirven, a cómo organizarlas en primitivas y semánticas y exportarlas a CSS.

Las escalas de espaciado, tipografía y color que se usan como ejemplo salen de *Refactoring UI* (Adam Wathan y Steve Schoger, cofundadores de Tailwind).

## Índice

1. [Qué es una variable](#1-qué-es-una-variable)
2. [Por qué usarlas](#2-por-qué-usarlas)
3. [Variables vs. estilos](#3-variables-vs-estilos)
4. [Anatomía: colecciones, grupos, modos y alias](#4-anatomía-colecciones-grupos-modos-y-alias)
5. [Tipos de variables](#5-tipos-de-variables)
6. [Scoping: limitar dónde se aplica cada variable](#6-scoping-limitar-dónde-se-aplica-cada-variable)
7. [Modos y theming](#7-modos-y-theming)
8. [Variables y código: code syntax y CSS](#8-variables-y-código-code-syntax-y-css)
9. [Variables en prototipos](#9-variables-en-prototipos)
10. [Cómo organizar: primitivas y semánticas](#10-cómo-organizar-primitivas-y-semánticas)
11. [Colección `Primitives`](#11-colección-primitives)
12. [Colección `Tokens`](#12-colección-tokens)
13. [Colecciones opcionales: `Density` y `Components`](#13-colecciones-opcionales-density-y-components)
14. [Nomenclatura](#14-nomenclatura)
15. [Migrar desde colecciones por categoría](#15-migrar-desde-colecciones-por-categoría)
16. [Limitaciones a tener en cuenta](#16-limitaciones-a-tener-en-cuenta)
17. [Ejemplos y recursos](#17-ejemplos-y-recursos)
18. [Checklist](#18-checklist)

---

## 1. Qué es una variable

Una **variable** en Figma es un valor con nombre que se puede reutilizar en muchas propiedades de un diseño: un color, un número (padding, radio, tamaño de fuente), un texto o un valor verdadero/falso.

En lugar de escribir `#2563EB` o `16` en cada elemento, aplicas una variable (`color/brand/default`, `space/4`). Si el valor cambia, se actualiza en todos los sitios donde se usa.

Las variables son el equivalente en Figma de los **design tokens**: decisiones de diseño (colores, espaciados, tipografía...) guardadas con nombre, para que diseño y código compartan el mismo vocabulario.

Dos rasgos las distinguen de un valor suelto:

- **Pueden referenciarse entre sí (alias).** Una variable puede apuntar a otra, lo que permite crear capas (primitivas → semánticas).
- **Pueden variar (modos).** Una misma variable puede tener valores distintos según el contexto: claro/oscuro, marca A/marca B, compacto/cómodo, idioma, etc.

---

## 2. Por qué usarlas

### Consistencia dentro de Figma

- **Una única fuente de verdad.** El azul de marca existe en un solo sitio.
- **Cambios globales en segundos.** Modificar un valor actualiza todo lo que lo usa.
- **Menos valores arbitrarios.** Si solo existen `space/2`, `space/4`, `space/6`, nadie improvisa un `13px`. Es la filosofía de *Refactoring UI*: escalas cerradas y definidas a mano.
- **Más fácil de auditar.** Un elemento con un valor suelto se distingue de uno enlazado a una variable.

### Theming y variantes sin duplicar trabajo

- Un diseño, varios modos: Light/Dark, marcas, densidades, idiomas.
- Cambias de modo en un frame y todo el contenido responde, sin mantener copias.

### Handoff y exportación a código

- Las variables pueden llevar su **nombre de código** (code syntax), por ejemplo `var(--color-text-primary)`, que se muestra al desarrollador.
- Pueden exportarse como **variables CSS**, JSON de design tokens, etc., mediante plugins o la API.
- Si diseño y código comparten nombres, desaparece la traducción manual (`space/4` en Figma = `--space-4` en CSS = `p-4` en Tailwind).

### Prototipado

- Las variables pueden alimentar condicionales, contadores y estados en prototipos (ver [sección 9](#9-variables-en-prototipos)).

---

## 3. Variables vs. estilos

Ambos coexisten, pero resuelven cosas distintas.

| | Variables | Estilos (styles) |
|---|---|---|
| Qué guardan | **Un solo valor** (un color, un número, un texto, un booleano) | **Combinaciones** de propiedades (un estilo de texto completo, un efecto de sombra) |
| Modos | Sí | No |
| Alias entre sí | Sí | No |
| Ejemplo | `font-size/base = 16` | Estilo de texto `body` (familia + tamaño + peso + interlineado) |

La práctica habitual: las **variables guardan los valores** y los **estilos los combinan**. Por ejemplo, un Text style `heading-md` cuyos tamaño, peso e interlineado están vinculados a variables. Los diseñadores aplican el estilo; el estilo obtiene sus valores de las variables.

---

## 4. Anatomía: colecciones, grupos, modos y alias

### Colecciones

Una **colección** es un contenedor de variables relacionadas. Define qué **modos** tienen sus variables (todas las variables de una colección comparten los mismos modos).

### Grupos

Dentro de una colección, las variables se organizan en **grupos** usando `/` en el nombre. Figma convierte esa jerarquía en carpetas.

```
color/text/primary      →  grupo color > grupo text > variable primary
```

### Modos

Cada variable tiene un valor **por modo**. Ejemplo en una colección `Tokens` con modos `Light` y `Dark`:

| Variable | Light | Dark |
|---|---|---|
| `color/bg/page` | `gray/50` | `gray/950` |
| `color/text/primary` | `gray/900` | `gray/50` |

### Alias

Una variable puede **apuntar a otra** en lugar de guardar un valor propio. Los alias son la base de la separación primitivas/semánticas.

```
color/text/primary  ──►  color/gray/900  ──►  #111827
```

---

## 5. Tipos de variables

Figma tiene cuatro tipos. Cada uno se aplica a propiedades distintas.

| Tipo | Guarda | Se puede aplicar a (ejemplos) |
|---|---|---|
| **Color** | Un color (hex/RGBA) | Relleno (fill), trazo (stroke), color de efectos como sombras, color de texto |
| **Number** | Un número | Ancho/alto, padding, gap (espaciado), radio de esquina, grosor de trazo, opacidad, tamaño de fuente, interlineado, espaciado entre letras, espaciado entre párrafos |
| **String** | Un texto | Familia y estilo de fuente, contenido de texto, propiedades de componente de texto |
| **Boolean** | Verdadero / falso | Visibilidad de capas, propiedades booleanas de componentes, lógica de prototipos |

### Qué tipo usar para cada cosa del sistema

| Elemento del sistema | Tipo de variable |
|---|---|
| Paleta de colores y colores semánticos | Color |
| Espaciado (`space/*`) | Number |
| Radios, grosores de borde, opacidades | Number |
| Tamaño de fuente, interlineado, peso | Number |
| Familia tipográfica | String |
| Sombras | Ver [limitaciones](#16-limitaciones-a-tener-en-cuenta): se guardan los números por separado |
| Interruptores de prototipo (menú abierto, sesión iniciada) | Boolean |

---

## 6. Scoping: limitar dónde se aplica cada variable

El **scoping** restringe a qué propiedades puede aplicarse una variable. Sin scoping, al abrir el selector de variables de un padding aparecen también tamaños de fuente, radios y opacidades.

Ejemplos recomendados:

| Variable | Scope |
|---|---|
| `space/*` | Gap, padding |
| `font-size/*` | Font size |
| `line-height/*` | Line height |
| `radius/*` | Corner radius |
| `color/text/*` | Text fill |
| `color/bg/*` | Frame fill, shape fill |
| `color/border/*` | Stroke |
| Primitivas | Ninguno (ocultas al publicar) |

Beneficios: selectores limpios, menos errores de uso y un sistema más fácil de aprender.

---

## 7. Modos y theming

Los modos permiten que **un mismo diseño tenga varias versiones** cambiando un único ajuste.

Casos típicos:

- **Light / Dark.** Es el más común; se define en la colección semántica.
- **Marcas (multibrand).** Modo `Brand A` y `Brand B` con distintos colores de marca.
- **Densidad.** `Comfortable` / `Compact` para controles y espaciados.
- **Idioma.** Textos (String) por idioma, útil para probar longitudes.
- **Breakpoints.** Modos `Mobile` / `Tablet` / `Desktop` con distintos tamaños de fuente o márgenes.

Cómo se usan: en un frame (o en la página) eliges el modo de cada colección, y los hijos heredan esa elección. Se pueden combinar modos de colecciones distintas, por ejemplo tema oscuro + densidad compacta.

> **Regla:** los modos viven en la capa **semántica**, no en las primitivas. Las primitivas tienen un único valor.

> El número de modos por colección depende del plan de Figma. Prioriza `Light/Dark` si estás limitado.

---

## 8. Variables y código: code syntax y CSS

### Code syntax

A cada variable se le puede añadir una **code syntax** (para Web, Android e iOS): el nombre con el que se usa en código. Dev Mode la muestra al desarrollador, de modo que ve `var(--color-text-primary)` en lugar de un hex.

### Convención de nombres Figma → CSS

La regla más simple: sustituir `/` por `-` y anteponer `--`.

| Variable en Figma | Variable CSS |
|---|---|
| `color/gray/900` | `--color-gray-900` |
| `color/text/primary` | `--color-text-primary` |
| `space/4` | `--space-4` |
| `font-size/base` | `--font-size-base` |
| `text/body/line-height` | `--text-body-line-height` |
| `radius/card` | `--radius-card` |

### Cómo se traducen las dos capas

Las **primitivas** se vuelven variables con valor, y las **semánticas** referencian a las primitivas con `var()`:

```css
:root {
  /* Primitivas */
  --color-gray-50: #f9fafb;
  --color-gray-900: #111827;
  --space-4: 16px;
  --space-6: 24px;
  --font-size-base: 16px;
  --line-height-base: 24px;

  /* Semánticas (modo Light) */
  --color-bg-page: var(--color-gray-50);
  --color-text-primary: var(--color-gray-900);
  --spacing-inset-md: var(--space-4);
  --text-body-font-size: var(--font-size-base);
  --text-body-line-height: var(--line-height-base);
}

/* Semánticas (modo Dark): solo cambian las semánticas */
[data-theme="dark"] {
  --color-bg-page: var(--color-gray-950);
  --color-text-primary: var(--color-gray-50);
}
```

Los **modos** de Figma se corresponden con selectores o media queries (`[data-theme="dark"]`, `@media (prefers-color-scheme: dark)`). Los componentes solo usan las semánticas, así que el cambio de tema no toca ningún componente.

### Cómo exportar

Según tu plan y flujo hay varias vías:

- **Plugins de la Comunidad** para exportar variables a CSS, JSON de tokens u otros formatos (busca "variables export" o "design tokens" en la Comunidad de Figma).
- **API REST de variables de Figma**, que permite leer y escribir variables de forma programática y sincronizarlas con un repositorio (su disponibilidad depende del plan; consulta la documentación oficial).
- **Herramientas de transformación de tokens** (por ejemplo, las basadas en el estándar de design tokens) para generar CSS, Tailwind, iOS o Android desde un mismo JSON.

### Detalles que conviene decidir

- **Interlineado:** en Figma es un número en px. En CSS muchos equipos prefieren valores sin unidad (`1.5`). Decide si exportarás px o convertirás a ratio.
- **Unidades:** Figma guarda números sin unidad; al exportar decide si serán `px` o `rem` (`16px` = `1rem`).
- **Con Tailwind:** como las escalas siguen su nomenclatura (`space/4` ↔ `p-4`), el mapeo a su configuración de tema es casi directo.

---

## 9. Variables en prototipos

Además de los diseños, las variables se pueden usar en **prototipos interactivos**:

- Guardar estados (un contador, un nombre de usuario, un booleano `menu-abierto`).
- Usar **condicionales** (si `sesion-iniciada` es verdadero, ir a una pantalla; si no, a otra).
- Mostrar valores en textos y actualizarlos con interacciones.

Se usan principalmente variables **Boolean**, **Number** y **String**. Son independientes de las variables del sistema de diseño, y conviene mantenerlas en una colección aparte (por ejemplo `Prototype`) para no mezclarlas con los tokens.

---

## 10. Cómo organizar: primitivas y semánticas

### Principio base

> **Una colección por nivel de abstracción, no una colección por tipo de valor.**

En lugar de `Colors`, `Typography`, `Spacing`..., organiza por función:

| Nivel | Colección | Contiene | Quién la usa |
|---|---|---|---|
| 1 | `Primitives` | Valores crudos | Nadie directamente (ocultas) |
| 2 | `Tokens` | Alias por intención | Diseñadores |
| 3 | `Density` (opcional) | Variantes compacto/cómodo | Diseñadores |
| 4 | `Components` (opcional) | Tokens por componente | Sistemas maduros |

**Flujo de referencias (una sola dirección):**

```
Components → Tokens → Primitives
```

### Por qué esta separación funciona mejor

- **Los modos se aplican donde toca.** Light/Dark solo tiene sentido en los colores semánticos; si todo está mezclado, el modo se aplica a todo o duplicas variables.
- **Hay capa de alias.** Puedes cambiar "el tamaño del body" sin tocar el valor que usan otros elementos.
- **Se sabe qué usar.** El diseñador ve `brand/default`, no `blue/500` junto a `brand/default`.
- **Las referencias no se enredan.**

### Las escalas de Refactoring UI

El libro propone escalas **definidas a mano**, no fórmulas, porque una escala lineal tiene demasiados saltos pequeños al inicio y muy pocos al final.

**Espaciado (base 4px):**

```
4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 640, 768
```

**Tamaños de fuente:**

```
12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72
```

**Otras escalas:** 9-10 tonos por color (50 a 950), 4-5 niveles de sombra, pocos radios y pocos grosores de borde.

---

## 11. Colección `Primitives`

Un solo modo. Ocultar al publicar (*Hidden from publishing*) y sin scoping de uso.

```
color/
  gray/50 … 950
  blue/50 … 950          (color de marca)
  red/ green/ yellow/    (estados)
  white, black

space/
  1=4, 2=8, 3=12, 4=16, 6=24, 8=32, 12=48, 16=64, 24=96, 32=128

font-size/
  xs=12, sm=14, base=16, lg=18, xl=20, 2xl=24, 3xl=30, 4xl=36, 5xl=48, 6xl=60, 7xl=72

font-weight/
  regular=400, medium=500, semibold=600, bold=700

font-family/
  sans, mono                      (tipo String)

line-height/                      (en px, emparejados con font-size)
  xs=16, sm=20, base=24, lg=28, xl=28, 2xl=32, 3xl=36, 4xl=40, 5xl=48, 6xl=60, 7xl=72

radius/
  none, sm, md, lg, xl, full

border-width/
  0, 1, 2, 4

opacity/
  10, 20, 40, 60, 80
```

---

## 12. Colección `Tokens`

Todo apunta a una primitiva y se nombra por **intención**. Lleva los modos `Light` y `Dark`.

```
color/
  bg/        page, surface, subtle, inverse
  text/      primary, secondary, muted, inverse, link
  border/    default, strong, focus
  brand/     default, hover, active, subtle
  feedback/  success, warning, danger, info
             (cada uno con /bg, /text, /border)

spacing/
  inline/    tight, default, loose
  stack/     xs, sm, md, lg, xl
  inset/     sm, md, lg
  section/   sm, md, lg

radius/
  control, card, modal, pill

shadow/
  card, dropdown, modal
```

`text/primary`, `secondary` y `muted` son **tres niveles de contraste**, no tres colores distintos (jerarquía visual, idea central del libro).

### Tipografía dentro de `Tokens`

`text/` es el **rol tipográfico**, no la familia. Una variable guarda un solo valor, así que cada rol es un grupo con sus propiedades:

```
text/
  body/
    font-family   → font-family/sans
    font-size     → font-size/base
    font-weight   → font-weight/regular
    line-height   → line-height/base
  body-sm/
    font-size     → font-size/sm
    line-height   → line-height/sm
  heading-md/
    font-size     → font-size/3xl
    font-weight   → font-weight/bold
    line-height   → line-height/3xl
  display/
    font-size     → font-size/6xl
    font-weight   → font-weight/bold
    line-height   → line-height/6xl
```

Después crea **Text styles** (`body`, `heading-md`...) y vincula a cada propiedad su variable (Figma permite vincular variables a familia, tamaño, peso e interlineado dentro de un estilo). Los diseñadores aplican el estilo, no las variables sueltas.

**Alternativa** si usas varias familias o temas de marca: sacar la familia a su propio grupo `font/family/{body, heading, code}`.

> **Line-height:** Figma guarda el interlineado en **px**, no como multiplicador, así que las primitivas `line-height/*` se definen ya resueltas en px y se nombran igual que `font-size/*` (`line-height/base` acompaña a `font-size/base`). Los tokens **siempre referencian** estas primitivas, nunca un número suelto.
> Siguiendo *Refactoring UI*, cuanto mayor es el texto, más ajustado el interlineado (≈1.33 en `xs`, 1.0 desde `5xl`).
> Cada rol puede combinar tamaños distintos si hace falta (p. ej. `body-lg` con `font-size/lg` y `line-height/xl`), porque no están atados por valor.

---

## 13. Colecciones opcionales: `Density` y `Components`

### `Density`

Para versión cómoda y compacta, en lugar de duplicar tokens de espaciado:

```
density/
  control-height
  control-padding-x
  control-padding-y
  row-gap
```

Modos `Comfortable` y `Compact`, apuntando a primitivas distintas (por ejemplo, `control-height` = `space/12` en Comfortable y `space/10` en Compact).

### `Components`

Tokens específicos de componente que referencian los semánticos:

```
button/   padding-x, padding-y, radius, bg, text
input/    height, border, radius
card/     padding, radius, shadow
```

Solo vale la pena con un sistema maduro o varios temas por componente. Para empezar, con `Primitives` y `Tokens` basta.

---

## 14. Nomenclatura

1. Minúsculas y kebab-case; `/` para jerarquía (Figma crea carpetas).
2. Orden de general a específico: `categoría / propiedad / variante`.
3. Primitivas = **valor**; semánticas = **uso**. No mezclar (`space/button` sería un error en primitivas).
4. Evitar el valor en el nombre (`space-16px`): si cambia, el nombre miente.
5. Espaciado numérico (`space/4` = 16px, como Tailwind `p-4`); fuentes y line-height en camiseta (`xs`, `sm`, `base`...).
6. Piensa en el nombre CSS resultante: si `/` pasa a `-`, evita nombres que se confundan al aplanarse.
7. Mantén los nombres de propiedad iguales a los de Figma (`font-size`, `font-weight`, `line-height`).

---

## 15. Migrar desde colecciones por categoría

Separar por categoría (`Colors`, `Typography`, `Spacing`) no es un error: funciona bien en proyectos pequeños y sin modo oscuro. El problema es que organiza por *tipo de valor* y no por *función*. Para migrar sin rehacerlo todo:

1. Fusiona `Colors`, `Typography`, `Spacing`... en una colección `Primitives`. Las categorías antiguas pasan a ser **grupos** (`color/`, `font-size/`, `space/`). Puedes arrastrar variables entre colecciones.
2. Crea `Tokens` encima, con alias que apunten a las primitivas.
3. Añade modos solo en `Tokens`.
4. Reasigna en el diseño las variables primitivas a semánticas.

**Cuándo mantener colecciones separadas por dominio:** sistemas muy grandes con varios equipos o marcas, publicados como librerías distintas. Aun así, dentro de cada una conviene la división primitivas/semánticas.

---

## 16. Limitaciones a tener en cuenta

- **Sombras:** no existen como variable compuesta. Guarda los números (blur, offset, opacidad) y el color como variables, y vincúlalos desde **Effect styles**.
- **Valores compuestos:** una variable guarda un solo valor, así que una "tipografía completa" se resuelve con grupos de variables + Text styles.
- **Interlineado en px:** no se puede guardar un multiplicador (ver [sección 12](#12-colección-tokens)).
- **Modos por colección:** dependen del plan.
- **Variables entre archivos:** para usar variables de una librería hay que publicarlas y activar la librería en el archivo de destino. Si usas un kit como librería desde otro archivo, puedes ver sus componentes pero no siempre sus variables; para estudiarlas, duplica el archivo.
- **Variables ocultas:** ocultar al publicar evita que se usen, pero siguen funcionando como alias.

---

## 17. Ejemplos y recursos

### Para estudiar cómo están organizadas

- **Simple Design System (SDS)**, el sistema de ejemplo de Figma, con variables, estilos y componentes:
  https://www.figma.com/community/file/1380235722331273046/simple-design-system
  *Importante:* usa **"Make a copy"** para ver las variables. Si lo usas como librería desde otro archivo, verás los componentes pero no sus variables.
- **Simple Design System en GitHub:** versión en código que conecta variables con un proyecto React (repositorio del perfil `figma` en GitHub).
- **UI kits de Apple, Google (Material 3)** y otros: búscalos en la Comunidad de Figma, duplícalos y revisa su panel de variables.

### Documentación oficial

- Guía de variables en Figma:
  https://help.figma.com/hc/en-us/articles/15145852043927
- Crear y gestionar variables y colecciones:
  https://help.figma.com/hc/en-us/articles/14506821864087
- **Variables playground:** archivo de la comunidad para practicar, enlazado desde la guía oficial.

### Origen de las escalas

- *Refactoring UI*: https://www.refactoringui.com
- Escalas de Tailwind (espaciado, tamaños de fuente): https://tailwindcss.com/docs/spacing

---

## 18. Checklist

**Fundamentos**
- [ ] Cada valor repetido del diseño está enlazado a una variable
- [ ] Tipo de variable correcto (Color, Number, String, Boolean) según la propiedad
- [ ] Scoping configurado en cada variable

**Organización**
- [ ] Una colección por nivel de abstracción (`Primitives` → `Tokens`)
- [ ] Primitivas nombradas por valor, tokens por uso
- [ ] Primitivas ocultas al publicar
- [ ] Light/Dark solo en `Tokens`
- [ ] Variables de prototipo en una colección aparte

**Tipografía**
- [ ] Un grupo por rol tipográfico, con Text styles vinculados
- [ ] `line-height` como primitivas en px, referenciadas desde los tokens (sin números sueltos)

**Código**
- [ ] Code syntax definida para cada variable
- [ ] Decidido el criterio de unidades (`px`/`rem`) y de interlineado al exportar
- [ ] Sombras resueltas con Effect styles

**Referencia**
- [ ] Revisado SDS como ejemplo
