// --- PROBLEM 03: Electricity Bill Optimizer ---

function checkBillStatus(monthlyBudget, billHistory) {

    // Step 1: Validate inputs (must have exactly 3 months of history)
    if (typeof monthlyBudget !== 'number' || monthlyBudget <= 0 || !Array.isArray(billHistory) || billHistory.length !== 3) {
        return "Invalid Input";
    }

    // Step 2: Calculate average usage
    const avgBill = billHistory.reduce((a, b) => a + b, 0) / 3;

    // Step 3: Return status based on 10% threshold
    return avgBill > (monthlyBudget * 1.1) ? "High" : "Stable";
}

// --- Example Usage ---
console.log(checkBillStatus(1000, [900, 1000, 1100]));
console.log(checkBillStatus(1000, [1200, 1300, 1200]));