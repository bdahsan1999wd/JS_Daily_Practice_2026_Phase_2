/**
 * ⚠️ Function Name: filterValidEmails()

 * Logic: Filter array for valid formats and normalize strings to lowercase.
 */

function filterValidEmails(emails) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(emails)) {
        return "Invalid Input";
    }

    // --- STEP 2: FILTER & NORMALIZE (Challenge) ---
    return emails
        .filter(email => {
            if (typeof email !== 'string') return false;
            // Rule: Must contain @ and .com
            return email.includes('@') && email.includes('.com');
        })
        .map(validEmail => validEmail.toLowerCase());
}

// --- EXAMPLE USAGE ---
console.log(filterValidEmails(["Ahsan@Gmail.com", "test@web.co"]));