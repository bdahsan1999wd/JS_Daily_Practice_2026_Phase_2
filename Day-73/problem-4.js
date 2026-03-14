/**
 * ⚠️ Function Name: calculateElectricityBill()

 * * Logic: Calculate monthly kWh consumption and apply high-usage tax if applicable.
 */

function calculateElectricityBill(wattage, hoursPerDay, unitPrice) {

    // --- STEP 1: VALIDATION ---
    if (typeof wattage !== 'number' || wattage <= 0 ||
        typeof hoursPerDay !== 'number' || hoursPerDay <= 0 ||
        typeof unitPrice !== 'number' || unitPrice <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE UNITS (kWh) ---
    const unitsPerDay = (wattage * hoursPerDay) / 1000;
    const totalMonthlyUnits = unitsPerDay * 30;

    // --- STEP 3: CALCULATE BASE BILL ---
    let totalBill = totalMonthlyUnits * unitPrice;

    // --- STEP 4: APPLY HIGH USAGE TAX (Challenge) ---
    // Rule: If total units > 100, add 15% tax
    if (totalMonthlyUnits > 100) {
        totalBill += (totalBill * 0.15);
    }

    return totalBill;
}

// --- EXAMPLE USAGE ---
console.log(calculateElectricityBill(200, 10, 10));
console.log(calculateElectricityBill(500, 12, 10));