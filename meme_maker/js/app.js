const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // 일종의 붓
canvas.width = 800;
canvas.height = 800;

const colors = [
    "#2ecc71",
    "#9b59b6",
    "#c0392b",
    "#34495e",
    "#16a085",
    "#d35400",
    "#bdc3c7",
    "#2980b9",
    "#6ab04c",
    "#7ed6df",
];

ctx. lineWidth = 2;
function onClick(e){
    ctx.beginPath(); // 움직일때마다 하나의 선이 각각 변하도록
    ctx.moveTo(0,0);
    const color = colors[Math.floor(Math.random() * colors.length)];
    ctx.strokeStyle = color;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
}

canvas.addEventListener("mousemove", onClick);