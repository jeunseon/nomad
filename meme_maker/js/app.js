const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // 일종의 붓
canvas.width = 800;
canvas.height = 800;
/* 
// house
ctx.fillRect(200, 200, 50, 200);
ctx.fillRect(400, 200, 50, 200);
ctx.fillRect(300, 300, 50, 100); // 문
ctx.fillRect(200, 200, 200, 20); // 천장
// 지붕
ctx.moveTo(200, 200);
ctx.lineTo(325, 100);
ctx.lineTo(450, 200);
ctx.fill();
 */

// 사람
ctx.fillRect(215-40, 200-30, 15, 100); //팔
ctx.fillRect(350-40, 200-30, 15, 100);
ctx.fillRect(260-40, 200-30, 60, 200); // 몸통

// arc(x, y, radius(반지름), startAngle, endAngle)
ctx.arc(250, 100, 50, 0, 2*Math.PI); // 얼굴
ctx.fill();

// 눈
ctx.beginPath(); // 원의 색상을 바꾸기 위해 path 새로 시작
ctx.fillStyle = "#fff";
ctx.arc(260+10, 80+10, 8, Math.PI, 2*Math.PI);
ctx.arc(220+10, 80+10, 8, Math.PI, 2*Math.PI);
// 2*Math.PI 로 끝나야 완벽한 원이 된다
ctx.fill();