document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('nav a[href="index.html"]').classList.add("active");
    const h1 = document.querySelector("h1");
    h1.classList.add("animate__animated", "animate__bounceIn");
});
