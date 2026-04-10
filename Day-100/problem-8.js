// 🧩 PROBLEM–08: canAccessRecords()

// Logic: Security authorization based on role and emergency override.

function canAccessRecords(role, department, isEmergency) {

    // --- STEP 1: EMERGENCY OVERRIDE CHALLENGE ---
    if (isEmergency === true) return true;

    // --- STEP 2: ROLE LOGIC ---
    if (role === "Admin") return true;
    if (role === "Doctor" && department === "Medical") return true;

    return false;
}

// --- EXAMPLE USAGE ---
console.log(canAccessRecords("Nurse", "Surgery", true));
console.log(canAccessRecords("Doctor", "Accounts", false));