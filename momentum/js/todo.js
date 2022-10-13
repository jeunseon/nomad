const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){ // JSON은 object, array를 string으로 바꿈
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e){ // 삭제버튼
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    // parseInt()는 문자열을 숫자로 바꿈
    saveToDos();
    // saveToDos를 불러서 filter한것 없이 array가 나타남
}

function paintToDo(newToDo){ // toDoList 내용 추가
    const li = document.createElement('li');
    li.id = newToDo.id;
    const span = document.createElement('span');
    span.innerText = newToDo.text;
    const button = document.createElement('button');
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(e){ // toDoList submit 
    e.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    // 입력한 뒤 input 칸 비우기
    const newTodoObj = {
        text: newToDo,
        id : Date.now(), //밀리초로 아이디 주기. 삭제하는것을 구분하기 위해
    };
    toDos.push(newTodoObj);
    // array에 밀어넣기
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    // string을 자바스크립트에서 사용 가능한 object array로 바꿈
    toDos = parsedToDos;
    // 새로고침해도 이전것도 화면에 표시되도록
    parsedToDos.forEach(paintToDo);
    // localStorage에 있는것을 화면에 출력
}

