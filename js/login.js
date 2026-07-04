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

    try {
        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                email
            })
        });

        if (!response.ok) {
            throw new Error("فشل إرسال البيانات");
        }

        const data = await response.json();

        if (data.success) {
            window.location.href = "security.html";
        } else {
            alert("حدث خطأ في السيرفر");
        }

    } catch (err) {
        console.error("Login Error:", err);
        alert("تعذر الاتصال بالسيرفر");
    }
});