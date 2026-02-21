/**
 * 🧩 PROBLEM–03: getStreamAccess()
 *
 * Logic: Filter access based on age, plan tier, and parental settings.
 */

function getStreamAccess(age, planType, hasParentalControl) {

    // --- STEP 1: VALIDATION ---
    const allowedPlans = ["Gold", "Diamond", "Silver"];

    if (typeof age !== 'number' || age < 1 || age > 120 || !allowedPlans.includes(planType)) {

        return "Invalid Input";

    }

    // --- STEP 2: EVALUATE ACCESS LEVELS ---
    // Rule: Premium is for adults (18+) on high-tier plans

    if (age >= 18 && (planType === "Gold" || planType === "Diamond")) {

        return "Premium Access";

    }

    // Rule: Restricted if user is a minor and parental control is enabled
    if (age < 18 && hasParentalControl) {

        return "Restricted";

    }

    // Rule: Basic access for Silver plan or minors without parental locks
    if (planType === "Silver" || (age < 18 && !hasParentalControl)) {

        return "Basic Access";

    }

    // Default safety return

    return "Restricted";

}

// --- EXAMPLE USAGE ---
console.log(getStreamAccess(25, "Gold", false));
console.log(getStreamAccess(15, "Silver", true));
console.log(getStreamAccess(15, "Gold", false));