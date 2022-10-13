const modeBtn = document.getElementById("mode-btn");
const colorOptions = Array.from(document.getElementsByClassName("color-option")); // array로 만듬
const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // 일종의 붓
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;

let isPainting = false;
let isFilling = false;

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
function onColorClick(e){
    console.log(e.target.dataset.color);
    const colorValue = e.target.dataset.color;
    ctx.strokeStyle = e.target.dataset.color;
    ctx.fillStyle = e.target.dataset.color;
    color.value = colorValue; // input박스의 색상도 변경되도록
}
function onModeClick(){
    if(isFilling){
        isFilling = false;
        modeBtn.innerText = "Fill"
    }else{
        isFilling = true;
        modeBtn.innerText = "Draw"
    }
}
function onCanvasClick(e){
    if(isFilling){
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", canclePainting);
canvas.addEventListener("mouseleace", canclePainting); //마우스가 canvas떠났을 경우
canvas.addEventListener("click", onCanvasClick);
lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOptions.forEach(color => color.addEventListener("click", onColorClick));

modeBtn.addEventListener("click", onModeClick);