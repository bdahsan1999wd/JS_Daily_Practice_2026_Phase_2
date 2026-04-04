// 🧩 PROBLEM–03: canEnterMRI()

// Logic: Screen patients for ferromagnetic implants and pacemaker denial.

function canEnterMRI(implants) {

    // --- STEP 1: VALIDATION ---
    // Input must be an array (even empty is allowed)
    if (!Array.isArray(implants)) {
        return "Invalid Input";
    }

    // --- STEP 2: SCREENING LOGIC ---
    for (let item of implants) {
        // Challenge: Pacemaker check (case-insensitive)
        if (typeof item.type === 'string' && item.type.toLowerCase() === "pacemaker") {
            return "STRICT_DENIAL: CARDIOLOGIST_CLEARANCE_REQUIRED";
        }

        // Logic: Return false if any implant is ferromagnetic
        if (item.isFerromagnetic === true) {
            return false;
        }
    }

    // If no ferromagnetic implants or pacemakers found
    return true;
}

// --- EXAMPLE USAGE ---
console.log(canEnterMRI([{ type: "Dental", isFerromagnetic: false }]));
console.log(canEnterMRI([{ type: "Pacemaker", isFerromagnetic: false }]));