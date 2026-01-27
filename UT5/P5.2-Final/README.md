# Práctica Final: Diseño y Desarrollo de la Home Corporativa

## Contexto

Esta práctica final da continuidad al proyecto previo de **página web para una empresa de marketing**. Manteniendo los **mismos grupos y la misma empresa**, el alumnado deberá diseñar y programar el **prototipo funcional de la home** utilizando **React** y **Tailwind CSS**.

El objetivo es simular un flujo de trabajo profesional entre **diseño de interfaz**, **sistema de diseño** y **desarrollo front-end basado en componentes reutilizables**.

---

## Objetivo general

Diseñar y desarrollar la **home de una empresa de marketing** aplicando:

- Componentización en React
- Estilos con Tailwind CSS
- Un pequeño **sistema de diseño** coherente
- Reutilización de componentes
- Insertar imágenes y vídeos generados en el tema anterior.
- Implementación de **modo claro / modo noche**
- Buenas prácticas de estructura y legibilidad del código

---

## Requisitos técnicos

### Tecnologías obligatorias

- React (Vite o CRA)
- Tailwind CSS
- HTML semántico

### Estructura mínima del proyecto

```txt
/src
 ├── components/
 │    ├── ui/
 │    └── layout/
 ├── pages/
 ├── data/
 ├── App.jsx
 └── main.jsx
```

---

## Sistema de diseño (obligatorio)

Cada grupo deberá definir y documentar un **mini sistema de diseño**, que se aplicará de forma consistente en toda la home.

Debe incluir como mínimo:

### 🎨 Colores

- Color primario
- Color secundario
- Color de acento
- Colores neutros (fondo, texto)
- Versiones para **modo claro y modo oscuro**

Definidos en `tailwind.config.js`.

### 🔤 Tipografía

- Tipografía principal
- Jerarquía clara: h1, h2, h3, body, small

### 📐 Espaciados y layout

- Uso coherente de márgenes y paddings
- Sistema de contenedores (`max-w`, `mx-auto`, etc.)

### 🧩 Componentes UI base

Al menos:

- Botón (con variantes: primary / secondary)
- Título / Heading
- Contenedor / Section

---

## Componentes reutilizables

La home **NO puede estar maquetada directamente en `App.jsx`**.

Se deben crear y reutilizar componentes como:

- Navbar
- Hero
- Section
- Card (servicios, ventajas, etc.)
- CTA (Call to Action)
- Footer

Cada componente debe:

- Recibir props
- Ser reutilizable
- Tener una única responsabilidad

---

## Modo noche (obligatorio)

La aplicación deberá incluir **modo claro y modo oscuro**, implementado con Tailwind CSS.

Requisitos mínimos:

- Uso de la variante `dark:` de Tailwind
- Contraste correcto en ambos modos
- El cambio de modo puede ser:
  - automático según el sistema, o
  - manual mediante un botón

No es necesario guardar la preferencia del usuario.

---

## Contenido mínimo de la Home

1. **Header / Navbar**
   - Logo
   - Navegación (aunque no funcione)
   - Indicador o control de modo noche (si es manual)

2. **Hero Section**
   - Título principal
   - Texto descriptivo
   - CTA

3. **Servicios / Propuesta de valor**
   - Al menos 3 elementos
   - Uso de cards reutilizables

4. **Sección de confianza**
   - Datos, métricas o clientes (mock data)

5. **CTA final**
   - Llamada clara a la acción

6. **Footer**
   - Información básica de la empresa

---

## Requisitos de diseño

- Diseño coherente con la identidad de la empresa creada previamente
- Uso correcto de jerarquía visual
- Diseño responsive (mobile + desktop)
- Implementación correcta de modo claro / oscuro
- Insertar ficheros multimedia
- No usar componentes externos (no shadcn, no MUI, etc.)

---

## Evaluación

La práctica se evaluará sobre **10 puntos**, con **mayor peso en la programación y la componentización**.

---

### 🧱 1. Componentización y lógica en React (4 puntos)

| Nivel | Descripción                                                                                                  |
| ----- | ------------------------------------------------------------------------------------------------------------ |
| **4** | Componentes bien abstraídos, reutilizables, con props claras. Estructura limpia y sin duplicación de código. |
| **3** | Componentes correctos y reutilizables, con pequeños problemas de abstracción.                                |
| **2** | Uso básico de componentes, con duplicación o responsabilidades mezcladas.                                    |
| **1** | Componentes poco reutilizables o mal definidos.                                                              |
| **0** | Maquetación directa sin uso real de componentes.                                                             |

---

### 🎨 2. Uso de Tailwind CSS y modo noche (3 puntos)

| Nivel | Descripción                                                                       |
| ----- | --------------------------------------------------------------------------------- |
| **3** | Uso consistente de Tailwind, responsive correcto y modo oscuro bien implementado. |
| **2** | Tailwind bien usado, pero modo oscuro incompleto o con fallos de contraste.       |
| **1** | Uso básico de Tailwind, responsive o dark mode deficientes.                       |
| **0** | Uso incorrecto de Tailwind o sin modo noche.                                      |

---

### 🧩 3. Sistema de diseño (2 puntos)

| Nivel | Descripción                                                          |
| ----- | -------------------------------------------------------------------- |
| **2** | Sistema de diseño claro, coherente y bien aplicado.                  |
| **1** | Sistema de diseño definido pero poco consistente o poco documentado. |
| **0** | No existe sistema de diseño identificable.                           |

---

### 🧠 4. Código y estructura del proyecto (1 punto)

| Nivel | Descripción                                       |
| ----- | ------------------------------------------------- |
| **1** | Estructura clara de carpetas y código legible.    |
| **0** | Proyecto desordenado o con estructura deficiente. |

---

**Total: 10 puntos**

---

## Entrega

- Repositorio en GitHub
- README con:
  - Descripción del proyecto
  - Capturas de la home en **modo claro y modo oscuro**
  - Explicación breve del sistema de diseño

---

## Extra (opcional)

- Animaciones simples (hover, transitions)
- Variantes avanzadas de componentes
- Persistencia del modo noche

---

## Importante

No se evalúa el backend ni la funcionalidad real de los enlaces.  
El foco principal está en **programación, componentización y calidad del código front-end**, sin descuidar el diseño.
