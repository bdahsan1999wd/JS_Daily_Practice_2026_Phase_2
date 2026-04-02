// 🧩 PROBLEM–03: filterPatientsByRisk()

// Logic: Filter patient names based on high or normal heart rate thresholds.

function filterPatientsByRisk(patients, level) {

    // --- STEP 1: VALIDATION ---
    // patients must be an array; level must be "High" or "Normal"
    if (!Array.isArray(patients) || typeof level !== 'string') {
        return "Invalid Input";
    }

    const searchLevel = level.charAt(0).toUpperCase() + level.slice(1).toLowerCase();
    if (searchLevel !== "High" && searchLevel !== "Normal") {
        return "Invalid Input";
    }

    // --- STEP 2: FILTERING LOGIC ---
    const filteredNames = patients
        .filter(patient => {
            if (searchLevel === "High") {
                return patient.hr > 100; // High risk condition
            } else {
                return patient.hr >= 60 && patient.hr <= 100; // Normal risk condition
            }
        })
        .map(patient => patient.name); // Extract only names

    // --- STEP 3: HANDLE CHALLENGE CONDITION ---
    // If level is High and no high HR patients found, return specific string
    if (searchLevel === "High" && filteredNames.length === 0) {
        return "ALL_PATIENTS_STABLE";
    }

    return filteredNames;
}

// --- EXAMPLE USAGE ---
const patientList = [{ name: "Abir", hr: 110 }, { name: "Sumi", hr: 75 }];

console.log(filterPatientsByRisk(patientList, "High"));