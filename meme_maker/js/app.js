const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // 일종의 붓
canvas.width = 800;
canvas.height = 800;

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
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", canclePainting);
canvas.addEventListener("mouseleace", canclePainting); //마우스가 canvas떠났을 경우