document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('nav a[href="portfolio.html"]').classList.add("active");
    const projects = document.querySelectorAll("ul li");
    projects.forEach(item => {
        item.addEventListener("mouseenter", () => item.style.color = "#007bff");
        item.addEventListener("mouseleave", () => item.style.color = "#000");
    });
});
