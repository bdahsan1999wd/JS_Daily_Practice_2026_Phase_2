# 🌙 JS DAILY PRACTICE – DAY 53

📅 **Goal:** Islamic Digital Services
🎯 **Focus:** Value-Based Logic • Condition Chaining • DateTime Logic • Charity Algorithms

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory.
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 💰 Zakat Calculator

⚠️ **Function Name:** `calculateZakat()`

Calculate the required Zakat based on the Nisab threshold (minimum wealth requirement).

| Input      | `totalWealth` (number).           |
| :--------- | :-------------------------------- |
| **Output** | Return the Zakat amount (number). |

**Rules:**

- **Nisab Threshold:** If `totalWealth` is less than **$600**, Zakat is **0**.
- **Calculation:** If wealth meets the Nisab, Zakat is **2.5%** of the `totalWealth`.

| Challenge 📢 | `totalWealth` must be a non-negative number. |
| :----------- | :------------------------------------------- |

**Sample Input & Output:**

- `calculateZakat(1000)` → `25`
- `calculateZakat(500)` → `0`
- `calculateZakat(-100)` → `"Invalid Input"`

---

## 🧩 PROBLEM–02: 🕌 Prayer Time Notifier

⚠️ **Function Name:** `getPrayerStatus()`

Identify the current prayer window or status based on a 24-hour clock.

| Input      | `hour24` (number).                         |
| :--------- | :----------------------------------------- |
| **Output** | Return the prayer name or status (string). |

**Rules:**

- **Fajr:** `5` to `6` (inclusive).
- **Dhuhr:** `12` to `13` (inclusive).
- **Asr:** `16` to `17` (inclusive).
- **Maghrib:** `18` to `19` (inclusive).
- **Isha:** `20` to `21` (inclusive).
- **Other:** Any other valid hour return `"Sunnah / Nafl Time"`.

| Challenge 📢 | `hour24` must be an integer between 0 and 23. |
| :----------- | :-------------------------------------------- |

**Sample Input & Output:**

- `getPrayerStatus(5)` → `"Fajr"`
- `getPrayerStatus(14)` → `"Sunnah / Nafl Time"`
- `getPrayerStatus(25)` → `"Invalid Input"`

---

## 🧩 PROBLEM–03: 🍱 Halal Ingredient Checker

⚠️ **Function Name:** `checkIngredientSafety()`

Determine if a food product is Halal, Haram, or Mashbooh (Doubtful).

| Input      | `ingredients` (array of strings) and `isSynthetic` (boolean). |
| :--------- | :------------------------------------------------------------ |
| **Output** | Return `"Halal"`, `"Haram"`, or `"Mashbooh"`.                 |

**Rules:**

- **Haram:** If the array contains `"Alcohol"` OR `"Pork"`.
- **Mashbooh:** If the array contains `"Gelatin"` AND `isSynthetic` is `false`.
- **Halal:** All other valid cases.

| Challenge 📢 | `ingredients` must be an array. `isSynthetic` must be a boolean. |
| :----------- | :--------------------------------------------------------------- |

**Sample Input & Output:**

- `checkIngredientSafety(["Water", "Sugar", "Pork"], true)` → `"Haram"`
- `checkIngredientSafety(["Water", "Gelatin"], false)` → `"Mashbooh"`
- `checkIngredientSafety(["Water", "Gelatin"], true)` → `"Halal"`

---

## 🧩 PROBLEM–04: 🌙 Ramadan Fasting Eligibility

⚠️ **Function Name:** `getFastingStatus()`

Determine if a person is required to fast during Ramadan.

| Input      | `age` (number), `isHealthy` (boolean), and `isTraveling` (boolean). |
| :--------- | :------------------------------------------------------------------ |
| **Output** | Return `"Obligatory"`, `"Excused"`, or `"Not Required"`.            |

**Rules:**

- **Obligatory:** If `age > 10` AND `isHealthy` is `true` AND `isTraveling` is `false`.
- **Excused:** If `isTraveling` is `true` OR (`age > 10` AND `isHealthy` is `false`).
- **Not Required:** If `age <= 10`.

| Challenge 📢 | `age` must be a positive number. Health and Travel status must be booleans. |
| :----------- | :-------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getFastingStatus(25, true, false)` → `"Obligatory"`
- `getFastingStatus(30, true, true)` → `"Excused"`
- `getFastingStatus(8, true, false)` → `"Not Required"`

---

## 🧩 PROBLEM–05: ✨ Charity Reward Multiplier

⚠️ **Function Name:** `calculateRewardPoints()`

A conceptual system to calculate reward multipliers for Sadaqah (Charity).

| Input      | `amount` (number), `isSecret` (boolean), and `isRamadan` (boolean). |
| :--------- | :------------------------------------------------------------------ |
| **Output** | Return the total reward points (number).                            |

**Rules:**

- **Base Points:** `amount * 10`.
- **Secret Bonus:** If `isSecret` is `true`, multiply the current points by **2**.
- **Ramadan Bonus:** If `isRamadan` is `true`, multiply the current points by **70**.
- **Note:** Apply the Secret bonus first, then the Ramadan bonus.

| Challenge 📢 | `amount` must be a positive number. |
| :----------- | :---------------------------------- |

**Sample Input & Output:**

- `calculateRewardPoints(10, false, false)` → `100`
- `calculateRewardPoints(10, true, true)` → `14000`
- `calculateRewardPoints(5, true, false)` → `100`

---
