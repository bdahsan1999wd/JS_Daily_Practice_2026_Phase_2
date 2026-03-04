# 🌙 JS DAILY PRACTICE – DAY 64

📅 **Goal:** Spiritual Productivity & Community Resource Management
🎯 **Focus:** Higher-order Functions • Object Filtering • Conditional Logic • Math Precision

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🕌 I'tikaf Space Allocator

⚠️ **Function Name:** `allocateItikafSpace()`

A mosque has a fixed number of spots for I'tikaf. Check if new applicants can be accommodated and calculate the remaining capacity.

| Input      | `totalSpots` (num), `occupiedSpots` (num), and `newApplicants` (num). |
| :--------- | :-------------------------------------------------------------------- |
| **Output** | Return a string message.                                              |

**Rules:**

- **Logic:** Calculate free space. If `newApplicants` fits, calculate remaining.
- **Validation:** All inputs must be positive integers. `occupiedSpots` cannot exceed `totalSpots`.

| Challenge 📢 | If `newApplicants` is exactly the amount of remaining space, return `"Perfectly Full"`. |
| :----------- | :-------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `allocateItikafSpace(50, 40, 5)` ➔ `"Accepted: 5 spots left"`
- `allocateItikafSpace(50, 45, 5)` ➔ `"Perfectly Full"`

---

## 🧩 PROBLEM–02: 🍲 Sahri Meal Box Validator

⚠️ **Function Name:** `validateMealBoxes()`

Check if a catering meal box is complete. Each box MUST contain: `dates`, `water`, and `mainCourse`.

| Input      | `box` (object: `{ dates: boolean, water: boolean, mainCourse: boolean }`). |
| :--------- | :------------------------------------------------------------------------- |
| **Output** | Return `true` or `false`.                                                  |

**Rules:**

- **Validation:** Input must be an object. If any of the 3 required keys are missing, return `"Invalid Box"`.
- **Challenge:** Use `Object.values()` and `every()` method to check if all values are `true` in one line.

**Sample Input & Output:**

- `validateMealBoxes({dates: true, water: true, mainCourse: true})` ➔ `true`
- `validateMealBoxes({dates: true, water: false, mainCourse: true})` ➔ `false`

---

## 🧩 PROBLEM–03: 🕙 Taraweeh Speed Calculator

⚠️ **Function Name:** `calculateRecitationSpeed()`

Calculate the average time spent per _Rakat_ during Taraweeh prayers to help the congregation plan.

| Input      | `totalMinutes` (number) and `rakatsCompleted` (number). |
| :--------- | :------------------------------------------------------ |
| **Output** | Return a string: `"[X] minutes per Rakat"`.             |

**Rules:**

- **Logic:** Divide `totalMinutes` by `rakatsCompleted`.
- **Validation:** Both must be positive numbers. `rakatsCompleted` cannot be 0.

| Challenge 📢 | Use `toFixed(1)` to show exactly one decimal place for the result. |
| :----------- | :----------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateRecitationSpeed(90, 20)` ➔ `"4.5 minutes per Rakat"`

---

## 🧩 PROBLEM–04: 💰 Zakat Eligibility Checker

⚠️ **Function Name:** `isZakatEligible()`

Determine if a person's net wealth meets the _Nisab_ threshold (Assume 80,000 BDT).

| Input      | `totalAssets` (number) and `debts` (number).        |
| :--------- | :-------------------------------------------------- |
| **Output** | Return `"Eligible \ Zakat: [X]"`or`"Not Eligible"`. |

**Rules:**

- **Logic:** Net Wealth = `totalAssets - debts`. Eligibility threshold = 80,000.
- **Zakat Calc:** Zakat is 2.5% ($0.025$) of Net Wealth.
- **Validation:** Inputs must be non-negative numbers.

| Challenge 📢 | Use `Math.round()` to return the Zakat amount as a whole number. |
| :----------- | :--------------------------------------------------------------- |

**Sample Input & Output:**

- `isZakatEligible(100000, 10000)` ➔ `"Eligible | Zakat: 2250"`

---

## 🧩 PROBLEM–05: 📋 Volunteer Shift Overlap

⚠️ **Function Name:** `hasShiftConflict()`

Check if two volunteers' shift timings overlap at the Iftar gate (24h format).

| Input      | `shift1` (array `[start, end]`) and `shift2` (array `[start, end]`). |
| :--------- | :------------------------------------------------------------------- |
| **Output** | Return `true` or `false`.                                            |

**Rules:**

- **Logic:** Overlap occurs if `(start1 < end2) && (end1 > start2)`.
- **Validation:** Each array must have exactly 2 numbers. `end` must be greater than `start`.

| Challenge 📢 | Input must be two arrays. If any array is missing or invalid, return `"Invalid Input"`. |
| :----------- | :-------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `hasShiftConflict([16, 18], [17, 19])` ➔ `true`
- `hasShiftConflict([14, 15], [16, 17])` ➔ `false`

---
