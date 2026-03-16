/**
 * ⚠️ Function Name: maskEmail()

 * Logic: Privacy-first string manipulation to mask user identity.
 */

function maskEmail(email) {

    // --- STEP 1: VALIDATION ---
    if (typeof email !== 'string' || !email.includes('@')) {
        return "Invalid Input";
    }

    // --- STEP 2: SPLIT EMAIL ---
    const [name, domain] = email.split('@');

    // --- STEP 3: APPLY MASKING LOGIC (Challenge) ---
    // Rule: If name is 2 chars or less, do not mask.
    if (name.length <= 2) {
        return email;
    }

    // Keep first 2 characters and add mask
    const maskedName = name.substring(0, 2) + "***";

    return `${maskedName}@${domain}`;
}

// --- EXAMPLE USAGE ---
console.log(maskEmail("ahsan@webdev.com"));
console.log(maskEmail("js@example.com"));