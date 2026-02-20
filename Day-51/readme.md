# 🌙 JS DAILY PRACTICE – DAY 51

📅 **Goal:** Ramadan Smart Systems: Community & Resource Management
🎯 **Focus:** Capacity Planning • Health Logic • Resource Allocation • Financial Rules

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory.
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🍲 Community Iftar Logistics

⚠️ **Function Name Must be `planIftarDistribution()`**

A community center needs to calculate if their current stock can meet the total demand of various nearby mosques.

| Input      | `stock` (number), `demandList` (array of numbers), and `isEmergency` (boolean). |
| :--------- | :------------------------------------------------------------------------------ |
| **Output** | Return `"Fully Supplied"`, `"Partial Supply"`, or `"Critical Shortage"`.        |

**Rules:**

- **Total Demand:** Calculate the sum of all numbers in the `demandList`.
- **Emergency Reserve:** If `isEmergency` is `true`, the `stock` effectively increases by **10%** for calculation purposes.
- **Fully Supplied:** Total stock >= Total demand.
- **Partial Supply:** Total stock is between **70% (inclusive)** and **100% (exclusive)** of the demand.
- **Critical Shortage:** Total stock is less than **70%** of the demand.

| Challenge 📢 | `stock` must be positive. `demandList` must be an array of positive numbers. |
| :----------- | :--------------------------------------------------------------------------- |

**Sample Input & Output:**

- `planIftarDistribution(100, [50, 50], false)` → `"Fully Supplied"`
- `planIftarDistribution(60, [100], false)` → `"Critical Shortage"`
- `planIftarDistribution(75, [100], false)` → `"Partial Supply"`

---

## 🧩 PROBLEM–02: 🕒 Suhoor Energy & Hydration

⚠️ **Function Name Must be `getSuhoorAdvice()`**

A health app estimates how many hours a person's energy will last based on their Suhoor nutrients.

| Input      | `proteinGrams` (number), `carbGrams` (number), and `isDateIncluded` (boolean). |
| :--------- | :----------------------------------------------------------------------------- |
| **Output** | Return the estimated energy hours (number).                                    |

**Rules:**

- **Energy Rate:** Every `10g` of protein lasts **2 hours**. Every `10g` of carbs lasts **1.5 hours**.
- **The Date Bonus:** If `isDateIncluded` is `true`, add **1 extra hour** to the total duration.
- **Maximum Cap:** The total energy hours cannot exceed **16 hours**.
- **Return Value:** Return the calculated number (not a string).

| Challenge 📢 | Nutrients must be non-negative numbers. `isDateIncluded` must be boolean. |
| :----------- | :------------------------------------------------------------------------ |

**Sample Input & Output:**

- `getSuhoorAdvice(40, 40, true)` → `15` (8 + 6 + 1)
- `getSuhoorAdvice(50, 60, true)` → `16` (Calculated 10 + 9 + 1 = 20, but capped at 16)
- `getSuhoorAdvice(-5, 20, false)` → `"Invalid Input"`

---

## 🧩 PROBLEM–03: 🕌 Digital Tasbih Milestones

⚠️ **Function Name Must be `getDhikirMilestone()`**

A smart ring tracks daily prayer counts and rewards users for consistency.

| Input      | `count` (number) and `consecutiveDays` (number).   |
| :--------- | :------------------------------------------------- |
| **Output** | Return `"Elite"`, `"Consistent"`, or `"Beginner"`. |

**Rules:**

- **Elite:** `count >= 1000` **AND** `consecutiveDays >= 10`.
- **Consistent:** `count` is between `300` and `999` (inclusive) **OR** `consecutiveDays` is between `5` and `9`.
- **Beginner:** Any other valid case where numbers are lower than the above.

| Challenge 📢 | Both inputs must be positive integers. |
| :----------- | :------------------------------------- |

**Sample Input & Output:**

- `getDhikirMilestone(1200, 15)` → `"Elite"`
- `getDhikirMilestone(400, 2)` → `"Consistent"`
- `getDhikirMilestone(100, 1)` → `"Beginner"`

---

## 🧩 PROBLEM–04: ⚖️ Zakat-al-Fitr (Fitra) Calculator

⚠️ **Function Name Must be `calculateTotalFitra()`**

Calculating the total Fitra amount for a family based on commodity prices.

| Input      | `familyMembers` (number), `commodity` (string), and `pricePerKg` (number). |
| :--------- | :------------------------------------------------------------------------- |
| **Output** | Return the total price (number).                                           |

**Rules:**

- **Formula:** `familyMembers * 3.5 * pricePerKg`.
- **Service Fee:** Add a flat **$2** processing fee to the final total.
- **Allowed Commodities:** Only `"Dates"`, `"Raisins"`, or `"Wheat"`. Any other string → `"Invalid Input"`.

| Challenge 📢 | `familyMembers` must be a positive integer. `pricePerKg` must be > 0. |
| :----------- | :-------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateTotalFitra(4, "Dates", 10)` → `142` (4 _ 3.5 _ 10 = 140 + 2)
- `calculateTotalFitra(2, "Gold", 5000)` → `"Invalid Input"`
- `calculateTotalFitra(1, "Wheat", 5)` → `19.5` (1 _ 3.5 _ 5 = 17.5 + 2)

---

## 🧩 PROBLEM–05: 💡 Mosque Solar Grid Management

⚠️ **Function Name Must be `manageMosquePower()`**

Managing electricity sources for a mosque during peak Ramadan hours to save energy.

| Input      | `batteryLevel` (number 0-100), `isPrayerTime` (boolean), and `isNight` (boolean). |
| :--------- | :-------------------------------------------------------------------------------- |
| **Output** | Return `"Use Solar"`, `"Use Grid"`, or `"Hybrid Mode"`.                           |

**Rules:**

- **Night Rule:** If `isNight` is `true` AND `batteryLevel < 20`, return `"Use Grid"`.
- **Prayer Priority:** If `isPrayerTime` is `true`:
  - If `batteryLevel > 50`, return `"Hybrid Mode"`.
  - Otherwise, return `"Use Grid"`.
- **Daylight Rule:** If `isNight` is `false` AND `batteryLevel > 30`, return `"Use Solar"`.
- **Default:** For all other cases, return `"Use Grid"`.

| Challenge 📢 | `batteryLevel` must be between 0-100. Other two must be booleans. |
| :----------- | :---------------------------------------------------------------- |

**Sample Input & Output:**

- `manageMosquePower(60, true, false)` → `"Hybrid Mode"`
- `manageMosquePower(80, false, false)` → `"Use Solar"`
- `manageMosquePower(15, false, true)` → `"Use Grid"`

---
