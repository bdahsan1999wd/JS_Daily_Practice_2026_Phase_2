/**
 * 🧩 PROBLEM–05: getPatientStatus()

 * Logic: Determine the patient's workflow stage using boolean flags.
 */

function getPatientStatus(patientData) {

    // --- STEP 1: VALIDATION ---
    if (typeof patientData !== 'object' || patientData === null) {
        return "Invalid Input";
    }

    const { hasSymptoms, hasReports, isVisited } = patientData;

    // Strict type check for boolean properties
    if (typeof hasSymptoms !== 'boolean' || typeof hasReports !== 'boolean' || typeof isVisited !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: WORKFLOW LOGIC (Priority Based) ---
    if (isVisited) return "Treatment Completed";
    if (hasReports) return "Ready for Doctor Visit";
    if (hasSymptoms) return "Awaiting Lab Tests";

    // --- STEP 3: DEFAULT STATE (Challenge) ---
    return "New Appointment";
}

// --- EXAMPLE USAGE ---
console.log(getPatientStatus({ hasSymptoms: true, hasReports: false, isVisited: false }));
console.log(getPatientStatus({ hasSymptoms: false, hasReports: false, isVisited: false }));