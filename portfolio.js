document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('nav a[href="portfolio.html"]').style.textDecoration = "underline";

    // Hover animation for projects
    const items = document.querySelectorAll("ul li");
    items.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.color = "#ffd700";
        });
        item.addEventListener("mouseleave", () => {
            item.style.color = "#333";
        });
    });
});
