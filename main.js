import { createStore, combineReducers } from 'redux';

let input = document.getElementById('input')
let addEmail = document.getElementById('addEmail')
let addPhoneNumber = document.getElementById('addPhoneNumber')
let lista = document.getElementById('lista')
let emailList = document.getElementById('emailsList')
let phoneNumber = document.getElementById('phoneNumList')
let todos = {
    0: {
        text:"Leer",
        done:false
    },
    1:{
        text:"Cenar",
        done:true
    },
    2:{
        text:"Trabajar",
        done: false
    }
};

function drawPhoneNumbers(){
    phoneNumber.innerHTML = ""
    let numbers = store.getState().numbers
    numbers.map(number =>{
        let li = document.createElement('li')
        li.innerHTML=`
        <span>${number}</span>
        <span id="${number}">X</span>
    `
    setPhoneClickListener(li)
    phoneNumber.appendChild(li)
        
    })
}

function setPhoneClickListener(li){
    li.addEventListener('click', e => {
       let number = e.target.id
       store.dispatch({
           type:"DELETE_PHONENUMBER",
           number
       })

    })
}



function drawEmails(){
    emailList.innerHTML = ""
    let emails = store.getState().emails
    emails.map(email=>{
    let li = document.createElement('li')
    li.innerHTML = `
    <span>${email}</span>
    <span id="${email}">X</span>
    `
    setEmailClickListener(li)
    emailList.appendChild(li)
})
}

function setEmailClickListener(li){
    li.addEventListener('click', e => {
       let email = e.target.id
       store.dispatch({
           type:"DELETE_EMAIL",
           email
       })

    })
}


function drawTodos(){
    lista.innerHTML= "";
    todos = store.getState().todos;

    for(let key in todos){
        let li = document.createElement('li');
        let classDone = todos[key].done ? "done" : "";
        li.innerHTML = `
        <span id="${key}" class="${classDone}">${todos[key].text}</span>
        <span data-id=${key} data-action="delete">X</span>
        `;
        setListeners(li);
    lista.appendChild(li);
    }
}

function setListeners(li){
    li.addEventListener('click', e => {
        if(e.target.getAttribute('data-action') === "delete"){
            let key = e.target.getAttribute('data-id');
            store.dispatch({
                type:"DELETE_TODO",
                id: key
            });
            
            return;
        }
        let key = e.target.id
        todos[key].done = !todos[key].done
        store.dispatch({
            type:"UPDATE_TODO",
            todo: todos[key]
        });
        
    })
}



//listeners
input.addEventListener('keydown', e => {
    if(e.key === "Enter"){
        let text = e.target.value;
        let todo = {text, done:false}
        store.dispatch({
            type:"ADD_TODO",
              todo
        })
       
    }
});

addEmail.addEventListener('keydown', e => {
    if(e.key === "Enter"){
        let email = e.target.value
        e.target.value = ""
        store.dispatch({
         type: "ADD_EMAIL",
         email       
        })
    }
})

addPhoneNumber.addEventListener('keydown', e => {
    if(e.key === "Enter"){
        let number = e.target.value
        e.target.value = ""
        store.dispatch({
         type: "ADD_PHONENUMBER",
         number       
        })
    }
})




//REDUX


function phoneNumberReducer(state=[], action){
    switch(action.type){
        case "ADD_PHONENUMBER":
            return[action.number, ...state]
        case "DELETE_PHONENUMBER":
            return[...state.filter(number => number !== action.number)]
        default:
            return state
    }
}


function emailsReducer(state=[], action){
    switch(action.type){
        case "ADD_EMAIL":
            return[action.email, ...state]
        case "DELETE_EMAIL": 
            return[...state.filter(mail => mail !== action.email)]
        default:
            return state   
    }
}


function todosReducer(state = {}, action){
    switch(action.type) {
        case "ADD_TODO":
            action.todo["id"] = Object.keys(state).length
            return{...state, [Object.keys(state).length]:action.todo};
        case "UPDATE_TODO":
            return {...state,[action.todo.id] : action.todo}
        case "DELETE_TODO":
            delete state[action.id]
            return{...state}
        default:
            return state;


    }
}

let rootReducer = combineReducers({
    todos: todosReducer,
    emails: emailsReducer,
    numbers: phoneNumberReducer

})

let store = createStore(rootReducer, {
    numbers:["555999000"],
    emails:["direcciondecorreo@mail.com"],
    todos:{
      0: {
        text:"Tarea 1",
        done: true,
        id: 0
      } 
    }
});


store.subscribe(()=>{
    drawTodos()
    drawEmails()
    drawPhoneNumbers()
});

drawTodos();
drawEmails();
drawPhoneNumbers();