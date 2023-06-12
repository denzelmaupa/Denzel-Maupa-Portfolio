const toggleNav = () => {
    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : true;
};

$.get("nav.html", function (data) {
    $("#nav-placeholder").replaceWith(data);
});

$(function () {
    $("#footer").load("footer.html");
});

window.addEventListener("scroll", () => {
    let value = window.scrollY;

    denzel.style.width = value * .1 + "%";
    denzelphone.style.width = value * .2 + "%";

});

