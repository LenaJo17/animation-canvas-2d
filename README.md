# 🫧 Simulador de Burbujas en Canvas

## 📌 Descripción del Proyecto

Este proyecto consiste en un simulador de burbujas desarrollado con **HTML5 Canvas y JavaScript**, en el cual se generan múltiples círculos animados que simulan el comportamiento de burbujas o pelotas.

Las burbujas son capaces de:

* Desplazarse en diferentes direcciones
* Rebotar contra los bordes del canvas
* Simular gravedad
* Dispersarse al colisionar con el suelo
* Detenerse de manera natural al perder energía

El objetivo principal es representar una animación interactiva con principios básicos de física.

---

## 🎯 Objetivo

Desarrollar una aplicación visual que permita simular el movimiento de múltiples burbujas utilizando el elemento `<canvas>` de HTML, integrando conceptos como:

* Animación en tiempo real
* Física básica (gravedad y rebote)
* Interacción con el usuario mediante controles HTML

---

## ⚙️ Tecnologías Utilizadas

* HTML5
* CSS3
* JavaScript (ES6)
* Canvas API

---

## 🧠 Funcionamiento del Sistema

### 🔹 Generación de burbujas

El sistema permite generar una cantidad dinámica de burbujas mediante un control HTML. Cada burbuja se crea con:

* Posición inicial (x, y)
* Velocidad en X y Y (dx, dy)
* Radio
* Color aleatorio

---

### 🔹 Animación

Se utiliza `requestAnimationFrame` para actualizar continuamente el canvas, permitiendo una animación fluida.

---

### 🔹 Física implementada

Las burbujas simulan comportamiento físico mediante:

* **Gravedad:** Aumenta la velocidad vertical (dy)
* **Rebote:** Inversión de dirección al tocar bordes
* **Fricción:** Reduce la velocidad con el tiempo
* **Dispersión:** Al rebotar, se agrega variación aleatoria en la dirección horizontal

---

### 🔹 Efectos de salida

Las burbujas pueden generarse desde distintas posiciones:

* Esquinas (superiores e inferiores)
* Parte superior (caen)
* Parte inferior (suben)

Cada tipo de salida modifica la velocidad inicial de las burbujas.

---

## 🎨 Características Visuales

* Efecto tipo vidrio (transparencia)
* Gradiente interno tipo burbuja
* Reflejo de luz
* Animación fluida

---

## 🕹️ Controles

El usuario puede:

* Seleccionar la cantidad de burbujas
* Elegir el tipo de efecto (dirección de salida)
* Ajustar el tamaño del canvas

---

## 📂 Estructura del Proyecto

```
📁 proyecto/
 ├── index.html
 ├── css/
 │    └── styles.css
 ├── js/
 │    └── main.js
 └── assets/
      └── img/
```

---

## 🚀 Cómo ejecutar

1. Descargar o clonar el proyecto
2. Abrir el archivo `index.html` en el navegador
3. Usar los controles para generar burbujas

---

## 📈 Posibles mejoras

* Colisiones entre burbujas
* Interacción con el mouse
* Efectos de sonido
* Modo juego (explotar burbujas)
* Control de gravedad en tiempo real

---

## 👨‍💻 Autor

Proyecto desarrollado por: **[JOLETTE OCHOA]**

---

## 🏁 Conclusión

Este proyecto demuestra cómo es posible crear simulaciones visuales dinámicas utilizando JavaScript y Canvas, integrando conceptos de programación, animación y física básica para generar una experiencia interactiva atractiva.
