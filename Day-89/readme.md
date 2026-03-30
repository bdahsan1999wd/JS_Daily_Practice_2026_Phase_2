# 🌙 JS DAILY PRACTICE – DAY-89

📅 **Goal:** Diagnostic Lab & Patient Management
🎯 **Focus:** Array Manipulation • Logical Conditions • String Sanitization • Number Formatting

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🌡️ Patient Triage System

⚠️ **Function Name:** `getTriagePriority()`

To manage crowds in the lab, you need to set patient priority based on body temperature and oxygen levels.

| Input      | `temp` (number in °C), `oxygen` (number 0-100).     |
| :--------- | :-------------------------------------------------- |
| **Output** | Return string ("Emergency", "Urgent", or "Stable"). |

**Rules:**

- **Validation:** `temp` must be between 30 and 45; `oxygen` must be between 0 and 100.
- **Logic:** - If `oxygen < 90` ➔ `"Emergency"`
  - If `temp > 38.5` ➔ `"Urgent"`
  - Otherwise ➔ `"Stable"`

| Challenge 📢 | If `oxygen < 90` AND `temp > 38.5`, return `"CRITICAL: IMMEDIATE ACTION"`. |
| :----------- | :------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getTriagePriority(39, 85)` ➔ `"CRITICAL: IMMEDIATE ACTION"`
- `getTriagePriority(37, 98)` ➔ `"Stable"`

---

## 🧩 PROBLEM–02: 📑 Patient Name Sanitizer

⚠️ **Function Name:** `formatPatientName()`

Receptionists often type names inconsistently. You need to clean the data for the database.

| Input      | `fullName` (string).            |
| :--------- | :------------------------------ |
| **Output** | Return string (Formatted Name). |

**Rules:**

- **Validation:** Input must be a string and at least 3 characters long (after trimming).
- **Logic:** Remove extra spaces from the start and end. Capitalize the first letter of every word.

| Challenge 📢 | If the name contains "Mr." or "Ms." (case-insensitive), remove the prefix and return only the cleaned name. (e.g., `"  mr. rahim uddin "` ➔ `"Rahim Uddin"`) |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `formatPatientName("  ms. jannat ara  ")` ➔ `"Jannat Ara"`
- `formatPatientName("john doe")` ➔ `"John Doe"`

---

## 🧩 PROBLEM–03: 🧪 Lab Test Discount Engine

⚠️ **Function Name:** `calculateTestCost()`

Calculate the final bill for lab tests, applying membership and bulk discounts.

| Input      | `basePrice` (number), `testCount` (number), `isMember` (boolean). |
| :--------- | :---------------------------------------------------------------- |
| **Output** | Return number (Final Price).                                      |

**Rules:**

- **Validation:** `basePrice` and `testCount` must be positive numbers.
- **Logic:** `Total = basePrice * testCount`. If `isMember` is true, apply a 15% discount.

| Challenge 📢 | If `testCount` is 5 or more, apply an additional 10% discount on the current total. If the final amount exceeds 10,000 BDT, cap the total at exactly `9999`. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateTestCost(2000, 6, true)` ➔ `9180`
- `calculateTestCost(5000, 3, false)` ➔ `9999`

---

## 🧩 PROBLEM–04: 🧬 Blood Group Matcher

⚠️ **Function Name:** `canDonateBlood()`

In emergencies, the system must quickly check if a donor's blood is compatible with the patient's.

| Input      | `donorGroup` (string), `patientGroup` (string). |
| :--------- | :---------------------------------------------- |
| **Output** | Return boolean.                                 |

**Rules:**

- **Validation:** Must be one of: "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-". (Case-insensitive).
- **Logic:** Return `true` if they match exactly.

| Challenge 📢 | "O-" is a universal donor and "AB+" is a universal recipient. If the donor is "O-", return `true`. If the patient is "AB+", return `true`. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `canDonateBlood("O-", "A+")` ➔ `true`
- `canDonateBlood("B+", "AB-")` ➔ `false`

---

## 🧩 PROBLEM–05: 📊 Lab Report Summary

⚠️ **Function Name:** `generateLabSummary()`

Analyze an array of test results to see if any require a doctor's immediate attention.

| Input      | `reports` (Array of objects with `testName`, `result`, `minRange`, `maxRange`). |
| :--------- | :------------------------------------------------------------------------------ |
| **Output** | Return Object.                                                                  |

**Rules:**

- **Validation:** Input must be a non-empty array of objects.
- **Logic:** A test is "Abnormal" if the `result` is less than `minRange` or greater than `maxRange`.

| Challenge 📢 | The returned object must include: `totalTests` (number), `abnormalCount` (number of failed tests), and `status`. If `abnormalCount > 0`, status is `"Action Required"`, otherwise `"All Normal"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `generateLabSummary([{testName: "Glucose", result: 120, minRange: 70, maxRange: 100}])` ➔ `{ totalTests: 1, abnormalCount: 1, status: "Action Required" }`
