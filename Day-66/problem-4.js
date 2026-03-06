/**
 * 🧩 PROBLEM–04: calculateTripCost()

 * * Logic: Calculate fuel based on mileage and add tolls for long distances.
 */

function calculateTripCost(distanceKM, fuelPrice, mileage) {

    // --- STEP 1: VALIDATION ---
    if (typeof distanceKM !== 'number' || typeof fuelPrice !== 'number' || typeof mileage !== 'number' ||
        distanceKM <= 0 || fuelPrice <= 0 || mileage <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: BASIC FUEL CALCULATION ---
    const fuelNeeded = distanceKM / mileage;
    let totalCost = fuelNeeded * fuelPrice;

    // --- STEP 3: HIGHWAY TOLL CHALLENGE ---
    if (distanceKM > 200) {
        totalCost += 500;
    }

    return totalCost;
}

// --- EXAMPLE USAGE ---
console.log(calculateTripCost(250, 130, 10));
console.log(calculateTripCost(100, 120, 10));