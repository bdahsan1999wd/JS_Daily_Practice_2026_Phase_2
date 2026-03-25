# 🌙 JS DAILY PRACTICE – DAY-84

📅 **Goal:** MedFlow Data Sync & System Constraints
🎯 **Focus:** Date Arithmetic • Logical Filtering • String Templates • Value Mapping

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🎂 Patient Age Calculator

⚠️ **Function Name:** `calculatePatientAge()`

In your database, you store `dateOfBirth`. You need to calculate the patient's current age to show the doctor if they are a "Pediatric" (Child) or "Adult" patient.

| Input      | `dobString` (string - format "YYYY-MM-DD"). |
| :--------- | :------------------------------------------ |
| **Output** | Return number (Full years).                 |

**Rules:**

- **Validation:** Input must be a valid date string and not in the future.
- **Logic:** Calculate the difference in years between the current date and the DOB.

| Challenge 📢 | If the calculated age is less than 1, return the string `"Infant"`. If the age is exactly 0 but the birth year is the current year, it should still return `"Infant"`. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculatePatientAge("1995-05-20")` ➔ `30` (Assuming current year 2026)
- `calculatePatientAge("2026-01-01")` ➔ `"Infant"`

---

## 🧩 PROBLEM–02: 🏥 Clinic Hours Validator

⚠️ **Function Name:** `isClinicOpen()`

Check if a patient can book an appointment based on the clinic's operating hours.

| Input      | `checkTime` (string "HH:MM") and `closingTime` (string "HH:MM"). |
| :--------- | :--------------------------------------------------------------- |
| **Output** | Return boolean.                                                  |

**Rules:**

- **Validation:** Both inputs must be valid 24-hour format strings.
- **Logic:** Return `true` if `checkTime` is at least 30 minutes before `closingTime`.

| Challenge 📢 | If the `checkTime` is exactly equal to the `closingTime`, return the string `"Emergency Only"`. |
| :----------- | :---------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `isClinicOpen("18:00", "20:00")` ➔ `true`
- `isClinicOpen("19:45", "20:00")` ➔ `false` (Less than 30 mins left)

---

## 🧩 PROBLEM–03: 🧪 Lab Result Normalizer

⚠️ **Function Name:** `normalizeLabResult()`

Lab reports come in different units. You need to flag results that are "High", "Low", or "Normal" based on a reference range.

| Input      | `value` (number), `min` (number), `max` (number). |
| :--------- | :------------------------------------------------ |
| **Output** | Return string.                                    |

**Rules:**

- **Validation:** All inputs must be positive numbers. `min` must be less than `max`.
- **Logic:** - If `value` < `min` ➔ `"Low"`
  - If `value` > `max` ➔ `"High"`
  - Otherwise ➔ `"Normal"`

| Challenge 📢 | If the value is more than 50% above the `max`, return `"CRITICAL HIGH"`. If it is more than 50% below the `min`, return `"CRITICAL LOW"`. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `normalizeLabResult(10, 20, 50)` ➔ `"LOW"`
- `normalizeLabResult(55, 20, 50)` ➔ `"High"`

---

## 🧩 PROBLEM–04: 📑 Prescription Serial Generator

⚠️ **Function Name:** `generateRxSerial()`

Every prescription needs a unique, professional-looking serial number for tracking.

| Input      | `clinicCode` (string), `doctorId` (number), `rxCount` (number). |
| :--------- | :-------------------------------------------------------------- |
| **Output** | Return string.                                                  |

**Rules:**

- **Validation:** `clinicCode` (3 chars), `doctorId` (positive), `rxCount` (positive).
- **Logic:** Combine them in the format: `CODE-DOCID-COUNT`.

| Challenge 📢 | The `rxCount` must be padded with zeros to be at least 5 digits long (e.g., 42 becomes `00042`). `clinicCode` must be in Uppercase. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `generateRxSerial("dmc", 101, 42)` ➔ `"DMC-101-00042"`

---

## 🧩 PROBLEM–05: 🏥 Department Wise Queue

⚠️ **Function Name:** `getDepartmentQueue()`

Sort a list of waiting patients into their specific departments for the main clinic monitor.

| Input      | `patientList` (Array of objects with `name` and `dept`). |
| :--------- | :------------------------------------------------------- |
| **Output** | Return Object.                                           |

**Rules:**

- **Validation:** Input must be an array of objects.
- **Logic:** Group patients by department. The value should be a string of names joined by a comma.

| Challenge 📢 | If a patient has no department assigned, group them under `"General"`. Limit the names in each string to the first 3 patients only, followed by `"...and more"` if there are others. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getDepartmentQueue([{name: "A", dept: "Dental"}, {name: "B", dept: "Dental"}, {name: "C", dept: "Dental"}, {name: "D", dept: "Dental"}])` ➔ `{ Dental: "A, B, C, ...and more" }`

---
