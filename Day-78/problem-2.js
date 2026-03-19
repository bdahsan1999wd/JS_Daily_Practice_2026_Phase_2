/**
 * 🧩 PROBLEM–02: formatUserProfile()

 * Logic: Merge name strings into uppercase and determine seniority based on age.
 */

function formatUserProfile(firstName, lastName, age) {
    
    // --- STEP 1: VALIDATION ---
    if (typeof firstName !== 'string' || firstName.trim() === "" ||
        typeof lastName !== 'string' || lastName.trim() === "" ||
        typeof age !== 'number' || age <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: FORMAT FULL NAME (Challenge) ---
    const fullName = `${firstName.trim()} ${lastName.trim()}`.toUpperCase();

    // --- STEP 3: DETERMINE SENIOR STATUS (Challenge) ---
    const isSenior = age >= 60;

    // --- STEP 4: RETURN CONSTRUCTED OBJECT ---
    return {
        fullName: fullName,
        age: age,
        isSenior: isSenior
    };
}

// --- EXAMPLE USAGE ---
console.log(formatUserProfile("Ahsan", "Habib", 65));