// 🧩 PROBLEM–04: getAttendanceRate()

// Logic: Calculate percentage and round to the nearest whole number.

function getAttendanceRate(totalStudents, presentStudents) {

    // --- STEP 1: VALIDATION ---
    // Numbers must be positive, and present count cannot be more than total count
    if (typeof totalStudents !== 'number' || typeof presentStudents !== 'number' ||
        totalStudents <= 0 || presentStudents < 0 || presentStudents > totalStudents) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATION ---
    // Attendance % = (Present / Total) * 100
    const rate = Math.round((presentStudents / totalStudents) * 100);

    return `Attendance: ${rate}%`;
}

// --- EXAMPLE USAGE ---
console.log(getAttendanceRate(50, 40));
console.log(getAttendanceRate(30, 25));