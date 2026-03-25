# 🌙 JS DAILY PRACTICE – DAY-85

📅 **Goal:** MedFlow Clinical Intelligence & Logistics
🎯 **Focus:** Conditional Triage • Stock Management • Date Comparison • Data Transformation

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🚨 Emergency Triage Engine

⚠️ **Function Name:** `getTriagePriority()`

In a busy clinic, you need to automatically prioritize patients based on their vital signs.

| Input      | `vitals` (Object with `heartRate`, `oxygen`, `temperature`). |
| :--------- | :----------------------------------------------------------- |
| **Output** | Return string ("Emergency", "Urgent", or "Normal").          |

**Rules:**

- **Validation:** Input must be an object with all three numeric properties.
- **Logic:** - `"Emergency"` if `oxygen < 90` OR `heartRate > 120`.
  - `"Urgent"` if `temperature > 103` OR `heartRate > 100`.
  - Otherwise ➔ `"Normal"`.

| Challenge 📢 | If the patient is an `"Emergency"` AND their `temperature > 104`, return `"CRITICAL RED ALERT"`. |
| :----------- | :----------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getTriagePriority({heartRate: 130, oxygen: 88, temperature: 98.6})` ➔ `"CRITICAL RED ALERT"`
- `getTriagePriority({heartRate: 72, oxygen: 98, temperature: 98.6})` ➔ `"Normal"`

---

## 🧩 PROBLEM–02: 💊 Pharmacy Stock Alert

⚠️ **Function Name:** `checkMedicineStock()`

Your SaaS helps clinics manage their internal pharmacy. You need to identify which medicines need restocking.

| Input      | `inventory` (Array of objects with `name` and `quantity`). |
| :--------- | :--------------------------------------------------------- |
| **Output** | Return Array of strings (Medicine names).                  |

**Rules:**

- **Validation:** Input must be an array of objects.
- **Logic:** Return a list of medicine names where the `quantity` is less than 50.

| Challenge 📢 | If the `quantity` is exactly 0, add the suffix `" (OUT OF STOCK)"` to that medicine name. The final list should be sorted alphabetically. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkMedicineStock([{name: "Napa", quantity: 10}, {name: "Ace", quantity: 0}])` ➔ `["Ace (OUT OF STOCK)", "Napa"]`

---

## 🧩 PROBLEM–03: 📅 Follow-up Date Generator

⚠️ **Function Name:** `generateFollowUpDate()`

Doctors often tell patients to return after 7, 14, or 30 days. You need to calculate that specific date.

| Input      | `visitDate` (string "YYYY-MM-DD") and `days` (number). |
| :--------- | :----------------------------------------------------- |
| **Output** | Return string ("YYYY-MM-DD").                          |

**Rules:**

- **Validation:** `visitDate` must be a valid date string; `days` must be a positive integer.
- **Logic:** Add the number of `days` to the `visitDate` and return the new date.

| Challenge 📢 | If the calculated date falls on a Friday (Bangladesh clinic holiday), add 1 extra day so the follow-up is on a Saturday. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `generateFollowUpDate("2026-03-22", 7)` ➔ `"2026-03-29"`
- `generateFollowUpDate("2026-03-19", 1)` ➔ `"2026-03-21"` (Since 20th March 2026 is Friday)

---

## 🧩 PROBLEM–04: 🏥 Lab Test Bundle Discount

⚠️ **Function Name:** `calculateBundlePrice()`

To encourage full checkups, labs offer discounts when multiple tests are booked together.

| Input      | `testPrices` (Array of numbers). |
| :--------- | :------------------------------- |
| **Output** | Return number (Total Price).     |

**Rules:**

- **Validation:** Input must be an array of at least 2 numbers.
- **Logic:** Sum all the test prices.

| Challenge 📢 | Apply a 10% discount if exactly 3 tests are booked. Apply a 20% discount if 5 or more tests are booked. Round the final total to the nearest integer and return as a Number. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateBundlePrice([500, 500, 500])` ➔ `1350`
- `calculateBundlePrice([1000, 1000])` ➔ `2000`

---

## 🧩 PROBLEM–05: 🔍 Doctor Availability Sorter

⚠️ **Function Name:** `getAvailableDoctors()`

The Patient App needs to show which doctors are currently active and sort them by wait time.

| Input      | `doctors` (Array of objects with `name`, `isActive`, `currentQueue`). |
| :--------- | :-------------------------------------------------------------------- |
| **Output** | Return Array of strings (Names).                                      |

**Rules:**

- **Validation:** Input must be a non-empty array of objects.
- **Logic:** Filter for doctors where `isActive` is `true`.

| Challenge 📢 | Sort the resulting list so that doctors with the shortest `currentQueue` appear first. If two doctors have the same queue length, sort them alphabetically by name. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `getAvailableDoctors([{name: "Dr. Z", isActive: true, currentQueue: 10}, {name: "Dr. A", isActive: true, currentQueue: 2}])` ➔ `["Dr. A", "Dr. Z"]`

---
