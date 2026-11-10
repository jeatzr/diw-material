# BEM: nombrar clases CSS

[← Volver al README](README.md)

BEM (Block, Element, Modifier) es una convención para **poner nombre a las clases CSS**. No es una herramienta ni una librería: es una forma de escribir los nombres para que cualquiera entienda, solo con mirar una clase, qué es y de quién depende.

## Por qué hace falta

En CSS las clases son **globales**: cualquier regla puede afectar a cualquier elemento de la página. Si dos personas escriben `.title` en sitios distintos, los estilos chocan. Y con selectores como `.card h2` o `.sidebar .list li a` los estilos quedan pegados a la estructura del HTML y son difíciles de sobrescribir.

BEM resuelve esto con nombres únicos y planos (sin anidar selectores), de modo que cada clase se explica sola.

## Las tres piezas

| Pieza | Qué es | Sintaxis | Ejemplo |
| --- | --- | --- | --- |
| **Bloque** (Block) | Un componente independiente que tiene sentido por sí solo | `bloque` | `.card`, `.button`, `.menu` |
| **Elemento** (Element) | Una parte de un bloque, que no tiene sentido fuera de él | `bloque__elemento` | `.card__title`, `.menu__item` |
| **Modificador** (Modifier) | Una variante o estado de un bloque o de un elemento | `bloque--modificador` | `.button--secondary`, `.menu__item--active` |

Mnemotecnia: **dos guiones bajos** unen una parte con su bloque (`__`), **dos guiones medios** marcan una variante (`--`).

## Ejemplo completo

HTML:

```html
<article class="card card--highlighted">
  <h2 class="card__title">Título</h2>
  <p class="card__text">Contenido de la tarjeta.</p>
  <button class="button">Aceptar</button>
  <button class="button button--secondary">Cancelar</button>
</article>
```

SCSS (Sass escribe cada nombre completo con `&`, sin repetirlo):

```scss
.card {
  padding: 1rem;
  border: 1px solid #ddd;

  &__title {          // .card__title
    font-size: 1.25rem;
  }

  &__text {           // .card__text
    color: #666;
  }

  &--highlighted {    // .card--highlighted
    border-color: #3a6ea5;
  }
}
```

CSS generado:

```css
.card { padding: 1rem; border: 1px solid #ddd; }
.card__title { font-size: 1.25rem; }
.card__text { color: #666; }
.card--highlighted { border-color: #3a6ea5; }
```

Todos los selectores tienen **la misma especificidad** (una sola clase), así que no hay peleas entre reglas y es fácil sobrescribir.

## Reglas

1. **Solo clases.** Los estilos se aplican a clases, no a etiquetas (`h2`) ni a identificadores (`#id`).
2. **Nombres en minúsculas y con guion medio** para las palabras compuestas: `.main-menu`, `.main-menu__item`, `.button--full-width`.
3. **Un elemento pertenece al bloque, no a otro elemento.** No se encadenan: `.card__header__title` es incorrecto. Se escribe `.card__title`, aunque en el HTML esté dentro de la cabecera.
4. **El modificador acompaña a la clase base, nunca la sustituye.** Se escribe `class="button button--secondary"`, no `class="button--secondary"` solo. La clase base lleva lo común y el modificador solo lo que cambia.
5. **Un bloque no sabe dónde se usa.** No lleva márgenes ni posición que dependan de su entorno (`margin-top: 40px` para encajar en una página concreta). Eso lo decide el contenedor, por ejemplo con una clase de `_layout.scss`.
6. **Un modificador se usa para variantes y estados**: `.button--secondary`, `.menu__item--active`, `.card--highlighted`.

## Cómo decidir qué es qué

Pregúntate cada vez:

- ¿Puedo moverlo a otra página y sigue teniendo sentido? → **Bloque**.
- ¿Solo tiene sentido dentro de otro bloque (como el título de una tarjeta)? → **Elemento**.
- ¿Es una versión distinta o un estado del mismo bloque o elemento? → **Modificador**.

Un caso habitual: un botón dentro de una tarjeta. El botón es un **bloque propio** (`.button`), porque tiene sentido fuera de la tarjeta. No se llama `.card__button`. Si hace falta colocarlo, se le añade una clase del elemento de la tarjeta en el mismo HTML (`class="button card__action"`), lo que se conoce como *mix*.

```html
<article class="card">
  <button class="button card__action">Aceptar</button>
</article>
```

```scss
.card {
  &__action {      // solo posiciona el botón dentro de la tarjeta
    margin-top: 1rem;
  }
}
```

## BEM junto con Sass

- `&__elemento` y `&--modificador` generan los nombres completos sin repetir el bloque.
- Si el modificador necesita cambiar un elemento, se escribe junto al bloque, sin anidar más:

```scss
.card {
  &__title {
    font-size: 1.25rem;
  }

  &--highlighted &__title {   // .card--highlighted .card__title
    color: #3a6ea5;
  }
}
```

- Un bloque por parcial cuando el proyecto crezca: `_card.scss`, `_button.scss`, `_menu.scss`.
- Los valores (colores, espaciados) siguen viniendo de `_variables.scss`, igual que en el resto del proyecto.

## Errores frecuentes

| Incorrecto | Por qué | Correcto |
| --- | --- | --- |
| `.card__header__title` | Elementos encadenados | `.card__title` |
| `.card .title` | Selector que depende del padre | `.card__title` |
| `class="button--secondary"` | Falta la clase base | `class="button button--secondary"` |
| `.card__button` | El botón es un bloque independiente | `.button` + `.card__action` |
| `.Card_Title` | Mayúsculas y un solo guion bajo | `.card__title` |
| `.blue-button` | El nombre describe el aspecto, no el papel | `.button--primary` |

## Ejercicio

1. Crea un bloque `.alert` con los elementos `.alert__title` y `.alert__text`.
2. Añade los modificadores `.alert--success` y `.alert--danger`, cambiando el color del borde.
3. Haz que el modificador `.alert--danger` también cambie el color de `.alert__title`.
4. Pon un `.button` dentro de la alerta y colócalo con un elemento `.alert__action`, sin crear `.alert__button`.
5. Comprueba que en el CSS final todos los selectores llevan una sola clase (salvo el del apartado 3).
