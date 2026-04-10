// 🧩 PROBLEM–07: formatLabReport()

// Logic: Standardize lab report format and flag abnormal results.

function formatLabReport(testName, result, unit, refHigh) {

    // --- STEP 1: VALIDATION ---
    if (typeof testName !== 'string' || typeof result !== 'number' || typeof unit !== 'string' || typeof refHigh !== 'number') {
        return "Invalid Input";
    }

    // --- STEP 2: FORMATTING ---
    let report = `Test: ${testName.toUpperCase()} | Result: ${result} ${unit}`;

    // --- STEP 3: ABNORMAL CHALLENGE ---
    if (result > refHigh) report += " (ABNORMAL)";

    return report;
}

// --- EXAMPLE USAGE ---
console.log(formatLabReport("glucose", 110, "mg/dL", 100));
console.log(formatLabReport("hgb", 14, "g/dL", 16));