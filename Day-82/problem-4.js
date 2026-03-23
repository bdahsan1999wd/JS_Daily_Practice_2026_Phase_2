/**
 * 🧩 PROBLEM–04: maskPhoneNumber()

 * Logic: Mask the middle 5 digits of an 11-digit phone number for privacy.
 */

function maskPhoneNumber(phoneNumber) {

    // --- STEP 1: VALIDATION ---
    // Must be a string of exactly 11 digits
    const phoneRegex = /^[0-9]+$/;
    if (typeof phoneNumber !== 'string' || phoneNumber.length !== 11 || !phoneRegex.test(phoneNumber)) {
        return "Invalid Format";
    }

    // --- STEP 2: MASKING LOGIC (Challenge) ---
    // Keep first 3, mask middle 5, keep last 3
    const firstPart = phoneNumber.slice(0, 3);
    const lastPart = phoneNumber.slice(-3);
    const maskedPart = "*****";

    return `${firstPart}${maskedPart}${lastPart}`;
}

// --- EXAMPLE USAGE ---
console.log(maskPhoneNumber("01712345678"));
console.log(maskPhoneNumber("01712-34567"));