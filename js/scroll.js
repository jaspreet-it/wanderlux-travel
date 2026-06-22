let allThings = document.querySelectorAll(".fade");

function showStuff() {
    for (let i = 0; i < allThings.length; i++) {
        let topThing = allThings[i].getBoundingClientRect().top;
        let screenSize = window.innerHeight;

        if (topThing < screenSize - 80) {
            allThings[i].classList.add("show");
        }
    }
}

window.addEventListener("scroll", showStuff);
window.addEventListener("load", showStuff);
