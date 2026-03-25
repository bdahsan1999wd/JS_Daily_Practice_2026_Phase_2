/**
 * 🧩 PROBLEM–05: getDepartmentQueue()

 * Logic: Group names by dept with a "General" fallback and "and more" limit.
 */

function getDepartmentQueue(patientList) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(patientList)) return "Invalid Input";

    // --- STEP 2: GROUPING ---
    const grouped = patientList.reduce((acc, patient) => {
        const dept = (patient.dept && patient.dept.trim()) ? patient.dept : "General";
        if (!acc[dept]) acc[dept] = [];
        acc[dept].push(patient.name);
        return acc;
    }, {});

    // --- STEP 3: STRING FORMATTING (Challenge) ---
    for (const dept in grouped) {
        const names = grouped[dept];
        const visibleNames = names.slice(0, 3).join(", ");

        if (names.length > 3) {
            grouped[dept] = `${visibleNames}, ...and more`;
        } else {
            grouped[dept] = visibleNames;
        }
    }

    return grouped;
}

// --- EXAMPLE USAGE ---
const list = [
    { name: "A", dept: "Dental" }, { name: "B", dept: "Dental" },
    { name: "C", dept: "Dental" }, { name: "D", dept: "Dental" },
    { name: "E", dept: "" }
];

console.log(getDepartmentQueue(list));