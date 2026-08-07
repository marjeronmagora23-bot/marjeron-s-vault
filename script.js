const loader=document.getElementById("loader");

const loadingText=document.getElementById("loadingText");

const messages=[

"Initializing...",

"Loading Memories...",

"Decrypting Archive...",

"Access Granted..."

];

let i=0;

const interval=setInterval(()=>{

i++;

if(i<messages.length){

loadingText.textContent=messages[i];

}

},700);

setTimeout(()=>{

clearInterval(interval);

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},1000);

},3200);