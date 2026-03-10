/**
 * ⚠️ Function Name: calculateSMSCost()

 * Logic: Calculate cost based on character count segments per contact.
 */

function calculateSMSCost(messageLength, contactCount) {

    // --- STEP 1: VALIDATION ---
    if (!Number.isInteger(messageLength) || !Number.isInteger(contactCount) ||
        messageLength <= 0 || contactCount <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: DETERMINE SMS SEGMENTS ---
    // Using Math.ceil to find how many 160-char blocks are needed
    const smsCountPerContact = Math.ceil(messageLength / 160);
    const costPerSMS = 0.50;

    // --- STEP 3: FINAL COST ---
    return smsCountPerContact * contactCount * costPerSMS;
}

// --- EXAMPLE USAGE ---
console.log(calculateSMSCost(100, 50));
console.log(calculateSMSCost(200, 10));