const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // 일종의 붓
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;

let isPainting = false;

function onMove(e){ // 드래그한곳까지 선을 그려줌
    if(isPainting){
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(e.offsetX, e.offsetY); // isPainting===false일 경우
}
function startPainting(){
    // 마우스를 눌렀을때 이벤트
    isPainting = true;
}
function canclePainting(){
    // 마우스 땠을때 이벤트
    isPainting = false;
    ctx.beginPath();
}
function onLineWidthChange(e){
    console.log(e.target.value);
    ctx.lineWidth = e.target.value;
}
function onColorChange(e){
    console.log(e.target.value);
    ctx.strokeStyle = e.target.value;
    ctx.fillStyle = e.target.value;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", canclePainting);
canvas.addEventListener("mouseleace", canclePainting); //마우스가 canvas떠났을 경우

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);