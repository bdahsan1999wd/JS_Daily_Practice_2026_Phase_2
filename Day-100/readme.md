# 🏆 JS DAILY PRACTICE – DAY-100

📅 **Goal:** Full-Scale Hospital Operating System (HOS) Core
🎯 **Focus:** Logic Integration • Data Integrity • Precision Math • Resource Allocation

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 📑 Patient ID Search Engine

⚠️ **Function Name:** `findPatient()`

Search for a specific patient in a database using either their `ID` or `Name`.

| Input      | `patientList` (Array of objects), `searchQuery` (string or number). |
| :--------- | :------------------------------------------------------------------ |
| **Output** | Return Object or Array or string.                                   |

**Rules:**

- **Validation:** `patientList` must be an array; `searchQuery` must be a string or number.
- **Logic:** If `searchQuery` is a number, match it with `patient.id`. If it's a string, match with `patient.name` (case-insensitive).

| Challenge 📢 | If no patient is found, return `"PATIENT_NOT_FOUND"`. If multiple patients have the same name, return an array of all matching objects. |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `findPatient([{id: 1, name: "Ahsan"}, {id: 2, name: "Karim"}], 1)` ➔ `{id: 1, name: "Ahsan"}`
- `findPatient([{id: 1, name: "Abir"}, {id: 2, name: "Abir"}], "abir")` ➔ `[{id: 1, name: "Abir"}, {id: 2, name: "Abir"}]`

---

## 🧩 PROBLEM–02: 🌡️ ICU Critical Alert System

⚠️ **Function Name:** `getICUAlertLevel()`

Monitor a patient's vitals (Heart Rate, Oxygen, Temp) and determine their safety level.

| Input      | `vitals` (Object: `{hr, spo2, temp}`). |
| :--------- | :------------------------------------- |
| **Output** | Return string.                         |

**Rules:**

- **Validation:** Input must be an object with three numeric properties.
- **Logic:** **Level Red:** If `spo2 < 85` OR `hr > 140` ➔ `"CRITICAL_RED"`. **Level Orange:** If `spo2` is 85-90 OR `temp > 39.5` ➔ `"CRITICAL_ORANGE"`.

| Challenge 📢 | If all vitals are normal (`hr: 60-100`, `spo2: 95+`, `temp: 36.0-37.5`), return `"STABLE"`. For anything else not covered by Red/Orange/Stable, return `"OBSERVATION_REQUIRED"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getICUAlertLevel({hr: 150, spo2: 80, temp: 37})` ➔ `"CRITICAL_RED"`
- `getICUAlertLevel({hr: 75, spo2: 98, temp: 36.5})` ➔ `"STABLE"`

---

## 🧩 PROBLEM–03: 💊 Automated Dose Adjuster

⚠️ **Function Name:** `adjustMedicationDose()`

Adjust the medicine dosage based on the patient's kidney function (`eGFR` score).

| Input      | `baseDose` (number), `eGFR` (number). |
| :--------- | :------------------------------------ |
| **Output** | Return number or string.              |

**Rules:**

- **Validation:** Both inputs must be positive numbers.
- **Logic:** If `eGFR >= 90` ➔ 100% of dose; If `eGFR` 60-89 ➔ 75% of dose; If `eGFR` 30-59 ➔ 50% of dose.

| Challenge 📢 | If `eGFR < 30`, the medicine is dangerous; return `"CONTRAINDICATED: DOSE_NOT_SAFE"`. Round the final numeric dose to the nearest whole number. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `adjustMedicationDose(500, 45)` ➔ `250`
- `adjustMedicationDose(400, 25)` ➔ `"CONTRAINDICATED: DOSE_NOT_SAFE"`

---

## 🧩 PROBLEM–04: 📅 Advanced Appointment Scheduler

⚠️ **Function Name:** `scheduleAppointment()`

Validate if an appointment slot can be booked based on doctor availability.

| Input      | `slot` (string), `isDoctorOnLeave` (boolean), `bookedSlots` (Array of strings). |
| :--------- | :------------------------------------------------------------------------------ |
| **Output** | Return string.                                                                  |

**Rules:**

- **Validation:** `slot` must be a string; `bookedSlots` must be an array.
- **Logic:** If `isDoctorOnLeave` is `true`, return `"DOCTOR_UNAVAILABLE"`. If `slot` is already in `bookedSlots`, return `"SLOT_ALREADY_BOOKED"`.

| Challenge 📢 | If the slot is available, return `"SUCCESS: [slot] Booked"`. However, if the `bookedSlots` array already has 10 or more entries, return `"DAILY_LIMIT_REACHED"`. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `scheduleAppointment("10:00 AM", false, ["09:00 AM"])` ➔ `"SUCCESS: 10:00 AM Booked"`
- `scheduleAppointment("11:00 AM", false, ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM"])` ➔ `"DAILY_LIMIT_REACHED"`

---

## 🧩 PROBLEM–05: 🏥 Room Bill Calculator

⚠️ **Function Name:** `calculateRoomBill()`

Calculate the total bill based on stay duration, room type, and insurance coverage.

| Input      | `days` (number), `roomType` (string), `hasInsurance` (boolean). |
| :--------- | :-------------------------------------------------------------- |
| **Output** | Return number.                                                  |

**Rules:**

- **Rates:** `"General": 1000/day`, `"Cabin": 3000/day`, `"VIP": 7000/day`.
- **Logic:** If stay is `> 7 days`, apply a **10% discount** on the subtotal.

| Challenge 📢 | If `hasInsurance` is `true`, the patient only pays **20%** of the final bill (after discount). Return the final amount as a pure Number. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateRoomBill(10, "General", false)` ➔ `9000`
- `calculateRoomBill(2, "Cabin", true)` ➔ `1200`

---

## 🧩 PROBLEM–06: 🚑 Emergency Priority Sort

⚠️ **Function Name:** `sortEmergencyQueue()`

Sort ER patients based on their severity score (1 to 10, 10 being most critical).

| Input      | `patients` (Array of objects: `{name, severity}`). |
| :--------- | :------------------------------------------------- |
| **Output** | Return Array of strings (Names only).              |

**Rules:**

- **Validation:** Input must be an array of objects.
- **Logic:** Sort the array by `severity` in descending order (highest first).

| Challenge 📢 | If two patients have the **same** severity, the one who arrived first (lower index in original array) must stay ahead. Return only the names of patients in the sorted order. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `sortEmergencyQueue([{name: "A", severity: 5}, {name: "B", severity: 9}])` ➔ `["B", "A"]`
- `sortEmergencyQueue([{name: "X", severity: 8}, {name: "Y", severity: 8}])` ➔ `["X", "Y"]`

---

## 🧩 PROBLEM–07: 🧪 Lab Report Formatter

⚠️ **Function Name:** `formatLabReport()`

Standardize a lab result into a clean, professional string.

| Input      | `testName` (string), `result` (number), `unit` (string), `refHigh` (number). |
| :--------- | :--------------------------------------------------------------------------- |
| **Output** | Return string.                                                               |

**Rules:**

- **Validation:** `testName` and `unit` strings; `result` and `refHigh` numbers.
- **Logic:** Return format: `"Test: [TESTNAME] | Result: [result] [unit]"`. `testName` must be in UPPERCASE.

| Challenge 📢 | If `result` is strictly greater than `refHigh`, append `"(ABNORMAL)"` to the end of the string. |
| :----------- | :---------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `formatLabReport("glucose", 110, "mg/dL", 100)` ➔ `"Test: GLUCOSE | Result: 110 mg/dL (ABNORMAL)"`
- `formatLabReport("hgb", 14, "g/dL", 16)` ➔ `"Test: HGB | Result: 14 g/dL"`

---

## 🧩 PROBLEM–08: 🛡️ Security Access Control

⚠️ **Function Name:** `canAccessRecords()`

Check if a staff member is authorized to view sensitive patient files.

| Input      | `role` (string), `department` (string), `isEmergency` (boolean). |
| :--------- | :--------------------------------------------------------------- |
| **Output** | Return boolean.                                                  |

**Rules:**

- **Logic:** `"Admin"` role always returns `true`. `"Doctor"` role returns `true` ONLY if `department` is `"Medical"`.

| Challenge 📢 | If `isEmergency` is `true`, return `true` regardless of role or department (Life-saving override). |
| :----------- | :------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `canAccessRecords("Nurse", "Surgery", true)` ➔ `true`
- `canAccessRecords("Doctor", "Accounts", false)` ➔ `false`

---

## 🧩 PROBLEM–09: 📊 Revenue Statistics Analyzer

⚠️ **Function Name:** `getRevenueStats()`

Analyze an array of daily department revenues.

| Input      | `revenues` (Array of numbers). |
| :--------- | :----------------------------- |
| **Output** | Return Object or string.       |

**Rules:**

- **Logic:** Calculate `{ total, min, max, avg }`. Ignore any negative numbers in the array.
- **Validation:** If array is empty or has no valid numbers, return `"NO_DATA"`.

| Challenge 📢 | Round the `avg` (average) to exactly 2 decimal places. Return the result as an Object. |
| :----------- | :------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getRevenueStats([100, 200, -50, 300])` ➔ `{ total: 600, min: 100, max: 300, avg: 200 }`
- `getRevenueStats([])` ➔ `"NO_DATA"`

---

## 🧩 PROBLEM–10: 🏁 Final Night-Shift Validator

⚠️ **Function Name:** `validateSystemState()`

Check if the hospital is ready for the high-pressure night shift.

| Input      | `staffCount` (number), `isGenReady` (boolean), `criticalPatients` (number). |
| :--------- | :-------------------------------------------------------------------------- |
| **Output** | Return string.                                                              |

**Rules:**

- **Logic:** System is `"READY"` if `staffCount >= 10` AND `isGenReady` is `true`.

| Challenge 📢 | If `criticalPatients > staffCount`, return `"SYSTEM_OVERLOADED"`. If system is ready but `staffCount` is between 10 and 15, return `"READY_MINIMAL_STAFF"`. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `validateSystemState(12, true, 5)` ➔ `"READY_MINIMAL_STAFF"`
- `validateSystemState(18, true, 2)` ➔ `"READY"`
