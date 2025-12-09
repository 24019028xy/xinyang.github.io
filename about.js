document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('nav a[href="about.html"]').style.textDecoration = "underline";

    // Fun fact button
    const btn = document.createElement("button");
    btn.textContent = "Show Fun Fact";
    btn.style.marginTop = "20px";
    document.querySelector(".container").appendChild(btn);

    btn.addEventListener("click", () => {
        alert("Fun Fact: I love coding late at night!");
    });
});
