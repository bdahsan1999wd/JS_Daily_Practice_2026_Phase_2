# 🌙 JS DAILY PRACTICE – DAY 59

📅 **Goal:** Advanced Community Hub & Resource Logic
🎯 **Focus:** Array Searching • Rounding Logic • Percentage Thresholds • Nested Object Validation

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🕌 Prayer Row Alignment

⚠️ **Function Name:** `calculateRequiredMats()`

Calculate how many prayer mats are needed for a specific number of musallis, assuming one mat covers a certain number of people.

| Input      | `totalMusallis` (number) and `peoplePerMat` (number). |
| :--------- | :---------------------------------------------------- |
| **Output** | Return the number of mats needed (integer).           |

**Rules:**

- **Logic:** Divide `totalMusallis` by `peoplePerMat`.
- **Rounding:** Since you cannot have a partial mat, use `Math.ceil()` to round up to the nearest whole number.

| Challenge 📢 | Both inputs must be positive integers. |
| :----------- | :------------------------------------- |

**Sample Input & Output:**

- `calculateRequiredMats(10, 3)` ➔ `4`
- `calculateRequiredMats(100, 10)` ➔ `10`
- `calculateRequiredMats(0, 5)` ➔ `"Invalid Input"`

---

## 🧩 PROBLEM–02: 🍲 Iftar Menu Costing

⚠️ **Function Name:** `getTotalMenuCost()`

Calculate the total cost of an Iftar menu including a mandatory donation tax.

| Input      | `items` (array of objects) and `donationPercent` (number). |
| :--------- | :--------------------------------------------------------- |
| **Output** | Return the final total cost (number).                      |

**Rules:**

- **Structure:** `items` array: `[{ name: "Dates", price: 50 }, { name: "Juice", price: 100 }]`.
- **Logic:** Calculate the subtotal of all item prices, then add the `donationPercent` to the subtotal.
- **Example:** If subtotal is $150 and donation is 10%, total is $165.

| Challenge 📢 | `items` must be a non-empty array. `donationPercent` must be non-negative. |
| :----------- | :------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getTotalMenuCost([{price: 100}, {price: 200}], 10)` ➔ `330`
- `getTotalMenuCost([{price: 50}], 0)` ➔ `50`

---

## 🧩 PROBLEM–03: 🚑 Medical Camp Categorization

⚠️ **Function Name:** `categorizePatient()`

A Ramadan medical camp categorizes patients based on age and fasting status for checkups.

| Input      | `age` (number) and `isFasting` (boolean).                    |
| :--------- | :----------------------------------------------------------- |
| **Output** | Return `"Pediatric"`, `"Senior Care"`, or `"Adult Routine"`. |

**Rules:**

- **Pediatric:** `age < 15`.
- **Senior Care:** `age >= 60`.
- **Adult Routine:** `age` between 15 and 59 (inclusive).
- **Special Note:** If the patient is `isFasting` and in the `"Adult Routine"` category, return `"Adult Fasting Checkup"`.

| Challenge 📢 | `age` must be a positive integer between 1 and 120. |
| :----------- | :-------------------------------------------------- |

**Sample Input & Output:**

- `categorizePatient(10, true)` ➔ `"Pediatric"`
- `categorizePatient(30, true)` ➔ `"Adult Fasting Checkup"`
- `categorizePatient(65, false)` ➔ `"Senior Care"`

---

## 🧩 PROBLEM–04: 📚 Quran Study Progress

⚠️ **Function Name:** `getStudyStatus()`

Check if a student has met the minimum reading goal for the week.

| Input      | `pagesRead` (number) and `targetPages` (number).               |
| :--------- | :------------------------------------------------------------- |
| **Output** | Return `"Goal Met"`, `"Needs Improvement"`, or `"Excellence"`. |

**Rules:**

- **Excellence:** `pagesRead` is 20% or more above the `targetPages`.
- **Goal Met:** `pagesRead` is between 100% and 119% of the `targetPages`.
- **Needs Improvement:** `pagesRead` is less than the `targetPages`.

| Challenge 📢 | Both inputs must be positive numbers. |
| :----------- | :------------------------------------ |

**Sample Input & Output:**

- `getStudyStatus(120, 100)` ➔ `"Excellence"`
- `getStudyStatus(105, 100)` ➔ `"Goal Met"`
- `getStudyStatus(80, 100)` ➔ `"Needs Improvement"`

---

## 🧩 PROBLEM–05: 🕒 Taraweeh Timing Checker

⚠️ **Function Name:** `isLateForTaraweeh()`

Determine if a person will make it to the mosque before Taraweeh starts.

| Input      | `currentTime` (string "HH:MM"), `startTime` (string "HH:MM"), and `travelMinutes` (number). |
| :--------- | :------------------------------------------------------------------------------------------ |
| **Output** | Return `true` (if late) or `false` (if on time).                                            |

**Rules:**

- **Logic:** Add `travelMinutes` to the `currentTime`. If the arrival time is strictly after `startTime`, return `true`.
- **Format:** Assume 24-hour format.
- **Hint:** Convert everything to "minutes from midnight" for easy comparison.

| Challenge 📢 | Times must be in valid "HH:MM" format. `travelMinutes` must be positive. |
| :----------- | :----------------------------------------------------------------------- |

**Sample Input & Output:**

- `isLateForTaraweeh("19:50", "20:00", 5)` ➔ `false` (Arrives at 19:55)
- `isLateForTaraweeh("19:55", "20:00", 10)` ➔ `true` (Arrives at 20:05)
- `isLateForTaraweeh("25:00", "20:00", 5)` ➔ `"Invalid Input"`

---
