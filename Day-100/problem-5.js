// 🧩 PROBLEM–05: calculateRoomBill()

// Logic: Bill calculation with stay-duration discount and insurance coverage.

function calculateRoomBill(days, roomType, hasInsurance) {

    // --- STEP 1: VALIDATION ---
    const rates = { "General": 1000, "Cabin": 3000, "VIP": 7000 };
    if (typeof days !== 'number' || !rates[roomType] || days <= 0) return "Invalid Input";

    // --- STEP 2: DISCOUNT LOGIC ---
    let subtotal = days * rates[roomType];
    if (days > 7) subtotal *= 0.9; // 10% discount

    // --- STEP 3: INSURANCE CHALLENGE ---
    if (hasInsurance) subtotal *= 0.2; // Patient pays only 20%

    return subtotal;
}

// --- EXAMPLE USAGE ---
console.log(calculateRoomBill(10, "General", false));
console.log(calculateRoomBill(2, "Cabin", true));