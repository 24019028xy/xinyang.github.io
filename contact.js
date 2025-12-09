document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('nav a[href="contact.html"]').style.textDecoration = "underline";

    const form = document.getElementById("contactForm");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        alert(`Thank you, ${name}! We received your message: "${message}" and will contact you at ${email}.`);

        // Reset form
        form.reset();
    });
});
