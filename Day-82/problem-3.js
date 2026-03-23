/**
 * 🧩 PROBLEM–03: filterPatientsByBloodGroup()

 * Logic: Filter patients by blood group using case-insensitive search.
 */

function filterPatientsByBloodGroup(patients, targetGroup) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(patients) || typeof targetGroup !== 'string' || targetGroup.trim() === "") {
        return "Invalid Input";
    }

    // --- STEP 2: FILTERING LOGIC ---
    const searchGroup = targetGroup.toUpperCase().trim();

    const matchedPatients = patients.filter(patient => {
        return patient.bloodGroup && patient.bloodGroup.toUpperCase() === searchGroup;
    });

    // --- STEP 3: EMPTY RESULT CHECK (Challenge) ---
    return matchedPatients.length > 0 ? matchedPatients : "No Matching Donors";
}

// --- EXAMPLE USAGE ---
console.log(filterPatientsByBloodGroup([{ name: "Ali", bloodGroup: "A+" }], "a+"));
console.log(filterPatientsByBloodGroup([{ name: "Ali", bloodGroup: "B+" }], "O+"));