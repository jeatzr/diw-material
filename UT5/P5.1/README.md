# Práctica: Estilado de componentes React con Tailwind CSS

## Objetivo

El objetivo de esta práctica es que el alumnado aprenda a **estilar distintos componentes de React utilizando Tailwind CSS**, comprendiendo el uso de clases utilitarias, estados (`hover`, `focus`, `disabled`), diseño responsive y coherencia visual entre componentes.

---

## Contexto

Dispones de una aplicación React ya creada (por ejemplo con Vite o Create React App) que **ya tiene Tailwind CSS configurado**.

La práctica se centra **exclusivamente en el estilado**, no en la lógica compleja.

La aplicación representa un pequeño **panel de usuario**.

---

## Componentes a estilar

### 1. Botón reutilizable (`Button.jsx`)

Crea y estila un componente botón reutilizable que acepte las siguientes variantes mediante props:

- `variant="primary"`
- `variant="secondary"`
- `variant="danger"`

#### Requisitos de estilo

- Bordes redondeados
- Diferente color de fondo según la variante
- Efecto `hover`
- Efecto `focus` accesible
- Estado `disabled` visible

---

### 2. Tarjeta de usuario (`UserCard.jsx`)

Componente que muestra la información de un usuario:

- Avatar
- Nombre
- Email
- Botón de acción

#### Requisitos de estilo

- Diseño tipo _card_
- Sombra suave
- Padding consistente
- Uso de Flexbox para alineación
- Diseño responsive:
  - Columna en móvil
  - Fila en pantallas grandes

---

### 3. Formulario de login (`LoginForm.jsx`)

Formulario con:

- Input de email
- Input de contraseña
- Botón de envío

#### Requisitos de estilo

- Inputs con borde y `focus` visible
- Espaciado vertical adecuado
- Mensaje de error simulado (solo visual)
- Botón alineado correctamente

---

### 4. Barra de navegación (`Navbar.jsx`)

Barra de navegación superior con:

- Logo o nombre de la aplicación
- Enlaces de navegación

#### Requisitos de estilo

- Fondo fijo
- Distribución con Flexbox
- Enlaces con efecto `hover`
- Diseño responsive (menú horizontal)

---

## Requisitos generales

- Usar **exclusivamente Tailwind CSS**
- No usar archivos CSS tradicionales
- Evitar repetir clases innecesarias
- Mantener coherencia visual entre componentes
- Usar clases responsive (`sm`, `md`, `lg`)
- Código limpio y bien organizado

---

## Entregables

- Repositorio con el proyecto
- Componentes correctamente estilados
- Archivo `README.md` breve explicando:
  - Decisiones de diseño
  - Componentes reutilizables creados

---

## Criterios de evaluación

| Criterio                         | Puntuación |
| -------------------------------- | ---------- |
| Uso correcto de Tailwind CSS     | 30%        |
| Estados (hover, focus, disabled) | 20%        |
| Diseño responsive                | 20%        |
| Coherencia visual                | 20%        |
| Organización del código          | 10%        |

---

## Extra (opcional)

- Implementar modo oscuro con Tailwind
- Añadir animaciones suaves (`transition`, `duration`)
- Uso de `clsx`, `classnames` o similar para manejar variantes

---

💡 **Consejo:** piensa los componentes como piezas reutilizables, no como estilos aislados.
