# **ANEXO II: Manejo de Variables y Mixins en SASS**

En este anexo aprenderás a configurar y utilizar variables y mixins en un proyecto SASS siguiendo las mejores prácticas modernas. Además, centralizaremos estas configuraciones en un archivo `_globals.scss` para facilitar su uso en todo el proyecto.

---

## **1. Variables en SASS**

Las variables en SASS permiten definir valores reutilizables como colores, tamaños y fuentes.

### **Antes: Usar `@import`**

En versiones anteriores de SASS, se utilizaba `@import` para compartir variables entre archivos. Sin embargo, **`@import` está deprecado** y será eliminado en versiones futuras.

```scss
// Ejemplo de @import (No recomendado)
@import "variables";

body {
  background-color: $primary-color;
}
```

### **Ahora: Usar `@use`**

El enfoque moderno utiliza `@use` para importar módulos de forma explícita y evitar conflictos. Cada archivo que necesita variables debe incluir el archivo correspondiente con `@use`.

---

## **2. Centralización de Variables y Mixins**

Para evitar tener que importar variables o mixins en cada archivo por separado, utilizaremos un archivo `_globals.scss` que reenviará (`@forward`) todas las configuraciones globales.

### **Estructura Recomendada**

```
src/
├── styles/
│   ├── _variables.scss    # Variables globales
│   ├── _mixins.scss       # Mixins reutilizables
│   ├── _globals.scss      # Archivo central que reenvía variables y mixins
│   └── main.scss          # Archivo principal
```

---

### **Archivo `_variables.scss`**

Define tus variables globales en `_variables.scss`:

```scss
// _variables.scss
$primary-color: #3498db;
$secondary-color: #2ecc71;
$font-stack: "Arial, sans-serif";
$base-spacing: 16px;
```

---

### **Archivo `_mixins.scss`**

Define mixins reutilizables en `_mixins.scss`. Por ejemplo, un mixin para media queries:

```scss
// _mixins.scss
@mixin respond-to($breakpoint) {
  $breakpoints: (
    "small": "max-width: 599px",
    "medium": "min-width: 800px",
    "large": "min-width: 1000px",
  );

  $query: map.get($breakpoints, $breakpoint);

  @if $query {
    @media (#{$query}) {
      @content;
    }
  } @else {
    @error "No se encontró el breakpoint `#{$breakpoint}`.";
  }
}
```

---

### **Archivo `_globals.scss`**

El archivo `_globals.scss` centraliza las variables y los mixins. Usaremos `@forward` para reenviar estos módulos, permitiendo que otros archivos los utilicen fácilmente.

```scss
// _globals.scss
@forward "variables";
@forward "mixins";
```

---

## **3. Usar Variables y Mixins en Otros Archivos**

Para utilizar las variables y mixins en un archivo, importa `_globals.scss` con `@use`. Esto asegura que cada archivo tenga acceso a las configuraciones necesarias.

### **Ejemplo en `_layout.scss`**

```scss
// _layout.scss
@use "globals" as *;

.container {
  padding: $base-spacing;
  background-color: $primary-color;

  @include respond-to("medium") {
    padding: $base-spacing * 2;
  }
}
```

---

### **Archivo Principal `main.scss`**

En `main.scss`, importa todos los estilos parciales necesarios para el proyecto:

```scss
// main.scss
@use "globals" as *;
@use "layout";
```

---

## **4. Beneficios del Uso de `_globals.scss`**

- **Centralización:** Todas las variables y mixins están en un único archivo (`_globals.scss`).
- **Modularidad:** Cada archivo SCSS solo importa lo que necesita, evitando dependencias innecesarias.
- **Escalabilidad:** Si necesitas modificar variables o agregar mixins, solo debes actualizar los archivos correspondientes.

---

## **Resumen**

1. Define tus variables en `_variables.scss`.
2. Crea mixins reutilizables en `_mixins.scss`.
3. Centraliza variables y mixins en `_globals.scss` usando `@forward`.
4. Importa `_globals.scss` con `@use` en los archivos que necesiten variables o mixins.
5. Sigue la estructura modular para un proyecto limpio y escalable.

Con este enfoque moderno, garantizamos compatibilidad con las últimas versiones de SASS y un desarrollo más eficiente. 😊
