let inputValue = document.getElementById("getValue");
let task = document.querySelector(".addTask");
let addBtn = document.getElementById("add");
let section = document.getElementById("section");
let cut = document.querySelector(".cut");

let work = [];
// !function

const addData = (element) => {
  const data = document.createElement("div");
  data.classList.add("addTask");
  data.innerHTML = `<li class="li">${element}</li><button class="remove">delete</button>`;
  section.appendChild(data);
};
// localStorage.clear()

const addToDoList = () => {
  // e.preventDefault()
  const todoList = inputValue.value.trim();
  
  if (todoList!=""&&!work.includes(todoList)) {
    work.push(inputValue.value);
    work = [...new Set(work)];
    console.log(work);
    localStorage.setItem("todo", JSON.stringify(work));
    
    inputValue.value="";
    addData(todoList);
  }
};

const done = () => {
  document.querySelector(".li").style.textDecoration = "line-through";
};

const getData = () => {
  return JSON.parse(localStorage.getItem("todo"));
};
const addTodoListLocalStorage=(work)=>{
  return localStorage.setItem("todo",JSON.stringify(work))
}

work = getData() || [];

const show = () => {
  work.forEach((element) => {
    addData(element);
  });
};
show();

// *event handler
addBtn.addEventListener("click", () => {
  // console.log(inputValue.value);
  // addData();
  addToDoList();
});

const del=(e)=>{
  // console.log(e.target);
  e.preventDefault();
  const toRemove=e.target
  let content =toRemove.previousElementSibling.innerText;
  let parentElement=toRemove.parentElement;
  console.log(content);

  work=work.filter((curtodo)=>{
// console.log(curtodo);
return curtodo !=content.toLowerCase();
  });

addTodoListLocalStorage(work);
parentElement.remove();
}

document.querySelector(".addTask").addEventListener("click",(e)=>{
  e.preventDefault();
  del(e);
})

