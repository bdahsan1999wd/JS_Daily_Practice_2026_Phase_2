/**
 * 🧩 PROBLEM–03: sanitizeUserData()

 * Logic: Create a new object excluding sensitive keys and determining access levels.
 */

function sanitizeUserData(userObj) {

    // --- STEP 1: VALIDATION ---
    if (typeof userObj !== 'object' || userObj === null || Array.isArray(userObj)) {
        return "Invalid Input";
    }

    // --- STEP 2: DATA SANITIZATION ---
    // Create a shallow copy to avoid mutating the original object
    const sanitized = { ...userObj };

    // Rule: Remove password, token, and salt
    delete sanitized.password;
    delete sanitized.token;
    delete sanitized.salt;

    // --- STEP 3: ACCESS LEVEL LOGIC (Challenge) ---
    // Rule: Admin gets "high", others get "standard"
    if (sanitized.role === "admin") {
        sanitized.accessLevel = "high";
    } else {
        sanitized.accessLevel = "standard";
    }

    return sanitized;
}

// --- EXAMPLE USAGE ---
console.log(sanitizeUserData({ name: "Ahsan", password: "123", role: "admin" }));