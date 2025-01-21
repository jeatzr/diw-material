# Guía Completa: Optimización de Imágenes para la Web

En este documento aprenderás cómo utilizar los atributos `srcset` y la etiqueta `<picture>` para optimizar imágenes en páginas web. También veremos ejemplos prácticos, incluyendo un caso real basado en el sitio web de Apple.

---

## **Introducción**

Optimizar imágenes para la web es crucial para mejorar:

1. **La velocidad de carga** de una página.
2. **La experiencia del usuario**, especialmente en dispositivos móviles o de alta resolución.
3. **El rendimiento SEO**, ya que Google prioriza sitios rápidos y bien optimizados.

---

## **1. Usando el atributo `srcset`**

El atributo `srcset` permite definir múltiples versiones de una imagen y delega al navegador la decisión de cuál utilizar según:

- **El ancho del viewport.**
- **La densidad de píxeles (Device Pixel Ratio, DPR).**

### **1.1. Sintaxis básica de `srcset`**

#### Ejemplo con anchos (`w`):

```html
<img
  srcset="image-320.jpg 320w, image-640.jpg 640w, image-1280.jpg 1280w"
  sizes="(max-width: 600px) 100vw, 50vw"
  src="image-1280.jpg"
  alt="Ejemplo de srcset con ancho"
/>
```

- **`320w, 640w, 1280w`**: Define imágenes de diferentes anchos.
- **`sizes`**: Describe el espacio que ocupará la imagen en la pantalla:
  - `(max-width: 600px) 100vw`: Ocupa el 100% del ancho del viewport si este tiene ≤ 600px.
  - `50vw`: Ocupa el 50% del ancho del viewport en otros casos.

---

#### Ejemplo con densidad de píxeles (`x`):

```html
<img
  srcset="image-1x.jpg 1x, image-2x.jpg 2x, image-3x.jpg 3x"
  src="image-1x.jpg"
  alt="Ejemplo de srcset con densidad de píxeles"
/>
```

- **`1x, 2x, 3x`**: Define imágenes según la densidad de píxeles:
  - `1x`: Pantallas estándar.
  - `2x`: Pantallas Retina.
  - `3x`: Pantallas de alta densidad.

---

### **1.2. Cuándo usar `srcset`**

Usa `srcset` cuando:

- Necesites cambiar solo el **tamaño** o la **resolución** de una imagen.
- Quieras servir imágenes más ligeras a dispositivos con pantallas pequeñas.

---

## **2. Usando la etiqueta `<picture>`**

La etiqueta `<picture>` permite definir imágenes completamente diferentes según:

- El formato compatible con el navegador.
- Condiciones específicas como el ancho del viewport o la orientación de la pantalla.

### **2.1. Sintaxis básica de `<picture>`**

```html
<picture>
  <source srcset="image-1920.webp" type="image/webp" />
  <source srcset="image-1920.jpg" type="image/jpeg" />
  <img src="fallback.jpg" alt="Ejemplo de imagen" />
</picture>
```

- **`<source>`**: Define condiciones específicas para cada versión de la imagen.
- **`<img>`**: Actúa como respaldo si el navegador no soporta `<picture>` o los formatos especificados.

---

### **2.2. Ejemplo avanzado con condiciones de ancho**

```html
<picture>
  <source
    srcset="image-small.webp, image-small-2x.webp 2x"
    media="(max-width: 600px)"
    type="image/webp"
  />
  <source
    srcset="image-large.jpg, image-large-2x.jpg 2x"
    media="(min-width: 601px)"
    type="image/jpeg"
  />
  <img src="fallback.jpg" alt="Ejemplo avanzado con picture" />
</picture>
```

---

### **2.3. Caso real: Ejemplo del sitio web de Apple**

Apple utiliza `<picture>` para optimizar imágenes según el tamaño del dispositivo y la densidad de píxeles.

#### Código del ejemplo:

```html
<picture id="overview-augment-world-mac-iphone-2" class="template-image-large">
  <source
    srcset="
      /v/mac/home/cb/images/overview/augment/world_mac_iphone__mr1xfuchl56e_small.jpg,
      /v/mac/home/cb/images/overview/augment/world_mac_iphone__mr1xfuchl56e_small_2x.jpg 2x
    "
    media="(max-width:734px)"
  />
  <source
    srcset="
      /v/mac/home/cb/images/overview/augment/world_mac_iphone__mr1xfuchl56e_medium.jpg,
      /v/mac/home/cb/images/overview/augment/world_mac_iphone__mr1xfuchl56e_medium_2x.jpg 2x
    "
    media="(max-width:1068px)"
  />
  <source
    srcset="
      /v/mac/home/cb/images/overview/augment/world_mac_iphone__mr1xfuchl56e_large.jpg,
      /v/mac/home/cb/images/overview/augment/world_mac_iphone__mr1xfuchl56e_large_2x.jpg 2x
    "
    media="(max-width:1440px)"
  />
  <source
    srcset="
      /v/mac/home/cb/images/overview/augment/world_mac_iphone__mr1xfuchl56e_xlarge.jpg,
      /v/mac/home/cb/images/overview/augment/world_mac_iphone__mr1xfuchl56e_xlarge_2x.jpg 2x
    "
    media="(min-width:0px)"
  />
  <img
    src="/v/mac/home/cb/images/overview/augment/world_mac_iphone__mr1xfuchl56e_xlarge.jpg"
    alt="An iPhone next to an open Mac laptop"
  />
</picture>
```

---

## **3. Ejercicios**

### **Ejercicio 1: Usando `srcset`**

Crea una página que utilice `srcset` para cargar imágenes adaptativas según el ancho del viewport.

#### Código base:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejemplo con srcset</title>
  </head>
  <body>
    <h1>Optimización con srcset</h1>
    <img
      srcset="image-320.jpg 320w, image-640.jpg 640w, image-1280.jpg 1280w"
      sizes="(max-width: 600px) 100vw, 50vw"
      src="image-1280.jpg"
      alt="Ejemplo con srcset"
    />
  </body>
</html>
```

---

### **Ejercicio 2: Usando `<picture>`**

Implementa `<picture>` para servir diferentes imágenes según el tamaño del dispositivo y la densidad de píxeles.

#### Código base:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejemplo con Picture</title>
  </head>
  <body>
    <h1>Optimización con Picture</h1>
    <picture>
      <source
        srcset="image-small.webp, image-small-2x.webp 2x"
        media="(max-width: 600px)"
        type="image/webp"
      />
      <source
        srcset="image-large.jpg, image-large-2x.jpg 2x"
        media="(min-width: 601px)"
        type="image/jpeg"
      />
      <img src="fallback.jpg" alt="Ejemplo avanzado con picture" />
    </picture>
  </body>
</html>
```

---

## **Conclusión**

Usar `srcset` y `<picture>` es esencial para optimizar imágenes en la web, mejorar la experiencia del usuario y garantizar que las imágenes sean accesibles en cualquier dispositivo. El ejemplo del sitio web de Apple demuestra cómo estas herramientas pueden implementarse de manera avanzada y efectiva.
