# Guía Completa de `srcset`

El atributo `srcset` es una herramienta esencial en el desarrollo web moderno para optimizar imágenes y adaptarlas a diferentes dispositivos y resoluciones.

---

## ¿Qué es `srcset`?

El atributo `srcset` permite especificar **varias versiones de una imagen** para que el navegador elija la más adecuada según:

1. **El ancho de la pantalla del usuario.**
2. **La densidad de píxeles del dispositivo (Device Pixel Ratio, DPR).**

### Beneficios de usar `srcset`

- **Optimización del rendimiento:** Reduce el peso de las imágenes en pantallas pequeñas o con baja resolución.
- **Mejor experiencia visual:** Garantiza imágenes nítidas en pantallas Retina o de alta densidad.
- **SEO:** Mejora la velocidad de carga, un factor importante para los motores de búsqueda.
- **Compatibilidad:** Soportado por todos los navegadores modernos.

---

## Sintaxis de `srcset`

### **1. Usando ancho en píxeles (`w`)**

Este método especifica diferentes versiones de una imagen según su **ancho en píxeles**.

#### Ejemplo:

```html
<img
  srcset="image-320.jpg 320w, image-640.jpg 640w, image-1280.jpg 1280w"
  sizes="(max-width: 600px) 100vw, 50vw"
  src="image-1280.jpg"
  alt="Ejemplo de srcset con ancho"
/>
```

#### Detalles:

- **`320w, 640w, 1280w`**: Especifica el ancho de cada versión de la imagen.
- **`sizes`**: Define cuánto espacio ocupará la imagen en la pantalla:
  - `(max-width: 600px) 100vw`: Si el ancho del viewport es ≤ 600px, la imagen ocupará el 100% del ancho del viewport.
  - `50vw`: En pantallas más grandes, la imagen ocupará el 50% del ancho del viewport.
- **`src`**: Imagen predeterminada utilizada por navegadores que no soportan `srcset`.

---

### **2. Usando densidad de píxeles (`x`)**

Este método se basa en la **densidad de píxeles** del dispositivo (Device Pixel Ratio).

#### Ejemplo:

```html
<img
  srcset="image-1x.jpg 1x, image-2x.jpg 2x, image-3x.jpg 3x"
  src="image-1x.jpg"
  alt="Ejemplo de srcset con densidad de píxeles"
/>
```

#### Detalles:

- **`1x, 2x, 3x`**: Indican la densidad de píxeles para cada versión:
  - `1x`: Pantallas estándar.
  - `2x`: Pantallas Retina.
  - `3x`: Pantallas de alta densidad.

El navegador selecciona la imagen adecuada según el DPR del dispositivo.

---

### **3. Ejemplo combinado: Ancho y densidad**

Puedes usar una combinación de **ancho** y **densidad** para cubrir más casos.

#### Ejemplo:

```html
<img
  srcset="
    image-320.jpg 320w,
    image-640.jpg 640w 1x,
    image-1280.jpg 1280w 2x
  "
  sizes="(max-width: 600px) 100vw, 50vw"
  src="image-320.jpg"
  alt="Ejemplo combinado de srcset"
/>
```

- Aquí, el navegador considera tanto el **ancho del viewport** como la **densidad de píxeles** para elegir la mejor versión.

---

## Herramientas para Implementar `srcset`

1. **Generación de imágenes múltiples:**

   - [ImageMagick](https://imagemagick.org/): Herramienta de línea de comandos para crear múltiples versiones de una imagen.
   - [Sharp](https://sharp.pixelplumbing.com/): Librería para manipulación de imágenes en Node.js.

2. **Optimización de imágenes:**

   - [TinyPNG](https://tinypng.com/): Reduce el peso de imágenes PNG y JPG.
   - [Squoosh](https://squoosh.app/): Herramienta moderna para optimización avanzada.

3. **Simulación y pruebas:**
   - Usa las **herramientas de desarrollo del navegador** (Ctrl + Shift + M) para probar diferentes tamaños de pantalla y DPR.

---

## ¿Cuándo usar `srcset`?

### **1. Diseño responsivo**

Si tu diseño cambia según el ancho del viewport, usa `srcset` con descriptores de ancho (`w`) y define un atributo `sizes`.

### **2. Optimización para Retina**

Si esperas que tu público use pantallas de alta densidad, proporciona versiones en diferentes densidades (`1x`, `2x`, `3x`).

### **3. Reducción de peso**

En dispositivos con pantallas pequeñas o de baja resolución, sirve imágenes más ligeras.

---

## Ejercicio Práctico

### **Tarea**

Implementa `srcset` en una página HTML para optimizar una imagen en diferentes dispositivos.

#### Código base:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejemplo de srcset</title>
  </head>
  <body>
    <h1>Optimización de imágenes con srcset</h1>
    <img
      srcset="image-320.jpg 320w, image-640.jpg 640w, image-1280.jpg 1280w"
      sizes="(max-width: 600px) 100vw, 50vw"
      src="image-1280.jpg"
      alt="Ejemplo de optimización de imagen"
    />
  </body>
</html>
```

### **Pruebas:**

1. Abre el archivo en el navegador.
2. Activa el modo responsivo (Ctrl + Shift + M).
3. Cambia el tamaño del viewport y observa qué imagen se carga.

---

## Conclusión

El atributo `srcset` es una herramienta poderosa y relevante para:

- Mejorar el rendimiento web.
- Optimizar imágenes para dispositivos modernos.
- Ofrecer una mejor experiencia al usuario.

Adoptar `srcset` en tus proyectos asegura que tus imágenes sean flexibles, ligeras y listas para cualquier pantalla.

---
