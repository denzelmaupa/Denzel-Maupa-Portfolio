document.getElementById("cards").onmousemove = e => {
    for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    }
};


const toggleNav = () => {
    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : true;
};

function sendEmail() {
    Email.send({
        Host: "smtp.yourisp.com",
        Username: "username",
        Password: "password",
        To: "denzelmaupa@gmail.com",
        From: document.getElementById("email").value,
        Subject: "New Contact Form Enquiry",
        Body: "Name: " + document.getElementById("name").value 
        + "<br> Email: " + document.getElementById("email").value 
        + "<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert("Message Sent Successfully")
    );
};

var typed = new Typed(".autotype", {
    strings: ["Creative", "Minimalistic", "Relentless"],
    typeSpeed: 140,
    backSpeed: 80,
    loop: true
});