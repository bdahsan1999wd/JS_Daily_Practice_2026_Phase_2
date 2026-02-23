/**
 *🧩 PROBLEM–02: getEnergyAdvice()

 * Provides energy-based recommendations for Ramadan activities.
 * Logic: Uses energy level (1-10) and Iftar status to suggest tasks.
 */

function getEnergyAdvice(energyLevel, isBeforeIftar) {

    // --- STEP 1: VALIDATION ---
    // Ensure energyLevel is between 1-10 and isBeforeIftar is a boolean
    if (typeof energyLevel !== 'number' || energyLevel < 1 || energyLevel > 10 ||
        typeof isBeforeIftar !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: NESTED CONDITIONS ---
    if (!isBeforeIftar) {
        // Post-Iftar recommendation regardless of energy
        return "Focus on Taraweeh and hydration.";
    } else {
        // Pre-Iftar recommendations based on energy levels
        if (energyLevel >= 7) {
            return "Perfect time for Quran or light work.";
        } else if (energyLevel <= 3) {
            return "Take a short nap or do Dhikr.";
        } else {
            return "Keep a steady pace.";
        }
    }
}

// --- EXAMPLE USAGE ---
console.log(getEnergyAdvice(8, true));
console.log(getEnergyAdvice(2, true));
console.log(getEnergyAdvice(5, false));