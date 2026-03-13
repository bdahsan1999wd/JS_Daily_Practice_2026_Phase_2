/**
 * ⚠️ Function Name: calculateFuelCost()

 * Logic: Calculate total fuel based on mileage and add driver allowance for long distances.
 */

function calculateFuelCost(distanceKm, mileage, fuelPrice, personCount) {

    // --- STEP 1: VALIDATION ---
    if (typeof distanceKm !== 'number' || distanceKm <= 0 ||
        typeof mileage !== 'number' || mileage <= 0 ||
        typeof fuelPrice !== 'number' || fuelPrice <= 0 ||
        typeof personCount !== 'number' || personCount <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE FUEL COST ---
    let totalFuelCost = (distanceKm / mileage) * fuelPrice;

    // --- STEP 3: APPLY ALLOWANCE (Challenge) ---
    // Rule: Add 500 BDT if distance is more than 150km
    if (distanceKm > 150) {
        totalFuelCost += 500;
    }

    // --- STEP 4: CALCULATE SPLIT ---
    const sharePerPerson = totalFuelCost / personCount;

    return `Total ${totalFuelCost} BDT, Each pays ${sharePerPerson} BDT`;
}

// --- EXAMPLE USAGE ---
console.log(calculateFuelCost(100, 10, 125, 5));
console.log(calculateFuelCost(200, 10, 120, 4));