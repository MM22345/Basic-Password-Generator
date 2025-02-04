function generatePassword() {
    const length = document.getElementById("length").value;
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+={}[]|;:'\",.<>/?";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }

    document.getElementById("password").textContent = password;
}

function copyPassword() {
    const passwordText = document.getElementById("password").textContent;

    if (navigator.clipboard) {
        // ... (Clipboard API code from previous example) ...
    } else {
        // ... (Fallback for older browsers) ...
    }
}