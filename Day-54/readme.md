# 🌙 JS DAILY PRACTICE – DAY 54

📅 **Goal:** Ramadan Digital Assistant Logic
🎯 **Focus:** Array Manipulation • Nested Conditions • Object Handling • Time Conversions

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory.
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🕒 Iftar Countdown Minute

⚠️ **Function Name:** `getMinutesToIftar()`

Calculate how many minutes are left until Iftar based on the current time.

| Input      | `currentHour`, `currentMin`, `maghribHour`, `maghribMin` (numbers). |
| :--------- | :------------------------------------------------------------------ |
| **Output** | Return the total minutes remaining (number).                        |

**Rules:**

- **Logic:** Convert both times into "total minutes from 00:00" ($hour \times 60 + minutes$).
- **Condition:** If current time is past Maghrib, return **0**.

| Challenge 📢 | All inputs must be integers ($0 \le hour < 24$ and $0 \le min < 60$). |
| :----------- | :-------------------------------------------------------------------- |

**Sample Input & Output:**

- `getMinutesToIftar(17, 30, 18, 15)` → `45`
- `getMinutesToIftar(19, 0, 18, 15)` → `0`
- `getMinutesToIftar(25, 0, 18, 15)` → `"Invalid Input"`

---

## 🧩 PROBLEM–02: ⚡ Ramadan Energy Advisor

⚠️ **Function Name:** `getEnergyAdvice()`

Provide advice based on a person's current energy level and time of day.

| Input      | `energyLevel` (number) and `isBeforeIftar` (boolean). |
| :--------- | :---------------------------------------------------- |
| **Output** | Return a recommendation string.                       |

**Rules:**

- **High Energy (7-10) & Before Iftar:** `"Perfect time for Quran or light work."`
- **Low Energy (1-3) & Before Iftar:** `"Take a short nap or do Dhikr."`
- **After Iftar (Any Energy):** `"Focus on Taraweeh and hydration."`
- **Others:** `"Keep a steady pace."`

| Challenge 📢 | `energyLevel` must be 1 to 10. `isBeforeIftar` must be boolean. |
| :----------- | :-------------------------------------------------------------- |

**Sample Input & Output:**

- `getEnergyAdvice(8, true)` → `"Perfect time for Quran or light work."`
- `getEnergyAdvice(2, true)` → `"Take a short nap or do Dhikr."`
- `getEnergyAdvice(5, false)` → `"Focus on Taraweeh and hydration."`

---

## 🧩 PROBLEM–03: 📖 Quran Khatam Planner

⚠️ **Function Name:** `getPagesPerDay()`

Calculate daily page targets to finish the Quran (604 pages) within the remaining days of Ramadan.

| Input      | `daysRemaining` (number).                    |
| :--------- | :------------------------------------------- |
| **Output** | Return the number of pages per day (number). |

**Rules:**

- **Formula:** $604 / daysRemaining$.
- **Requirement:** Use `Math.ceil()` to ensure the target completes the Quran.

| Challenge 📢 | `daysRemaining` must be a positive integer between 1 and 30. |
| :----------- | :----------------------------------------------------------- |

**Sample Input & Output:**

- `getPagesPerDay(30)` → `21`
- `getPagesPerDay(10)` → `61`
- `getPagesPerDay(0)` → `"Invalid Input"`

---

## 🧩 PROBLEM–04: ⚖️ Fitra Calculator

⚠️ **Function Name:** `calculateTotalFitra()`

Calculate the total Fitra amount for a household based on the chosen commodity.

| Input      | `familyMembers` (number) and `commodity` (string). |
| :--------- | :------------------------------------------------- |
| **Output** | Return the total Fitra amount (number).            |

**Rules:**

- **Rates:** `"Dates"` = 10, `"Raisins"` = 15, `"Wheat"` = 2.
- **Error Handling:** If the commodity is not in the list, return `"Invalid Commodity"`.

| Challenge 📢 | `familyMembers` must be a positive integer. |
| :----------- | :------------------------------------------ |

**Sample Input & Output:**

- `calculateTotalFitra(5, "Dates")` → `50`
- `calculateTotalFitra(4, "Wheat")` → `8`
- `calculateTotalFitra(3, "Rice")` → `"Invalid Commodity"`

---

## 🧩 PROBLEM–05: 🚶 Taraweeh Tracker

⚠️ **Function Name:** `getTaraweehStatus()`

Track progress based on the number of Rak'ahs completed and school of thought.

| Input      | `rakahsDone` (number) and `isShafi` (boolean). |
| :--------- | :--------------------------------------------- |
| **Output** | Return status string.                          |

**Rules:**

- **Standard:** If `rakahsDone` is exactly **8**.
- **Sunnah Complete:** If `rakahsDone` is exactly **20**.
- **Special Rule:** If `isShafi` is `true`, then **8** rakahs should also return `"Sunnah Complete"`.
- **Otherwise:** Any other valid even number returns `"Incomplete"`.

| Challenge 📢 | `rakahsDone` must be an even non-negative integer. |
| :----------- | :------------------------------------------------- |

**Sample Input & Output:**

- `getTaraweehStatus(8, false)` → `"Standard"`
- `getTaraweehStatus(8, true)` → `"Sunnah Complete"`
- `getTaraweehStatus(20, false)` → `"Sunnah Complete"`
- `getTaraweehStatus(4, false)` → `"Incomplete"`

---
