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

// Loading Screen
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const loadingText = document.getElementById('loadingText');
    const phrases = ['Initializing...', 'Loading vault...', 'Preparing memories...', 'Almost there...'];
    let i = 0;

    const interval = setInterval(() => {
        loadingText.textContent = phrases[i++ % phrases.length];
    }, 700);

    setTimeout(() => {
        clearInterval(interval);
        loader.style.opacity = '0';
        loader.style.pointerEvents = 'none';
    }, 2800);
});
function updateClock(){

    const now = new Date();

    document.getElementById("date").innerHTML =
        now.toLocaleDateString("en-US",{
            weekday:"long",
            year:"numeric",
            month:"long",
            day:"numeric"
        });

    document.getElementById("clock").innerHTML =
        now.toLocaleTimeString("en-US");

}

setInterval(updateClock,1000);

updateClock();