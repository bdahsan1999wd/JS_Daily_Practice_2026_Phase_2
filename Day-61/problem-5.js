// --- PROBLEM 05: Maintenance Reserve Tracker ---

function getMaintenanceBalance(donations, expenses) {

    // Step 1: Helper function to sum array elements
    const sum = (arr) => arr.reduce((a, b) => a + b, 0);

    // Step 2: Validate inputs are arrays
    if (!Array.isArray(donations) || !Array.isArray(expenses)) return "Invalid Input";

    // Step 3: Calculate net balance
    const net = sum(donations) - sum(expenses);

    // Step 4: Determine if Surplus or Deficit
    return net >= 0 ? `Surplus: ${net}` : `Deficit: ${Math.abs(net)}`;
}

// --- Example Usage ---
console.log(getMaintenanceBalance([1000, 2000], [500, 500]));
console.log(getMaintenanceBalance([500], [1000, 200]));