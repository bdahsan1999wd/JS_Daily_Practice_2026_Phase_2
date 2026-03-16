/**
 * ⚠️ Function Name: isPasswordSecure()

 * Logic: Security validation using length, casing, and forbidden substring checks.
 */

function isPasswordSecure(password) {

    // --- STEP 1: VALIDATION ---
    if (typeof password !== 'string') {
        return "Invalid Input";
    }

    // --- STEP 2: BLACKLIST CHECK (Challenge) ---
    // Rule: Check for "password" or "123" case-insensitively
    const lowerPass = password.toLowerCase();
    if (lowerPass.includes("password") || lowerPass.includes("123")) {
        return false;
    }

    // --- STEP 3: SECURITY REQUIREMENTS ---
    const hasMinLength = password.length >= 8;
    const hasNumber = /\d/.test(password);
    const hasUppercase = /[A-Z]/.test(password);

    return hasMinLength && hasNumber && hasUppercase;
}

// --- EXAMPLE USAGE ---
console.log(isPasswordSecure("AhsanCode7"));
console.log(isPasswordSecure("MyPassword123"));