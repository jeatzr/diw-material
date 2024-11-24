# **Anexo III: Contenido del Archivo `_layout.scss`**

El archivo `_layout.scss` está destinado a gestionar los estilos generales del **layout global** del sitio web. Esto incluye configuraciones relacionadas con la estructura, organización visual y disposición de los elementos principales en la página.

---

## **1. Configuración General del Contenedor**

Define las propiedades generales para los contenedores principales del diseño, como márgenes, paddings y anchuras máximas. Estos contenedores suelen envolver el contenido de la página para mantener una apariencia uniforme.

```scss
.container {
  max-width: 1200px;
  margin: 0 auto; // Centrar contenido
  padding: 0 1rem; // Espaciado interno lateral
}
```

---

## **2. Rejillas o Sistema de Grid**

Si utilizas un sistema de rejillas personalizado, define aquí las clases para las filas y columnas. Estas rejillas pueden ser útiles para organizar elementos de manera consistente en todo el sitio.

```scss
.row {
  display: flex;
  flex-wrap: wrap; // Permitir que las columnas se ajusten
  margin: -0.5rem; // Negar el padding de las columnas
}

.col {
  flex: 1; // Columnas flexibles por defecto
  padding: 0.5rem;
}

.col-6 {
  flex: 0 0 50%; // 50% del ancho
}

.col-12 {
  flex: 0 0 100%; // 100% del ancho
}
```

---

## **3. Configuración Global del Body, HTML y Box-Sizing**

Aplica estilos generales para el `body`, `html` y asegúrate de configurar `box-sizing: border-box`. Esto hará que los paddings y bordes se incluyan en las dimensiones totales de los elementos, lo cual simplifica la gestión de layouts.

```scss
html {
  font-size: 16px; // Tamaño base
  box-sizing: border-box; // Incluir padding y bordes en las dimensiones
}

*,
*::before,
*::after {
  box-sizing: inherit; // Propagar box-sizing a todos los elementos
}

body {
  font-family: $font-stack; // Usar la variable definida en _variables.scss
  line-height: 1.5;
  background-color: $neutral-color;
  color: $primary-color;
  margin: 0;
  padding: 0;
}
```

---

## **4. Espaciado Global**

Define clases reutilizables para márgenes y paddings. Estas clases pueden ser útiles para aplicar rápidamente ajustes de espaciado en cualquier elemento.

```scss
.mt-1 {
  margin-top: 1rem;
}

.mb-2 {
  margin-bottom: 2rem;
}

.p-1 {
  padding: 1rem;
}
```

---

## **5. Configuración Básica para Zonas Globales**

Si necesitas aplicar **estilos genéricos** a todas las zonas principales (como `header`, `main`, `footer`), estos podrían definirse aquí. Sin embargo, los **estilos específicos de cada sección deben ir en sus propios archivos parciales (`_header.scss`, `_footer.scss`, etc.).**

```scss
header,
main,
footer {
  padding: 1rem 0; // Margen o espaciado común a todas las secciones
}
```

Para estilos específicos:

- **`_header.scss`**: Estilos concretos del `header`.
- **`_main.scss`**: Estilos concretos del `main`.
- **`_footer.scss`**: Estilos concretos del `footer`.

---

## **6. Media Queries Relacionadas con el Layout**

Si ciertas configuraciones del layout dependen de breakpoints, puedes incluirlas aquí. Para mayor consistencia, utiliza un gestor de breakpoints si ya lo definiste.

```scss
.container {
  max-width: 90%;
  @include respond-to("medium") {
    max-width: 800px;
  }
  @include respond-to("large") {
    max-width: 1200px;
  }
}
```

---

## **¿Qué No Debería Ir en `_layout.scss`?**

1. **Estilos específicos de componentes:**
   - Ejemplo: Estilos de un `header`, `footer`, o `button` deberían estar en sus propios archivos parciales (`_header.scss`, `_footer.scss`, `_buttons.scss`).
2. **Propiedades específicas de elementos individuales:**
   - `_layout.scss` debe centrarse en la estructura global, no en los detalles.

---

## **Resumen del Contenido de `_layout.scss`**

En este archivo deberías incluir:

1. **Configuración global del contenedor.**
2. **Rejillas o sistema de grid personalizado.**
3. **Propiedades generales del `body` y `html`, incluyendo `box-sizing: border-box`.**
4. **Clases reutilizables para espaciado (márgenes y paddings).**
5. **Estilos genéricos para `header`, `main`, y `footer`, sin incluir detalles específicos.**
6. **Media queries relacionadas con el layout global.**

Este archivo centraliza la disposición y estructura del diseño, facilitando un estilo coherente y modular en el proyecto.
