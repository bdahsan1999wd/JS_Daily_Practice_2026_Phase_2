// 🧩 PROBLEM–02: maskPatientData()

// Logic: Protect PII (Personally Identifiable Information) using string manipulation.

function maskPatientData(name, phone) {

    // --- STEP 1: VALIDATION ---
    if (typeof name !== 'string' || typeof phone !== 'string') {
        return "Invalid Input";
    }

    // --- STEP 2: NAME MASKING CHALLENGE ---
    let maskedName = name;
    if (name.length >= 3) {
        const firstChar = name[0];
        const lastChar = name[name.length - 1];
        const stars = "*".repeat(name.length - 2);
        maskedName = firstChar + stars + lastChar;
    }

    // --- STEP 3: PHONE MASKING ---
    // Masking everything except the last 4 digits
    const visibleDigits = phone.slice(-4);
    const maskedPhone = "*".repeat(phone.length - 4) + visibleDigits;

    return { maskedName, maskedPhone };
}

// --- EXAMPLE USAGE ---
console.log(maskPatientData("Ahsan", "01712345678"));