# 📱 Apuntes sobre Media Queries en CSS

## 🧩 ¿Qué son las Media Queries?

Las **Media Queries** permiten aplicar estilos CSS de forma **condicional**, dependiendo de las características del dispositivo o del tamaño de la pantalla.

Sirven para hacer que una web sea **responsive**, adaptándose a diferentes resoluciones.

---

## 🧠 Sintaxis básica

    @media (condición) {
      /* Estilos aplicados si se cumple la condición */
    }

Por ejemplo:

    @media (max-width: 600px) {
      body {
        background-color: lightblue;
      }
    }

👉 Si el ancho de la pantalla es **menor o igual a 600px**, el fondo será azul claro.

---

## 📐 Tipos de condiciones más comunes

- `max-width`: se aplica **hasta** cierto ancho máximo.
- `min-width`: se aplica **desde** cierto ancho mínimo.
- También existen otras propiedades como `orientation`, `resolution`, `color`, etc.

Ejemplo con orientación:

    @media (orientation: landscape) {
      body {
        font-size: 18px;
      }
    }

---

## 🧭 Estrategias de diseño responsive

Existen dos formas principales de organizar las media queries:

### 1️⃣ Mobile First (recomendada)

- Se empieza diseñando para **móviles (pantallas pequeñas)**.
- Luego se van **añadiendo estilos** para pantallas más grandes con `min-width`.

#### Ejemplo:

    /* Estilos base: móviles */
    body {
      font-size: 16px;
      background: white;
    }

    /* Tablet */
    @media (min-width: 768px) {
      body {
        font-size: 18px;
      }
    }

    /* Escritorio */
    @media (min-width: 1024px) {
      body {
        font-size: 20px;
      }
    }

🟢 Ventajas:

- Más eficiente para dispositivos móviles (menos CSS).
- Facilita el crecimiento progresivo del diseño.

---

### 2️⃣ Desktop First

- Se diseña primero para **pantallas grandes**.
- Luego se **ajustan los estilos hacia pantallas más pequeñas** con `max-width`.

#### Ejemplo:

    /* Estilos base: escritorio */
    body {
      font-size: 20px;
      background: lightgray;
    }

    /* Tablet */
    @media (max-width: 1024px) {
      body {
        font-size: 18px;
      }
    }

    /* Móvil */
    @media (max-width: 768px) {
      body {
        font-size: 16px;
      }
    }

🔵 Ventajas:

- Puede ser útil si el diseño principal está pensado para escritorio.
- Más intuitivo para proyectos antiguos o legacy.

---

## 🎯 Recomendaciones finales

- Usa **Mobile First** siempre que sea posible.
- Ordena las media queries de menor a mayor tamaño.
- Prueba tus diseños en varios dispositivos o usando las herramientas de desarrollo del navegador.
- Usa unidades relativas (`em`, `rem`, `%`, `vh`, `vw`) para una mejor adaptación.

---

## 🧩 Bonus: Media Queries combinadas

Puedes combinar condiciones con `and`, `not` o `only`:

    @media (min-width: 600px) and (max-width: 900px) {
      .container {
        background: coral;
      }
    }

Esto se aplicará **solo entre 600px y 900px**.

---

✍️ **Resumen rápido**

| Estrategia    | Propiedad   | Sentido de diseño   | Ejemplo                     |
| ------------- | ----------- | ------------------- | --------------------------- |
| Mobile First  | `min-width` | de pequeño → grande | `@media (min-width: 768px)` |
| Desktop First | `max-width` | de grande → pequeño | `@media (max-width: 768px)` |

---
