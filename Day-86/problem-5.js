/**
 * 🧩 PROBLEM–05: getActivePatientsCount()

 * Logic: Count unique patients with multiple visits, excluding holiday visits.
 */

function getActivePatientsCount(visitLogs) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(visitLogs)) return "Invalid Input";

    // --- STEP 2: LOG FILTERING & COUNTING ---
    const visitCounts = {};

    visitLogs.forEach(log => {
        const date = new Date(log.visitDate);
        // Challenge: Skip Fridays (Day 5 in JS Date)
        if (date.getDay() !== 5) {
            const id = log.patientId;
            visitCounts[id] = (visitCounts[id] || 0) + 1;
        }
    });

    // --- STEP 3: COUNT LOYAL PATIENTS ---
    let loyalCount = 0;
    for (const id in visitCounts) {
        if (visitCounts[id] >= 2) {
            loyalCount++;
        }
    }

    return loyalCount;
}

// --- EXAMPLE USAGE ---
const logs = [
    { patientId: 1, visitDate: "2026-03-23" },
    { patientId: 1, visitDate: "2026-03-24" },
    { patientId: 2, visitDate: "2026-03-20" }
];

console.log(getActivePatientsCount(logs));