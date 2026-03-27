# 🌙 JS DAILY PRACTICE – DAY-86

📅 **Goal:** MedFlow Analytics & Data Security
🎯 **Focus:** Data Aggregation • String Obfuscation • Complex Filtering • Ratio Calculation

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 📊 Clinic Performance Ratio

⚠️ **Function Name:** `getConversionRate()`

A clinic wants to know how many patients who were recommended tests actually completed them.

| Input      | `totalRecommended` (number) and `totalCompleted` (number). |
| :--------- | :--------------------------------------------------------- |
| **Output** | Return string (Percentage format).                         |

**Rules:**

- **Validation:** Both must be non-negative numbers. `totalCompleted` cannot be greater than `totalRecommended`.
- **Logic:** Calculate the percentage of completed tests.

| Challenge 📢 | If `totalRecommended` is 0, return `"No Data available"`. Otherwise, return the result rounded to 1 decimal place with a `%` sign (e.g., `"85.5%"`). |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getConversionRate(100, 85)` ➔ `"85.0%"`
- `getConversionRate(0, 0)` ➔ `"No Data available"`

---

## 🧩 PROBLEM–02: 🔐 Patient NID Masking

⚠️ **Function Name:** `maskNationalID()`

For security in the billing department, you need to hide the middle part of the patient's National ID (NID) or Passport number.

| Input      | `nidString` (string).           |
| :--------- | :------------------------------ |
| **Output** | Return string (Masked version). |

**Rules:**

- **Validation:** Input must be a string with a length between 10 and 17 characters.
- **Logic:** Keep the first 3 characters and the last 3 characters visible.

| Challenge 📢 | Replace all characters in between with exactly four asterisks `****`, regardless of how many characters were hidden. |
| :----------- | :------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `maskNationalID("1234567890")` ➔ `"123****890"`
- `maskNationalID("880123456789012")` ➔ `"880****012"`

---

## 🧩 PROBLEM–03: 📈 Top Earning Specialty

⚠️ **Function Name:** `getTopSpecialty()`

The SaaS admin needs to know which department is generating the most revenue.

| Input      | `records` (Array of objects with `specialty` and `revenue`). |
| :--------- | :----------------------------------------------------------- |
| **Output** | Return string (Specialty Name).                              |

**Rules:**

- **Validation:** Input must be a non-empty array of objects.
- **Logic:** Calculate the total revenue for each specialty.

| Challenge 📢 | Return the name of the specialty with the highest total revenue. If there is a tie, return the one that comes first alphabetically. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getTopSpecialty([{specialty: "Dental", revenue: 500}, {specialty: "Dental", revenue: 200}, {specialty: "ENT", revenue: 600}])` ➔ `"Dental"`

---

## 🧩 PROBLEM–04: 🌡️ Vital Signs Range Checker

⚠️ **Function Name:** `checkVitalStability()`

Before a doctor sees a patient, the system should flag if the vitals have changed significantly from the last visit.

| Input      | `oldValue` (number) and `newValue` (number). |
| :--------- | :------------------------------------------- |
| **Output** | Return string ("Stable" or "Unstable").      |

**Rules:**

- **Validation:** Both must be positive numbers.
- **Logic:** Compare the two values.

| Challenge 📢 | If the `newValue` has increased or decreased by more than 15% of the `oldValue`, return `"Unstable"`. Otherwise, return `"Stable"`. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkVitalStability(100, 110)` ➔ `"Stable"` (10% change)
- `checkVitalStability(100, 116)` ➔ `"Unstable"` (16% change)

---

## 🧩 PROBLEM–05: 🏥 Monthly Active Patient Tracker

⚠️ **Function Name:** `getActivePatientsCount()`

Clinics want to track "Loyal" patients who visit at least twice a month.

| Input      | `visitLogs` (Array of objects with `patientId` and `visitDate`). |
| :--------- | :--------------------------------------------------------------- |
| **Output** | Return number (Count of loyal patients).                         |

**Rules:**

- **Validation:** Input must be an array of objects.
- **Logic:** Count how many unique `patientId`s appear more than once in the list.

| Challenge 📢 | Ignore any visits that happened on a Friday (Bangladesh holiday) as these are considered emergency/extra visits and don't count toward regular loyalty tracking. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getActivePatientsCount([{patientId: 1, visitDate: "2026-03-23"}, {patientId: 1, visitDate: "2026-03-24"}])` ➔ `1`
- `getActivePatientsCount([{patientId: 2, visitDate: "2026-03-20"}])` ➔ `0` (Since March 20, 2026 is a Friday)

---
