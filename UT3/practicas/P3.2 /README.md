# **P3.2 - Práctica Integral: Portfolio Personal**

- [**P3.2 - Práctica Integral: Portfolio Personal**](#p32---práctica-integral-portfolio-personal)
  - [**1. Descripción General**](#1-descripción-general)
  - [**2. Publicación en GitHub Pages**](#2-publicación-en-github-pages)
  - [**3. Rúbrica de Evaluación**](#3-rúbrica-de-evaluación)
  - [**4. Entrega**](#4-entrega)
  - [**5. Inspiración**](#5-inspiración)

## **1. Descripción General**

Crear un portfolio personal como programadores frontend para demostrar las habilidades aprendidas durante el trimestre en CSS, SASS y diseño de interfaces. El proyecto incluirá:

1. **Prototipo en Figma**:

   - Comenzaremos creando una página `Referencias` donde podemos poner cualquier fuente de inspiración: capturas de otros portfolios, paletas de colores que nos gusten, fuentes que nos inspiren, plugins de JS que nos puedan ayudar. Lo que aparece en esta página no tiene por qué acabar en el diseño final, es solo inspiración e ideas
   - `Sistema de diseño`: paleta de colores, tipografías, iconos.
   - No olvidar crear las **Variables** en Figma en **distintas colecciones** para colores, fuentes, espaciados y tamaños. Dentro de cada colección las variables están divididas en categorías que se definen usando el caracter `/` por ejemplo en `Fuentes` encontraremos `font-weight/h1-bold` que su valor puede ser `800`
   - Diseño para escritorio y móvil. Crearlos en dos páginas distintas. Los diseños se crean en base a las variables. Es decir cuando pongamos un color, font family, font weight, font size etc, no pondremos su valor absoluto estático sino que pondremos la referencia a la variable.
   - Exportar todas las variables en formato `SASS` para usarlas en nuestro diseño. Las pegaremos en el fichero de parciales `_variables.scss`.

2. **Desarrollo del Portfolio**:

   - Uso de Vite (JS vanilla) para compilar y servir el proyecto.
   - Organización modular en SASS:
     - `main.scss` como archivo principal.
     - Parciales: `_variables.scss`, `_mixins.scss`, `_globals.scss`, y un SASS por cada componente principal.
   - Diseño responsivo con breakpoints manejado mediante un `mixin` y un mapa de SASS donde tendremos declarados dichos breakpoints.

3. **Publicación**:

   - Subir el proyecto a GitHub y publicarlo en **GitHub Pages**.
   - Crear un archivo `README.md` en el repositorio que incluya:
     - Enlace al prototipo en Figma.
     - Enlace a la página desplegada en GitHub Pages.

4. **Requisito Extra**:
   - Implementar una **librería de JavaScript** (por ejemplo, GSAP, Swiper, AOS) que aporte dinamismo al portfolio.

---

## **2. Publicación en GitHub Pages**

1. Crear un repositorio en GitHub y subir el proyecto.
2. Configurar GitHub Pages:
   - En la pestaña de configuración del repositorio, seleccionar la rama y carpeta donde está la compilación (`/docs`).
3. Crear un archivo `README.md` con los enlaces requeridos.
4. Asegurarse de que el portfolio sea accesible desde el enlace proporcionado por GitHub Pages.

---

## **3. Rúbrica de Evaluación**

| **Criterio**                       | **Descripción**                                                                                                            | **Puntuación Máxima** |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| **Prototipo en Figma**             | Diseño en Figma completo para escritorio y móvil. Incluye sistema de diseño.                                               | 1.0                   |
| **Coherencia y variables en SASS** | Uso adecuado de paleta de colores y fuentes. Correcta definición de variables organizadas en colecciones.                  | 2.0                   |
| **Estructura SASS modular**        | Uso correcto de parciales (`variables`, `mixins`, etc.) y buena organización.                                              | 1.0                   |
| **Diseño responsivo**              | Correcto uso de breakpoints para asegurar responsividad.                                                                   | 1.0                   |
| **Uso de una librería JS**         | Integración de una librería JS que añada dinamismo al portfolio.                                                           | 1.0                   |
| **GitHub Pages y README.md**       | Proyecto subido y accesible desde GitHub Pages. El README.md incluye enlaces al prototipo en Figma y la página desplegada. | 1.0                   |
| **Calidad del código**             | Código limpio, organizado y siguiendo buenas prácticas de desarrollo.                                                      | 1.0                   |
| **Creatividad**                    | Originalidad y enfoque innovador en el diseño del portfolio.                                                               | 1.0                   |
| **Funcionalidad general**          | Todo el portfolio funciona correctamente (navegación, enlaces, etc.).                                                      | 1.0                   |

**Total: 10 puntos**

---

## **4. Entrega**

Entregaremos solo un enlade a GitHub del proyecto. No te olvides de crear el `README.md` con la información de la práctica, autoría y enlaces requeridos.

## **5. Inspiración**

[25+ Stunning Portfolios with code](https://dev.to/anmolbaranwal/stunning-portfolios-that-will-blow-your-mind-fuel-your-creativity-226o)

---

¡Buena suerte y a por el portfolio perfecto! 🚀
