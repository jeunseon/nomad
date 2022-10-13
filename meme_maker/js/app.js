const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // 일종의 붓
canvas.width = 800;
canvas.height = 800;

ctx. lineWidth = 2;
function onClick(e){
    e.preventDefault();
    ctx.moveTo(0,0);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
}

canvas.addEventListener("click", onClick);