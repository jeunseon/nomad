const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // 일종의 붓
canvas.width = 800;
canvas.height = 800;

ctx.moveTo(50, 50); // 시작 지점. 선을 긋지 않으면서 연필위치 이동
ctx.lineTo(150, 50); // 선을 그으면서 연필위치 이동
ctx.lineTo(150, 150);
ctx.lineTo(50, 150);
ctx.fill();
