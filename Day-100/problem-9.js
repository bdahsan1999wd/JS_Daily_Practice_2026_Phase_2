// 🧩 PROBLEM–09: getRevenueStats()

// Logic: Aggregate total, min, max and avg, ignoring negatives.

function getRevenueStats(revenues) {

    // --- STEP 1: VALIDATION & FILTERING ---
    if (!Array.isArray(revenues)) return "Invalid Input";
    const valid = revenues.filter(r => typeof r === 'number' && r >= 0);

    if (valid.length === 0) return "NO_DATA";

    // --- STEP 2: MATH LOGIC ---
    const total = valid.reduce((acc, curr) => acc + curr, 0);
    const min = Math.min(...valid);
    const max = Math.max(...valid);

    // --- STEP 3: PRECISION CHALLENGE ---
    const avg = parseFloat((total / valid.length).toFixed(2));

    return { total, min, max, avg };
}

// --- EXAMPLE USAGE ---
console.log(getRevenueStats([100, 200, -50, 300]));
console.log(getRevenueStats([]));