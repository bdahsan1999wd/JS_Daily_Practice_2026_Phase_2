/**
 * ⚠️ Function Name: manageTourBudget()

 * Logic: Track tour expenses and apply specific discounts for service charges.
 */

function manageTourBudget(initialBudget, expenseAmount, expenseType) {

    const validTypes = ["Refuel", "Food", "Service"];

    // --- STEP 1: VALIDATION ---
    if (typeof initialBudget !== 'number' || initialBudget <= 0 ||
        typeof expenseAmount !== 'number' || expenseAmount <= 0 ||
        !validTypes.includes(expenseType)) {
        return "Invalid Input";
    }

    // --- STEP 2: APPLY SERVICE DISCOUNT (Challenge) ---
    let finalExpense = expenseAmount;
    if (expenseType === "Service" && expenseAmount > 1000) {
        finalExpense = expenseAmount * 0.90; // 10% discount
    }

    // --- STEP 3: CHECK BUDGET & RETURN BALANCE ---
    if (finalExpense > initialBudget) {
        return "Insufficient Budget";
    }

    return initialBudget - finalExpense;
}

// --- EXAMPLE USAGE ---
console.log(manageTourBudget(5000, 1200, "Service"));
console.log(manageTourBudget(2000, 2500, "Refuel"));