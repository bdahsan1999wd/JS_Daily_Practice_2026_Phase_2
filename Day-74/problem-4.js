/**
 * ⚠️ Function Name: calculateDeploymentHealth()

 * Logic: Calculate success percentage and flag low-performance deployment cycles.
 */

function calculateDeploymentHealth(successful, failed) {

    // --- STEP 1: VALIDATION ---
    if (!Number.isInteger(successful) || successful < 0 ||
        !Number.isInteger(failed) || failed < 0) {
        return "Invalid Input";
    }

    const total = successful + failed;
    if (total === 0) return "Invalid Input";

    // --- STEP 2: CALCULATE PERCENTAGE ---
    const successRate = (successful / total) * 100;

    // --- STEP 3: CONDITIONAL RETURN (Challenge) ---
    if (successRate < 80) {
        return `Action Required: ${successRate}%`;
    }

    // Round to 1 decimal place if it's a decimal
    return Number.isInteger(successRate) ? successRate : Number(successRate.toFixed(1));
}

// --- EXAMPLE USAGE ---
console.log(calculateDeploymentHealth(9, 1));
console.log(calculateDeploymentHealth(7, 3));