// 🧩 PROBLEM–05: calculateDailyRevenue()

// Logic: Map scan counts to price list and handle missing data warnings.

function calculateDailyRevenue(scans, priceList) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(scans) || typeof priceList !== 'object' || priceList === null) {
        return "Invalid Input";
    }

    let totalRevenue = 0;
    let hasMissingData = false;

    // --- STEP 2: ITERATE SCANS ---
    for (let scan of scans) {
        const scanType = scan.type;
        const scanCount = scan.count;

        // Validation for each scan object
        if (typeof scanType !== 'string' || typeof scanCount !== 'number' || scanCount < 0) {
            return "Invalid Input";
        }

        // --- STEP 3: PRICE LOOKUP & CHALLENGE ---
        // If scan type exists in priceList, calculate. Else, assume 0 and set warning.
        if (priceList.hasOwnProperty(scanType)) {
            totalRevenue += scanCount * priceList[scanType];
        } else {
            hasMissingData = true; // Challenge flag
        }
    }

    // --- STEP 4: CONDITIONAL RETURN ---
    // If any data was missing, return object; otherwise return simple total
    if (hasMissingData) {
        return {
            total: totalRevenue,
            warning: true
        };
    }

    return totalRevenue;
}

// --- EXAMPLE USAGE ---
console.log(calculateDailyRevenue([{ type: "XRAY", count: 10 }], { XRAY: 500 }));
console.log(calculateDailyRevenue([{ type: "MRI", count: 1 }], { XRAY: 500 }));