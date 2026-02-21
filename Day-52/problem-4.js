/**
 * 🧩 PROBLEM–04: evaluateCandidate()

 * Logic: Categorize candidates based on years of experience, specific skills, and salary.

 * Hierarchy: Validation -> Shortlisted -> Review Required -> Rejected (Default).
 */

function evaluateCandidate(yearsExp, skillsArray, expectedSalary) {

    // --- STEP 1: STRICT VALIDATION ---
    // Rule: yearsExp must be a non-negative integer (no decimals like 2.5).
    // Rule: skillsArray must be an array.
    // Rule: expectedSalary must be a positive number.
    if (!Number.isInteger(yearsExp) || yearsExp < 0 ||
        !Array.isArray(skillsArray) ||
        typeof expectedSalary !== 'number' || expectedSalary <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: SKILL PRE-CHECK ---
    // Candidate needs BOTH "JavaScript" and "React" to be considered for Shortlisting.
    const hasJS = skillsArray.includes("JavaScript");
    const hasReact = skillsArray.includes("React");
    const hasRequiredSkills = hasJS && hasReact;

    // --- STEP 3: CATEGORIZATION LOGIC ---
    // [CONDITION 1: SHORTLISTED]
    // Rules: At least 3 years of experience AND must have both core skills.
    if (yearsExp >= 3 && hasRequiredSkills) {
        return "Shortlisted";
    }

    // [CONDITION 2: REVIEW REQUIRED]
    // This condition checks candidates who aren't "Shortlisted" but have potential.
    // Rule A: Experience is between 1 and 3 (Inclusive).
    // Rule B: OR they are very affordable (Salary < 40000).
    // IMPORTANT: We must ensure they have at least 1 year of experience to be reviewed.
    // Otherwise, a candidate with 0 years and low salary would skip "Rejected".
    else if ((yearsExp >= 1 && yearsExp <= 3) || (yearsExp >= 1 && expectedSalary < 40000)) {
        return "Review Required";
    }

    // [CONDITION 3: REJECTED]
    // All other valid cases fall here.
    // Example: Freshers (0 years exp) or people with high salary but no skills.
    else {
        return "Rejected";
    }
}

// --- EXAMPLE USAGE ---
console.log(evaluateCandidate(5, ["JavaScript", "React", "Node"], 50000));
console.log(evaluateCandidate(2, ["JavaScript"], 35000));
console.log(evaluateCandidate(0, ["HTML"], 20000));