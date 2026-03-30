// 🧩 PROBLEM–05: generateLabSummary()

// Logic: Analyze an array of test objects and summarize the overall status.

function generateLabSummary(reports) {

    // --- STEP 1: VALIDATION ---
    // Input must be an array and cannot be empty
    if (!Array.isArray(reports) || reports.length === 0) {
        return "Invalid Input";
    }

    // --- STEP 2: INITIALIZE COUNTERS ---
    let abnormalCount = 0;

    // --- STEP 3: ITERATE AND ANALYZE REPORTS ---
    for (let report of reports) {
        // Validate each report object has necessary numeric data
        if (typeof report.result !== 'number' || typeof report.minRange !== 'number' || typeof report.maxRange !== 'number') {
            return "Invalid Input";
        }

        // Check if the result is outside the normal range (min/max)
        if (report.result < report.minRange || report.result > report.maxRange) {
            abnormalCount++; // Increment if result is abnormal
        }
    }

    // --- STEP 4: GENERATE FINAL SUMMARY OBJECT ---
    const resultSummary = {
        totalTests: reports.length,
        abnormalCount: abnormalCount,
        status: abnormalCount > 0 ? "Action Required" : "All Normal"
    };

    return resultSummary;
}

// --- EXAMPLE USAGE ---
const patientReports = [{ testName: "Glucose", result: 120, minRange: 70, maxRange: 100 }];

console.log(generateLabSummary(patientReports));