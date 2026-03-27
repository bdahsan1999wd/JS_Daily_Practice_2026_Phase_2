/**
 * 🧩 PROBLEM–03: getTopSpecialty()

 * Logic: Aggregate revenue by specialty and find the top performer.
 */

function getTopSpecialty(records) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(records) || records.length === 0) {
        return "Invalid Input";
    }

    // --- STEP 2: DATA AGGREGATION ---
    const revenueMap = records.reduce((acc, record) => {
        const { specialty, revenue } = record;
        acc[specialty] = (acc[specialty] || 0) + revenue;
        return acc;
    }, {});

    // --- STEP 3: FIND TOP PERFORMER (Challenge: Tie Handling) ---
    let topSpec = "";
    let maxRevenue = -1;

    for (const spec in revenueMap) {
        if (revenueMap[spec] > maxRevenue) {
            maxRevenue = revenueMap[spec];
            topSpec = spec;
        } else if (revenueMap[spec] === maxRevenue) {
            // Alphabetical tie-breaker
            if (spec < topSpec) topSpec = spec;
        }
    }

    return topSpec;
}

// --- EXAMPLE USAGE ---
const records = [
    { specialty: "Dental", revenue: 500 },
    { specialty: "Dental", revenue: 200 },
    { specialty: "ENT", revenue: 600 }
];

console.log(getTopSpecialty(records));