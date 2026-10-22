# Práctica 1: la web del Festival Marea con Flexbox y Grid

## Objetivo
Maquetar la página del festival combinando **Flexbox y Grid**, eligiendo en cada parte la herramienta más adecuada. El HTML y las variables CSS ya están hechos: vuestro trabajo es el layout y el diseño.

Esta práctica es **solo para escritorio**. No hay que hacerla responsive ni preocuparse de cómo se ve en tablet o móvil: eso se trabajará en una práctica posterior.

## Archivos
| Archivo | ¿Se toca? |
|---|---|
| `index.html` | Solo para añadir clases o contenedores si lo necesitáis (no cambiéis la estructura semántica) |
| `variables.css` | No. Se usa con `var(--nombre)` |
| `estilos.css` | Sí. Aquí se hace toda la práctica |


## Reglas
1. Layout únicamente con `display: flex` y `display: grid`. **Prohibido** `float` y `position` para colocar elementos.
2. Todos los colores, tamaños de texto, espacios y radios salen de las variables, y los colores **solo de las semánticas** (`--fondo-*`, `--texto-*`, `--accion-*`, `--borde-*`...). Las primitivas (`--color-sol-500`...) no se usan directamente. Nada de valores "a ojo" como `#333` o `13px`.
3. No se usa `@media`. Diseña para una pantalla de escritorio (≥ 1280px); a anchos menores no se evalúa.
4. Los botones cambian de color en `:hover` (con las variables `--accion-*-hover`, sin movimiento) y las tarjetas tienen un `:hover` visible. Todo elemento interactivo debe mostrar `:focus-visible`.
5. En cada sección, deja un comentario breve que explique **por qué has elegido flex o grid**. En `estilos.css` hay una ayuda que te orienta.

## Retos por sección

**Nivel básico (hasta 6 puntos)**
- **Contenedor y botones:** `.contenedor` centrado con ancho máximo; `.boton` con 4 variantes.
- **Cabecera:** logo, menú y botón en una fila, con el menú centrado.
- **Hero:** contenido centrado en vertical y horizontal.
- **Datos clave:** tres columnas iguales.

**Nivel intermedio (hasta 8 puntos)**
- **Cartel:** rejilla de 6 tarjetas, 3 por fila, con huecos uniformes.
- **Tarjetas:** misma altura por fila y botón siempre abajo.
- **Planes:** tres planes con misma altura y `.plan--destacado` diferenciado.
- **Pie:** cuatro columnas y barra legal con texto a ambos lados.

**Nivel avanzado (hasta 10 puntos)**
- **Bloques alternos:** `.bloque--inverso` invierte el orden sin tocar el HTML.
- **Pie:** la columna de marca ocupa el doble que las demás.
- **Sticky footer:** el pie queda al final aunque el `<main>` esté vacío.
- **Menú fijo:** la cabecera se mantiene visible al hacer scroll (`position: sticky` está permitido solo aquí).

## Extras (opcionales, +1 punto cada uno)
- Dar un fondo distinto a `.bloque__visual--playa` y `--pinar` usando solo las variables.
- Crear en `estilos.css` tus propias variables (por ejemplo `--alto-imagen-tarjeta`).
- Resolver una misma sección con flex y con grid y explicar cuál prefieres.

## Cómo comprobarlo
1. Abre la página a 1440px y a 1280px: no debe aparecer scroll horizontal.
2. Borra el texto de una tarjeta: los botones deben seguir alineados abajo.
3. Vacía el `<main>`: el pie debe seguir al final de la ventana.
4. Duplica una tarjeta (la séptima): ¿qué le pasa a la última fila?
5. Navega con la tecla Tab: el foco debe verse siempre.

## Rúbrica

| Criterio | Puntos |
|---|---|
| Layout correcto y fiel al diseño | 4 |
| Elección razonada de flex o grid (comentarios) | 2 |
| Uso de variables CSS | 2 |
| Orden y limpieza del código (clases claras, sin repeticiones) | 1 |
| Detalles (hover, foco, extras) | 1 |
