// --- PROBLEM 04: Daily Donation Logger ---

function formatDonationLog(mosjidName, amount, date) {

    // Step 1: Basic validation
    if (typeof mosjidName !== 'string' || mosjidName.trim() === "" || typeof amount !== 'number' || amount < 0) {
        return "Invalid Input";
    }

    // Step 2: Format using template literal
    return `${mosjidName} | Amount: ${amount} BDT | Date: ${date}`;
}

// --- Example Usage ---
console.log(formatDonationLog("S.K. Bazar Jame Mosjid", 500, "2026-03-02"));