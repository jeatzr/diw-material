# 🌐 **Frameworks CSS: Desde la Base Hasta la Maestría en Tailwind CSS**

## 📋 **Índice**

- [🌐 **Frameworks CSS: Desde la Base Hasta la Maestría en Tailwind CSS**](#-frameworks-css-desde-la-base-hasta-la-maestría-en-tailwind-css)
  - [📋 **Índice**](#-índice)
  - [🖥 **Usando Tailwind CSS en React**](#-usando-tailwind-css-en-react)
    - [🔧 **Configuración de Tailwind en un Proyecto React**](#-configuración-de-tailwind-en-un-proyecto-react)
      - [**1️⃣ Crear un Proyecto React (si no lo tienes aún)**](#1️⃣-crear-un-proyecto-react-si-no-lo-tienes-aún)
      - [**2️⃣ Instalar Tailwind CSS**](#2️⃣-instalar-tailwind-css)
      - [**3️⃣ Configurar Tailwind en `tailwind.config.js`**](#3️⃣-configurar-tailwind-en-tailwindconfigjs)
      - [**4️⃣ Agregar Tailwind a los Estilos Globales**](#4️⃣-agregar-tailwind-a-los-estilos-globales)
  - [🎨 **Creación de Componentes Estilizados con Tailwind**](#-creación-de-componentes-estilizados-con-tailwind)
    - [**Ejemplo de un Botón Estilizado con Tailwind**](#ejemplo-de-un-botón-estilizado-con-tailwind)
  - [🚀 **Ejemplo de Aplicación Completa con Tailwind y React**](#-ejemplo-de-aplicación-completa-con-tailwind-y-react)
    - [**Explicación del Código:**](#explicación-del-código)

---

## 🖥 **Usando Tailwind CSS en React**

Tailwind CSS es una excelente opción para proyectos con **React**, ya que permite estilizar los componentes de forma rápida y eficiente sin necesidad de escribir CSS en archivos separados.

### 🔧 **Configuración de Tailwind en un Proyecto React**

Para instalar **Tailwind CSS** en un proyecto de React creado con Vite o Create React App (CRA), sigue estos pasos:

#### **1️⃣ Crear un Proyecto React (si no lo tienes aún)**

Si no tienes un proyecto de React, puedes crearlo con:

```bash
npx create-react-app mi-proyecto
cd mi-proyecto
```

O si usas **Vite**, más rápido y optimizado:

```bash
npm create vite@latest mi-proyecto --template react
cd mi-proyecto
```

#### **2️⃣ Instalar Tailwind CSS**

Ejecuta el siguiente comando para instalar Tailwind y sus dependencias:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Este comando generará un archivo de configuración `tailwind.config.js`.

#### **3️⃣ Configurar Tailwind en `tailwind.config.js`**

Edita `tailwind.config.js` para asegurarte de que Tailwind escanea los archivos `.jsx` o `.tsx` de React:

```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

#### **4️⃣ Agregar Tailwind a los Estilos Globales**

En el archivo `index.css` o `src/index.css`, importa Tailwind con:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🎨 **Creación de Componentes Estilizados con Tailwind**

### **Ejemplo de un Botón Estilizado con Tailwind**

Creamos un nuevo componente `Button.jsx` y usamos clases de Tailwind:

```jsx
const Button = ({ text }) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {text}
    </button>
  );
};

export default Button;
```

Luego, importamos y usamos el botón en `App.jsx`:

```jsx
import Button from "./Button";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Button text="Haz clic aquí" />
    </div>
  );
}

export default App;
```

---

## 🚀 **Ejemplo de Aplicación Completa con Tailwind y React**

Creemos una **tarjeta de usuario** (`UserCard.jsx`) usando Tailwind:

```jsx
const UserCard = ({ name, job, avatar }) => {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md p-6 space-y-4">
      <img
        className="w-24 h-24 rounded-full mx-auto"
        src={avatar}
        alt="User avatar"
      />
      <h2 className="text-xl font-bold text-center">{name}</h2>
      <p className="text-gray-500 text-center">{job}</p>
    </div>
  );
};

export default UserCard;
```

Ahora usamos `UserCard` en `App.jsx` con datos dinámicos:

```jsx
import UserCard from "./UserCard";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 space-y-4">
      <UserCard
        name="Juan Pérez"
        job="Desarrollador Frontend"
        avatar="https://i.pravatar.cc/150?img=3"
      />
      <UserCard
        name="María López"
        job="UX Designer"
        avatar="https://i.pravatar.cc/150?img=5"
      />
    </div>
  );
}

export default App;
```

### **Explicación del Código:**

1. `UserCard.jsx` recibe `name`, `job` y `avatar` como props.
2. Se estiliza con **clases de utilidad** de Tailwind.
3. `App.jsx` renderiza múltiples `UserCard` con datos dinámicos.

---
