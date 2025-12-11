const form = document.getElementById("contactForm");
const msg = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    msg.textContent = "Dziękuję! Formularz w wersji testowej nie wysyła wiadomości.";
});
