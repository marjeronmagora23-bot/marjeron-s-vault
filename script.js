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
function revealSections(){

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;

        const top = section.getBoundingClientRect().top;

        if(top < windowHeight - 100){
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();
// =========================
// GALLERY FILTERS
// =========================

const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        galleryItems.forEach(item => {

            const category = item.dataset.category;

            if (filter === "all" || category === filter) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});


// =========================
// FULLSCREEN PHOTO VIEWER
// =========================

const photoViewer = document.getElementById("photoViewer");
const viewerImage = document.getElementById("viewerImage");
const closeViewer = document.getElementById("closeViewer");

const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        viewerImage.src = image.src;

        photoViewer.classList.add("active");

    });

});


if (closeViewer) {

    closeViewer.addEventListener("click", () => {

        photoViewer.classList.remove("active");

    });

}


if (photoViewer) {

    photoViewer.addEventListener("click", (event) => {

        if (event.target === photoViewer) {

            photoViewer.classList.remove("active");

        }

    });

}


// Close with ESC

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape" && photoViewer) {

        photoViewer.classList.remove("active");

    }

});