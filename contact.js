document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('nav a[href="contact.html"]').classList.add("active");

    const form = document.getElementById("contactForm");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        alert(`Thanks ${name}! We'll contact you at ${email}.`);
        form.reset();
    });
});
