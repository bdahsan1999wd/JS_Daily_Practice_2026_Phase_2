# 🌙 JS DAILY PRACTICE – DAY 58

📅 **Goal:** Charity Tracking & Digital Logistics
🎯 **Focus:** Object Property Access • Array Summation • Ratio Calculation • Complex Logic

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 💰 Zakat-ul-Maal Validator

⚠️ **Function Name:** `validateZakatEligibility()`

Check if a person's specific asset meets the Nisab threshold after debts are subtracted.

| Input      | `assetValue` (number) and `debtAmount` (number). |
| :--------- | :----------------------------------------------- |
| **Output** | Return `true` or `false` (boolean).              |

**Rules:**

- **Logic:** Subtract `debtAmount` from `assetValue`.
- **Threshold:** If the remaining wealth is **$600** or more, return `true`.
- **Otherwise:** Return `false`.

| Challenge 📢 | Both inputs must be non-negative numbers. |
| :----------- | :---------------------------------------- |

**Sample Input & Output:**

- `validateZakatEligibility(1000, 200)` ➔ `true` (800 >= 600)
- `validateZakatEligibility(700, 200)` ➔ `false` (500 < 600)
- `validateZakatEligibility(-100, 0)` ➔ `"Invalid Input"`

---

## 🧩 PROBLEM–02: 🍛 Iftar Crowd Estimator

⚠️ **Function Name:** `estimateIftarSeating()`

A mosque has different types of mats. Calculate the total seating capacity.

| Input      | `matsArray` (array of objects). |
| :--------- | :------------------------------ |
| **Output** | Return total capacity (number). |

**Rules:**

- **Structure:** `matsArray` looks like `[{ type: "Large", count: 5, capacityPerMat: 10 }, ...]`.
- **Logic:** Sum up the total capacity (`count * capacityPerMat`) for all objects in the array.

| Challenge 📢 | `matsArray` must be an array. If empty, return `0`. |
| :----------- | :-------------------------------------------------- |

**Sample Input & Output:**

- `estimateIftarSeating([{count: 2, capacityPerMat: 10}, {count: 5, capacityPerMat: 4}])` ➔ `40`
- `estimateIftarSeating([])` ➔ `0`

---

## 🧩 PROBLEM–03: 🤝 Group Sadaqah Splitter

⚠️ **Function Name:** `calculateSadaqahShare()`

A group of friends wants to donate collectively. Calculate how much one person needs to contribute to meet the target.

| Input      | `targetAmount` (number), `currentTotal` (number), and `remainingFriends` (number). |
| :--------- | :--------------------------------------------------------------------------------- |
| **Output** | Return the required share per person (number).                                     |

**Rules:**

- **Logic:** `(targetAmount - currentTotal) / remainingFriends`.
- **Goal Reached:** If `currentTotal >= targetAmount`, return `0`.

| Challenge 📢 | All inputs must be positive numbers. `remainingFriends` must be at least 1. |
| :----------- | :-------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateSadaqahShare(1000, 400, 3)` ➔ `200`
- `calculateSadaqahShare(500, 600, 2)` ➔ `0`

---

## 🧩 PROBLEM–04: 🥘 Suhoor Nutrition Scanner

⚠️ **Function Name:** `checkSuhoorBalance()`

A nutritionist checks if a meal has a balanced ratio of Protein and Carbs.

| Input      | `protein` (number) and `carbs` (number).                          |
| :--------- | :---------------------------------------------------------------- |
| **Output** | Return `"Balanced"`, `"Too Many Carbs"`, or `"Too Much Protein"`. |

**Rules:**

- **Balanced:** `carbs` is between 1 to 2 times the amount of `protein` (inclusive).
- **Too Many Carbs:** `carbs > protein * 2`.
- **Too Much Protein:** `carbs < protein`.

| Challenge 📢 | Both inputs must be positive numbers. |
| :----------- | :------------------------------------ |

**Sample Input & Output:**

- `checkSuhoorBalance(50, 80)` ➔ `"Balanced"`
- `checkSuhoorBalance(30, 100)` ➔ `"Too Many Carbs"`
- `checkSuhoorBalance(60, 40)` ➔ `"Too Much Protein"`

---

## 🧩 PROBLEM–05: 🕋 Hajj Savings Tracker

⚠️ **Function Name:** `getHajjSavingsStatus()`

Check if a user has saved enough for Hajj based on the year's cost.

| Input      | `savedAmount` (number) and `packageCost` (number). |
| :--------- | :------------------------------------------------- |
| **Output** | Return status string.                              |

**Rules:**

- **Ready:** If `savedAmount >= packageCost`, return `"Ready to Apply"`.
- **Close:** If `savedAmount` is at least **80%** of the `packageCost`, return `"Almost There"`.
- **In Progress:** Any other valid case.

| Challenge 📢 | Both inputs must be positive numbers. |
| :----------- | :------------------------------------ |

**Sample Input & Output:**

- `getHajjSavingsStatus(5000, 5000)` ➔ `"Ready to Apply"`
- `getHajjSavingsStatus(4200, 5000)` ➔ `"Almost There"`
- `getHajjSavingsStatus(1000, 5000)` ➔ `"In Progress"`

---
