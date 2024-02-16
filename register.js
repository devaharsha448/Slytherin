const LoginForm = document.querySelector(".login__form");

/* LOGIN BUTTON */
const LoginButton = document.querySelector(".button__login");

/* LOGIN FORM EVENTLISTENER */
LoginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission
    const EmailInput = document.querySelector(".email--input").value;
    const PasswordInput = document.querySelector(".password--input").value;

    // Perform your login authentication here
    // For demonstration purposes, let's assume it's successful
    const isLoggedIn = true;

    if (isLoggedIn) {
        // Redirect to the home page upon successful login
        window.location.href = "home.html"; // Replace "home.html" with your home page URL
    } else {
        // Handle failed login
        alert("Invalid email or password. Please try again.");
    }
});
