const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Tamaño inicial
canvas.width = 800;
canvas.height = 400;

let arrayCircles = [];

// 🎨 Generador de colores aleatorios
function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgba(${r}, ${g}, ${b}, 0.4)`;
}

class Circle {
  constructor(x, y, radius, text, dx, dy, color) {
    this.posX = x;
    this.posY = y;
    this.radius = radius;
    this.text = text;

    this.dx = dx;
    this.dy = dy;

    this.gravity = 0.3;
    this.friction = 0.75;

    this.color = color;

    this.stopped = false;
  }

  draw(context) {
    context.beginPath();

    context.fillStyle = this.color;
    context.strokeStyle = "rgba(255,255,255,0.5)";
    context.lineWidth = 2;

    context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
    context.fill();
    context.stroke();

    let gradient = context.createRadialGradient(
      this.posX - this.radius / 3,
      this.posY - this.radius / 3,
      this.radius * 0.1,
      this.posX,
      this.posY,
      this.radius
    );

    gradient.addColorStop(0, "rgba(255,255,255,0.8)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");

    context.fillStyle = gradient;
    context.beginPath();
    context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
    context.fill();

    context.beginPath();
    context.arc(
      this.posX - this.radius / 3,
      this.posY - this.radius / 3,
      this.radius / 6,
      0,
      Math.PI * 2
    );
    context.fillStyle = "rgba(255,255,255,0.6)";
    context.fill();

    context.fillStyle = "white";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "14px Arial";
    context.fillText(this.text, this.posX, this.posY);

    context.closePath();
  }

  update(context) {
    this.draw(context);

    if (this.stopped) return;

    // gravedad
    this.dy += this.gravity;

    // suelo
    if (this.posY + this.radius >= canvas.height) {
      this.posY = canvas.height - this.radius;
      this.dy *= -this.friction;

      if (Math.abs(this.dy) < 1) {
        this.dy = 0;
        this.dx = 0;

        if (this.posX < 50) this.posX += 50;
        if (this.posX > canvas.width - 50) this.posX -= 50;

        this.stopped = true;
      }
    }

    // techo
    if (this.posY - this.radius <= 0) {
      this.posY = this.radius;
      this.dy *= -this.friction;
    }

    // lados
    if (this.posX + this.radius >= canvas.width) {
      this.posX = canvas.width - this.radius;
      this.dx *= -this.friction;
    }

    if (this.posX - this.radius <= 0) {
      this.posX = this.radius;
      this.dx *= -this.friction;
    }

    this.dx *= 0.95;

    if (Math.abs(this.dx) < 0.1) {
      this.dx = 0;
    }

    this.posX += this.dx;
    this.posY += this.dy;
  }
}

// 🎯 Generar con efectos
function generarCirculos() {
  const cantidad = document.getElementById("numCircles").value;
  const efecto = document.getElementById("tipoEfecto").value;

  arrayCircles = [];

  for (let i = 0; i < cantidad; i++) {
    let radius = Math.floor(Math.random() * 30 + 15);

    let x, y, dx, dy;

    switch (efecto) {
      case "top-left":
        x = radius;
        y = radius;
        dx = Math.random() * 25 + 15; // 🔥 MÁS FUERZA
        dy = Math.random() * 2;
        break;

      case "top-right":
        x = canvas.width - radius;
        y = radius;
        dx = -(Math.random() * 25 + 15); // 🔥 MÁS FUERZA
        dy = Math.random() * 2;
        break;

      case "bottom-left":
        x = radius;
        y = canvas.height - radius;
        dx = Math.random() * 25 + 15;; // 🔥 MÁS FUERZA
        dy = -(Math.random() * 20 + 8);
        break;

      case "bottom-right":
        x = canvas.width - radius;
        y = canvas.height - radius;
        dx = -(Math.random() * 25 + 15); // 🔥 MÁS FUERZA
        dy = -(Math.random() * 20 + 8);
        break;

      case "top":
        x = Math.random() * canvas.width;
        y = radius;
        dx = (Math.random() - 0.5) * 6;
        dy = Math.random() * 3 + 1;
        break;

      case "bottom":
        x = Math.random() * canvas.width;
        y = canvas.height - radius;
        dx = (Math.random() - 0.5) * 6;
        dy = -(Math.random() * 20 + 6);
        break;
    }

    let color = randomColor();

    let circle = new Circle(x, y, radius, i + 1, dx, dy, color);
    arrayCircles.push(circle);
  }
}

// 🔧 Cambiar tamaño
function cambiarCanvas() {
  const w = document.getElementById("canvasWidth").value;
  const h = document.getElementById("canvasHeight").value;

  if (w > 0 && h > 0) {
    canvas.width = w;
    canvas.height = h;
  }
}

// 🎬 Animación
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  arrayCircles.forEach(c => c.update(ctx));
}

animate();

// Inicial
generarCirculos();