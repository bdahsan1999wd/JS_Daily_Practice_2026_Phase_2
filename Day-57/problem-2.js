/* 🧩 PROBLEM–02: getCommitteeVerdict()

This function calculates a percentage based on an array of votes to determine the verdict.
*/

function getCommitteeVerdict(reports) {

    // --- STEP 1: VALIDATION ---
    // Check if reports is a non-empty array and contains only booleans
    if (!Array.isArray(reports) || reports.length === 0) {
        return "Invalid Input";
    }

    const onlyBooleans = reports.every(item => typeof item === 'boolean');
    if (!onlyBooleans) return "Invalid Input";

    // --- STEP 2: CALCULATION ---
    // Count how many members reported 'true' (moon sighted)
    const positiveReports = reports.filter(report => report === true).length;
    const threshold = reports.length / 2;

    // --- STEP 3: LOGIC CHECK ---
    // Verdict is "Eid Tomorrow" if positive reports are more than 50%
    return positiveReports > threshold ? "Eid Tomorrow" : "Fast Tomorrow";
}

// --- EXAMPLE USAGE ---
console.log(getCommitteeVerdict([true, false, true]));
console.log(getCommitteeVerdict([false, false, true]));
console.log(getCommitteeVerdict([]));