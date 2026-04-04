# 🌙 JS DAILY PRACTICE – DAY-95

📅 **Goal:** Electronic Health Record (EHR) Middleware
🎯 **Focus:** Data Transformation • Regex Patterns • Reference Lookup • Boolean Flags

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 📑 Patient ID Validator

⚠️ **Function Name:** `isValidPatientID()`

Your system only accepts IDs that follow a specific pattern: `MED-XXXX-BD` (where X is a digit).

| Input      | `idString` (string). |
| :--------- | :------------------- |
| **Output** | Return boolean.      |

**Rules:**

- **Validation:** Input must be a string.
- **Logic:** Return `true` if the string matches the pattern exactly (e.g., "MED-1234-BD").

| Challenge 📢 | The function must be case-insensitive (e.g., "med-5566-bd" is valid). If valid, return `true`. If the format is correct but the numbers are all zeros ("0000"), return the string `"TEST_ID_REJECTED"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `isValidPatientID("MED-9901-BD")` ➔ `true`
- `isValidPatientID("MED-0000-BD")` ➔ `"TEST_ID_REJECTED"`

---

## 🧩 PROBLEM–02: 🏥 Allergy Alert System

⚠️ **Function Name:** `checkMedicationSafety()`

Before a doctor prescribes a drug, check it against the patient's known allergy list.

| Input      | `prescription` (string), `allergies` (Array of strings). |
| :--------- | :------------------------------------------------------- |
| **Output** | Return string.                                           |

**Rules:**

- **Validation:** `prescription` must be a string; `allergies` must be an array.
- **Logic:** Return `"Safe"` if the prescription is NOT in the allergy list.

| Challenge 📢 | If the prescription matches an allergy, return `"DANGER: [Prescription] Allergy Detected"`. This check must be case-insensitive and handle extra spaces in the strings. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkMedicationSafety("Penicillin ", ["Asprin", "penicillin"])` ➔ `"DANGER: Penicillin Allergy Detected"`

---

## 🧩 PROBLEM–03: 🌡️ Vital Sign Aggregator

⚠️ **Function Name:** `getVitalsSummary()`

Convert a raw array of temperature readings into a structured statistical summary.

| Input      | `tempReadings` (Array of numbers). |
| :--------- | :--------------------------------- |
| **Output** | Return Object.                     |

**Rules:**

- **Validation:** Input must be a non-empty array of numbers between 30 and 45.
- **Logic:** Calculate `min`, `max`, and `average`.

| Challenge 📢 | Round the `average` to 2 decimal places. If any reading in the array is above 39.0, add a property `feverDetected: true` to the returned object. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getVitalsSummary([36.5, 38.2, 39.5])` ➔ `{ min: 36.5, max: 39.5, average: 38.07, feverDetected: true }`

---

## 🧩 PROBLEM–04: 📅 Appointment Slot Finder

⚠️ **Function Name:** `findFirstAvailableSlot()`

Find the first `null` (available) slot in a doctor's daily schedule.

| Input      | `slots` (Array of 8 strings/nulls). |
| :--------- | :---------------------------------- |
| **Output** | Return number or string.            |

**Rules:**

- **Validation:** Array must have exactly 8 elements.
- **Logic:** Return the index (0-7) of the first `null` value found.

| Challenge 📢 | If no slots are `null`, return the string `"FULLY_BOOKED"`. If the only available slots are the last two (index 6 and 7), return `"EMERGENCY_ONLY_SLOTS"`. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `findFirstAvailableSlot(["P1", "P2", null, "P3", ...])` ➔ `2`
- `findFirstAvailableSlot(["P1", "P2", "P3", "P4", "P5", "P6", null, null])` ➔ `"EMERGENCY_ONLY_SLOTS"`

---

## 🧩 PROBLEM–05: 🧪 Lab Result Normalizer

⚠️ **Function Name:** `normalizeLabValue()`

Different labs use different scales for Hemoglobin. You need to normalize them to a standard decimal format.

| Input      | `value` (string like "14.5 g/dL" or "145 g/L"). |
| :--------- | :---------------------------------------------- |
| **Output** | Return number.                                  |

**Rules:**

- **Validation:** Input must be a string containing "g/dL" or "g/L".
- **Logic:** Convert "g/L" to "g/dL" by dividing by 10. (e.g., 140 g/L ➔ 14.0 g/dL).

| Challenge 📢 | Extract the number from the string using `parseFloat`. The final returned value must be a pure `Number`. If the resulting value is below 7.0, return the string `"CRITICAL_LOW: [value]"`. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `normalizeLabValue("135 g/L")` ➔ `13.5`
- `normalizeLabValue("6.5 g/dL")` ➔ `"CRITICAL_LOW: 6.5"`
