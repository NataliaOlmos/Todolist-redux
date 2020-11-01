(()=>{"use strict";var e={121:(e,t,n)=>{n.d(t,{Z:()=>r}),e=n.hmd(e);const r=(o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n.g?n.g:e,"function"==typeof(a=o.Symbol)?a.observable?i=a.observable:(i=a("observable"),a.observable=i):i="@@observable",i);var o,i,a}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={id:r,loaded:!1,exports:{}};return e[r](o,o.exports,n),o.loaded=!0,o.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(121),t=function(){return Math.random().toString(36).substring(7).split("").join(".")},r={INIT:"@@redux/INIT"+t(),REPLACE:"@@redux/REPLACE"+t(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+t()}};function o(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function i(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}let a=document.getElementById("input"),u=document.getElementById("addEmail"),d=document.getElementById("addPhoneNumber"),s=document.getElementById("lista"),c=document.getElementById("emailsList"),l=document.getElementById("phoneNumList"),f={0:{text:"Leer",done:!1},1:{text:"Cenar",done:!0},2:{text:"Trabajar",done:!1}};function p(){l.innerHTML="",b.getState().numbers.map((e=>{let t=document.createElement("li");t.innerHTML=`\n        <span>${e}</span>\n        <span id="${e}">X</span>\n    `,function(e){e.addEventListener("click",(e=>{let t=e.target.id;b.dispatch({type:"DELETE_PHONENUMBER",number:t})}))}(t),l.appendChild(t)}))}function h(){c.innerHTML="",b.getState().emails.map((e=>{let t=document.createElement("li");t.innerHTML=`\n    <span>${e}</span>\n    <span id="${e}">X</span>\n    `,function(e){e.addEventListener("click",(e=>{let t=e.target.id;b.dispatch({type:"DELETE_EMAIL",email:t})}))}(t),c.appendChild(t)}))}function y(){s.innerHTML="",f=b.getState().todos;for(let e in f){let t=document.createElement("li"),n=f[e].done?"done":"";t.innerHTML=`\n        <span id="${e}" class="${n}">${f[e].text}</span>\n        <span data-id=${e} data-action="delete">X</span>\n        `,E(t),s.appendChild(t)}}function E(e){e.addEventListener("click",(e=>{if(console.log(e.target),"delete"===e.target.getAttribute("data-action")){let t=e.target.getAttribute("data-id");return void b.dispatch({type:"DELETE_TODO",id:t})}let t=e.target.id;f[t].done=!f[t].done,b.dispatch({type:"UPDATE_TODO",todo:f[t]})}))}a.addEventListener("keydown",(e=>{if("Enter"===e.key){let t={text:e.target.value,done:!1};b.dispatch({type:"ADD_TODO",todo:t})}})),u.addEventListener("keydown",(e=>{if("Enter"===e.key){let t=e.target.value;e.target.value="",b.dispatch({type:"ADD_EMAIL",email:t})}})),d.addEventListener("keydown",(e=>{if("Enter"===e.key){let t=e.target.value;e.target.value="",b.dispatch({type:"ADD_PHONENUMBER",number:t})}}));let b=function t(n,i,a){var u;if("function"==typeof i&&"function"==typeof a||"function"==typeof a&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof i&&void 0===a&&(a=i,i=void 0),void 0!==a){if("function"!=typeof a)throw new Error("Expected the enhancer to be a function.");return a(t)(n,i)}if("function"!=typeof n)throw new Error("Expected the reducer to be a function.");var d=n,s=i,c=[],l=c,f=!1;function p(){l===c&&(l=c.slice())}function h(){if(f)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}function y(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(f)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return p(),l.push(e),function(){if(t){if(f)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,p();var n=l.indexOf(e);l.splice(n,1),c=null}}}function E(e){if(!o(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(f)throw new Error("Reducers may not dispatch actions.");try{f=!0,s=d(s,e)}finally{f=!1}for(var t=c=l,n=0;n<t.length;n++)(0,t[n])();return e}function b(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");d=e,E({type:r.REPLACE})}function m(){var t,n=y;return(t={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function t(){e.next&&e.next(h())}return t(),{unsubscribe:n(t)}}})[e.Z]=function(){return this},t}return E({type:r.INIT}),(u={dispatch:E,subscribe:y,getState:h,replaceReducer:b})[e.Z]=m,u}(function(e){for(var t=Object.keys(e),n={},o=0;o<t.length;o++){var a=t[o];"function"==typeof e[a]&&(n[a]=e[a])}var u,d=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if(void 0===n(void 0,{type:r.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:r.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+r.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(n)}catch(e){u=e}return function(e,t){if(void 0===e&&(e={}),u)throw u;for(var r=!1,o={},a=0;a<d.length;a++){var s=d[a],c=n[s],l=e[s],f=c(l,t);if(void 0===f){var p=i(s,t);throw new Error(p)}o[s]=f,r=r||f!==l}return(r=r||d.length!==Object.keys(e).length)?o:e}}({todos:function(e={},t){switch(t.type){case"ADD_TODO":return t.todo.id=Object.keys(e).length,{...e,[Object.keys(e).length]:t.todo};case"UPDATE_TODO":return{...e,[t.todo.id]:t.todo};case"DELETE_TODO":return delete e[t.id],{...e};default:return e}},emails:function(e=[],t){switch(t.type){case"ADD_EMAIL":return[t.email,...e];case"DELETE_EMAIL":return[...e.filter((e=>e!==t.email))];default:return e}},numbers:function(e=[],t){switch(t.type){case"ADD_PHONENUMBER":return[t.number,...e];case"DELETE_PHONENUMBER":return[...e.filter((e=>e!==t.number))];default:return e}}}),{numbers:["1234567"],emails:["unaema@mail.com"],todos:{0:{text:"crear store",done:!0,id:0}}});b.subscribe((()=>{y(),h(),p()})),y(),h(),p()})()})();