const textInput = document.getElementById("text");
const fileInput = document.getElementById("file");
const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const eraserBtn = document.getElementById("eraser-btn");
const colorOptions = Array.from(document.getElementsByClassName("color-option")); // array로 만듬
const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // 일종의 붓

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";
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
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}
function onDestroyClick(e){ //지우지 못하므로 흰색으로 덮어쓰기
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}
function onEraserClick(){
    ctx.strokeStyle = "white";
    isFilling = false;
    modeBtn.innerText = "Fill";
}
function onFileChange(e) {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.src = url;
    image.onload = function () {
      ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      fileInput.value = null;
    };
}
function onDoubleClick(e) {
    const text = textInput.value;
    if (text !== "") {
      ctx.save();
    //   ctx의 현재 상태, 색상, 스타일 등 저장
      ctx.lineWidth = 1;
      ctx.font = "48px 'Press Start 2P'";
      ctx.fillText(text, e.offsetX, e.offsetY);
      ctx.restore();
    //   ctx의 저장된 상태를 가져옴
    }
}

canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", canclePainting);
canvas.addEventListener("mouseleace", canclePainting); //마우스가 canvas떠났을 경우
canvas.addEventListener("click", onCanvasClick);
lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOptions.forEach(color => color.addEventListener("click", onColorClick));

modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);