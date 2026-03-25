/**
 * 🧩 PROBLEM–01: calculatePatientAge()

 * Logic: Calculate age in years and handle "Infant" status for babies under 1 year.
 */

function calculatePatientAge(dobString) {

    // --- STEP 1: VALIDATION ---
    const dob = new Date(dobString);
    const today = new Date(); // Assuming 2026 as per system context
    if (isNaN(dob.getTime()) || dob > today) {
        return "Invalid Input";
    }

    // --- STEP 2: AGE CALCULATION ---
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    // Adjust age if birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    // --- STEP 3: INFANT CHECK (Challenge) ---
    return age < 1 ? "Infant" : age;
}

// --- EXAMPLE USAGE ---
console.log(calculatePatientAge("1995-05-20"));
console.log(calculatePatientAge("2026-01-01"));