const images = [ // array[]
    "https://cdn.pixabay.com/photo/2022/08/18/15/17/mountain-7395141__340.jpg",
    "https://cdn.pixabay.com/photo/2022/09/26/15/02/mountains-7480902__340.jpg",
    "https://cdn.pixabay.com/photo/2022/10/01/02/31/sunset-7490522__340.jpg",
    "https://cdn.pixabay.com/photo/2022/09/14/06/17/rowing-7453508__340.jpg",
    "https://cdn.pixabay.com/photo/2022/09/21/02/28/hummingbird-7469232__340.jpg",
    "https://cdn.pixabay.com/photo/2022/09/08/20/58/sea-7441916__340.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
// 랜덤으로 이미지 변경
// Math.random() 0부터 1사이 무작위의 값을 반환해줌
// Math.floor() 내림
// Math.ceil() 올림
// Math.round() 반올림
const bgImage = document.createElement('img');
// img 태그 생성

bgImage.src = `${chosenImage}`;

document.body.appendChild(bgImage);
// body에 img 태그 삽입 
// appendChild() 함수 안의 경로에 정의한 값을 가장 뒤에서 기입함 
// prependChild() 반대로 앞에서 기입