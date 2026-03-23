/**
 * 🧩 PROBLEM–05: getRevenueReport()

 * Logic: Generate financial summary with tax and net profit calculations.
 */

function getRevenueReport(subscriptions, labCommissions) {

    // --- STEP 1: VALIDATION ---
    if (typeof subscriptions !== 'number' || typeof labCommissions !== 'number' || subscriptions < 0 || labCommissions < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: FINANCIAL CALCULATIONS ---
    const totalRevenue = subscriptions + labCommissions;
    const taxAmount = totalRevenue * 0.15; // 15% Tax
    const netProfit = totalRevenue - taxAmount;

    // --- STEP 3: ROUNDING (Challenge) ---
    return {
        totalRevenue: Math.round(totalRevenue),
        taxAmount: Math.round(taxAmount),
        netProfit: Math.round(netProfit)
    };
}

// --- EXAMPLE USAGE ---
console.log(getRevenueReport(10000, 5000));
console.log(getRevenueReport(1250.75, 500.20));