// --- PROBLEM 02: Salary Disbursement Date ---

function getNextSalaryDate(currentDate) {

    // Step 1: Validate and parse date
    const date = new Date(currentDate);
    if (isNaN(date.getTime())) return "Invalid Input";

    // Step 2: Extract current month/year
    const year = date.getFullYear();
    const month = date.getMonth();

    // Step 3: Determine if the 5th has passed
    if (date.getDate() < 5) {
        return `${year}-${String(month + 1).padStart(2, '0')}-05`;
    } else {
        const nextMonth = month === 11 ? 0 : month + 1;
        const nextYear = month === 11 ? year + 1 : year;
        return `${nextYear}-${String(nextMonth + 1).padStart(2, '0')}-05`;
    }
}

// --- Example Usage ---
console.log(getNextSalaryDate("2026-03-02"));
console.log(getNextSalaryDate("2026-03-06"));