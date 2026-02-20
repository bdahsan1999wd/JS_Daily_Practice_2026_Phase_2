// 🧩 PROBLEM–01: planIftarDistribution()

// Logic: Calculate total demand from an array and compare with available stock.

function planIftarDistribution(stock, demandList, isEmergency) {

    // --- STEP 1: VALIDATION ---
    // stock must be a number, demandList must be an array, isEmergency must be boolean
    if (typeof stock !== 'number' || stock < 0 || !Array.isArray(demandList) || typeof isEmergency !== 'boolean') {
        return "Invalid Input";
    }

    // Check if every element in the demandList is a positive number
    for (let demand of demandList) {
        if (typeof demand !== 'number' || demand < 0) return "Invalid Input";
    }

    // --- STEP 2: CALCULATE TOTAL DEMAND ---
    // Use reduce to sum up the array elements
    const totalDemand = demandList.reduce((acc, curr) => acc + curr, 0);
    if (totalDemand === 0) return "Fully Supplied"; // No demand means we are supplied

    // --- STEP 3: APPLY EMERGENCY RULES ---
    let effectiveStock = stock;
    if (isEmergency) {
        effectiveStock = stock * 1.1; // Increase stock capacity by 10%
    }

    // --- STEP 4: COMPARE STOCK VS DEMAND ---
    if (effectiveStock >= totalDemand) {
        return "Fully Supplied";
    } else if (effectiveStock >= totalDemand * 0.7) {
        return "Partial Supply"; // At least 70% of demand met
    } else {
        return "Critical Shortage"; // Less than 70% met
    }
}

// --- EXAMPLE USAGE ---
console.log(planIftarDistribution(100, [50, 50], false));
console.log(planIftarDistribution(60, [100], false));
console.log(planIftarDistribution(75, [100], false));