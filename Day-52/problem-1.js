/**
 * 🧩 PROBLEM–01: calculateParkingFee()

 * Logic: Determine parking costs based on vehicle rates, membership, and duration.
 */

function calculateParkingFee(hours, vehicleType, isMember) {

    // --- STEP 1: VALIDATION ---
    // Ensure hours is a positive number, vehicleType is a string, and isMember is a boolean
    const validVehicles = ["Car", "Motorcycle", "Truck"];
    if (typeof hours !== 'number' || hours <= 0 || typeof vehicleType !== 'string' || typeof isMember !== 'boolean') {
        return "Invalid Input";
    }
    // Check if the provided vehicle type is in our allowed list
    if (!validVehicles.includes(vehicleType)) {
        return "Invalid Input";
    }

    // --- STEP 2: ASSIGN BASE RATES ---
    let rate = 0;
    if (vehicleType === "Car") rate = 10;
    else if (vehicleType === "Motorcycle") rate = 5;
    else if (vehicleType === "Truck") rate = 20;

    // --- STEP 3: CALCULATE TOTAL & APPLY DISCOUNTS ---
    let totalFee = hours * rate;

    // Apply 20% discount if the user is a member
    if (isMember) {
        totalFee = totalFee * 0.8;
    }

    // Apply Long Stay Bonus: $5 flat discount if parked for more than 5 hours
    // This happens after the membership discount calculation
    if (hours > 5) {
        totalFee -= 5;
    }

    // --- STEP 4: ENFORCE MINIMUM CHARGE ---
    // If the final fee is less than $2, return 2; otherwise return the calculated total
    return totalFee < 2 ? 2 : totalFee;
}

// --- EXAMPLE USAGE ---
console.log(calculateParkingFee(2, "Car", false));
console.log(calculateParkingFee(6, "Motorcycle", true));
console.log(calculateParkingFee(1, "Bicycle", false));