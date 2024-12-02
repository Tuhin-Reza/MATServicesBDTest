 // Initialize EmailJS with your User ID
 (function () {
    emailjs.init("e8hZdJ7vMs985kLky");
    console.log("EmailJS initialized");
})();

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submission started");

    // Retrieve form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const submitBtn = document.getElementById("submitBtn");

    submitBtn.textContent = "Sending...";
    submitBtn.classList.add("sending");

    // Log data to ensure it is being retrieved correctly
    console.log("Data:", { name, email, subject, message });

    // Send email using EmailJS
    emailjs.send("service_jdnr1gp", "template_y4lq8iu", {
        from_name: subject,
        first_name: name,
        email: email,
        message: message
    }).then(response => {
        console.log("Email sent:", response);
        submitBtn.textContent = "Message Sent!";
        setTimeout(() => {
            submitBtn.textContent = "Send Message";
            submitBtn.classList.remove("sending");
            document.getElementById("contactForm").reset();
        }, 2000);
    }).catch(error => {
        console.error("Failed to send email:", error);
        submitBtn.textContent = "Failed to Send";
        setTimeout(() => {
            submitBtn.textContent = "Send Message";
            submitBtn.classList.remove("sending");
        }, 2000);
    });
});