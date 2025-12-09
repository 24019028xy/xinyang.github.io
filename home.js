document.addEventListener("DOMContentLoaded", () => {
    // Highlight nav link
    document.querySelector('nav a[href="index.html"]').style.textDecoration = "underline";

    // Animate welcome text
    const h2 = document.querySelector(".container h2");
    h2.style.opacity = 0;
    setTimeout(() => {
        h2.style.transition = "opacity 1s";
        h2.style.opacity = 1;
    }, 300);

    alert("Welcome to my portfolio!");
});
