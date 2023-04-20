document.getElementById("cards").onmousemove = e => {
    for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    }
};

var typed = new Typed(".autotype", {
    strings: ["Creative", "Minimalistic", "Relentless"],
    typeSpeed: 140,
    backSpeed: 80,
    loop: true
});