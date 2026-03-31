// 🧩 PROBLEM–03: calculateFuelRequirement()

// Logic: Calculate total fuel for a round trip with a weather-based efficiency drop.

function calculateFuelRequirement(distanceKm, fuelAvg, weather) {

    // --- STEP 1: VALIDATION ---
    // Distance and fuel efficiency must be positive numbers
    if (typeof distanceKm !== 'number' || distanceKm <= 0 ||
        typeof fuelAvg !== 'number' || fuelAvg <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: APPLY WEATHER CHALLENGE ---
    let effectiveAvg = fuelAvg;
    // If it's "Rainy", decrease efficiency by 15% (Multiply by 0.85)
    if (typeof weather === 'string' && weather.toLowerCase() === "rainy") {
        effectiveAvg = fuelAvg * 0.85;
    }

    // --- STEP 3: CALCULATION ---
    // Logic: Total Distance = One way * 2. Fuel = Distance / Efficiency.
    const roundTripDistance = distanceKm * 2;
    const totalFuel = roundTripDistance / effectiveAvg;

    // --- STEP 4: FORMATTING ---
    // Round to 2 decimal places as per requirement
    return Number(totalFuel.toFixed(2));
}

// --- EXAMPLE USAGE ---
console.log(calculateFuelRequirement(50, 10));
console.log(calculateFuelRequirement(50, 10, "Rainy"));