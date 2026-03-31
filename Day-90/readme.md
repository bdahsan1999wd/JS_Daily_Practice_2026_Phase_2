# 🌙 JS DAILY PRACTICE – DAY-90

📅 **Goal:** Hospital Resource & Shift Management
🎯 **Focus:** Array Filtering • Time Calculation • Nested Logic • Object Transformation

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🏥 ICU Bed Availability Tracker

⚠️ **Function Name:** `getAvailableBeds()`

The hospital needs a quick way to find which departments have empty ICU beds.

| Input      | `departments` (Array of objects with `name`, `totalBeds`, `occupiedBeds`). |
| :--------- | :------------------------------------------------------------------------- |
| **Output** | Return Array of strings (Department names).                                |

**Rules:**

- **Validation:** Input must be a non-empty array.
- **Logic:** Filter departments where `occupiedBeds` is less than `totalBeds`.

| Challenge 📢 | If a department has 0 beds available, and its name is "Emergency", return the string `"EMERGENCY_FULL_DIVERT"` instead of the array. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getAvailableBeds([{name: "Cardiology", totalBeds: 10, occupiedBeds: 10}])` ➔ `[]`
- `getAvailableBeds([{name: "Emergency", totalBeds: 5, occupiedBeds: 5}])` ➔ `"EMERGENCY_FULL_DIVERT"`

---

## 🧩 PROBLEM–02: 👨‍⚕️ Doctor Shift Overlap

⚠️ **Function Name:** `isShiftDoubleBooked()`

Ensure a doctor isn't assigned to two overlapping shifts.

| Input      | `shift1` (Object: `{start, end}`), `shift2` (Object: `{start, end}`). |
| :--------- | :-------------------------------------------------------------------- |
| **Output** | Return boolean.                                                       |

**Rules:**

- **Validation:** Hours must be numbers between 0 and 23.
- **Logic:** Return `true` if the shifts overlap (e.g., Shift 1: 8-12, Shift 2: 11-15).

| Challenge 📢 | If the end of `shift1` is exactly the start of `shift2` (e.g., 8-12 and 12-16), return `false` (this is a valid "handover"). |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `isShiftDoubleBooked({start: 9, end: 14}, {start: 13, end: 17})` ➔ `true`
- `isShiftDoubleBooked({start: 8, end: 12}, {start: 12, end: 16})` ➔ `false`

---

## 🧩 PROBLEM–03: 🚑 Ambulance Fuel Efficiency

⚠️ **Function Name:** `calculateFuelRequirement()`

Calculate how much fuel an ambulance needs for a round trip to a patient's location.

| Input      | `distanceKm` (number), `fuelAvg` (km per liter). |
| :--------- | :----------------------------------------------- |
| **Output** | Return number (Total liters needed).             |

**Rules:**

- **Validation:** Both must be positive numbers.
- **Logic:** Distance is one-way, so multiply by 2 for a round trip. `Fuel = (Distance * 2) / fuelAvg`.

| Challenge 📢 | If the weather is "Rainy" (passed as a 3rd optional string argument), decrease `fuelAvg` by 15% before calculating. Round the final result to 2 decimal places. |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateFuelRequirement(50, 10)` ➔ `10`
- `calculateFuelRequirement(50, 10, "Rainy")` ➔ `11.76`

---

## 🧩 PROBLEM–04: 💳 Insurance Coverage Checker

⚠️ **Function Name:** `checkInsuranceEligibility()`

Check if a patient's insurance covers a specific surgery.

| Input      | `patientPolicy` (Object), `surgeryCost` (number). |
| :--------- | :------------------------------------------------ |
| **Output** | Return string.                                    |

**Rules:**

- **Validation:** `surgeryCost` must be a positive number; policy must have `maxLimit` and `approvedSurgeries` (array).
- **Logic:** Return `"Covered"` if surgery name exists in `approvedSurgeries` AND `surgeryCost <= maxLimit`.

| Challenge 📢 | If the cost is higher than the limit, return `"Partial: User pays [amount]"` where [amount] is the difference. If surgery is not in the list, return `"Not Covered"`. |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkInsuranceEligibility({maxLimit: 5000, approvedSurgeries: ["LASIK"]}, 6000)` ➔ `"Partial: User pays 1000"`

---

## 🧩 PROBLEM–05: 🕒 Appointment Wait-Time Logic

⚠️ **Function Name:** `getEstimatedWaitTime()`

Estimate how long a patient has to wait based on the queue.

| Input      | `queuePosition` (number), `avgTimePerPatient` (number). |
| :--------- | :------------------------------------------------------ |
| **Output** | Return string (Formatted time).                         |

**Rules:**

- **Validation:** `queuePosition` must be 1 or higher.
- **Logic:** `WaitTime = (queuePosition - 1) * avgTimePerPatient`.

| Challenge 📢 | If the wait time is 60 minutes or more, return the result in hours and minutes (e.g., "1h 15m"). Otherwise, return in minutes (e.g., "45m"). |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getEstimatedWaitTime(5, 20)` ➔ `"1h 20m"`
- `getEstimatedWaitTime(2, 15)` ➔ `"15m"`
