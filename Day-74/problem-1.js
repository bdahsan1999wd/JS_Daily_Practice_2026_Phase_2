/**
 * ⚠️ Function Name: generateTicketId()

 * Logic: Create a formatted ID string with padded serial numbers for consistency.
 */

function generateTicketId(routeName, serial) {

    // --- STEP 1: VALIDATION ---
    if (typeof routeName !== 'string' || routeName.trim() === "" ||
        !Number.isInteger(serial) || serial <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: FORMAT ROUTE ---
    const formattedRoute = routeName.toUpperCase();

    // --- STEP 3: PAD SERIAL NUMBER (Challenge) ---
    // Rule: Pad with leading zeros to ensure at least 3 digits
    const formattedSerial = String(serial).padStart(3, '0');

    return `${formattedRoute}-ID-${formattedSerial}`;
}

// --- EXAMPLE USAGE ---
console.log(generateTicketId("Dhaka", 45));
console.log(generateTicketId("Sylhet", 120));