# 🌙 JS DAILY PRACTICE – DAY-70

📅 **Goal:** The Night Before Eid & Celebration Logistics
🎯 **Focus:** Date Objects • Nested Conditions • Array Aggregation • String Formatting

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🛍️ Last Minute Eid Shopping Surge

⚠️ **Function Name:** `calculateSurgePrice()`

On Chand Raat (the night before Eid), home delivery services apply a surge charge based on the time of order.

| Time Range              | Surge Multiplier |
| :---------------------- | :--------------- |
| **06:00 PM - 09:59 PM** | 1.2x (20% extra) |
| **10:00 PM - 01:59 AM** | 1.5x (50% extra) |
| **Other times**         | 1.0x (No extra)  |

| Input      | `basePrice` (number) and `orderHour` (number: 0-23). |
| :--------- | :--------------------------------------------------- |
| **Output** | Return the final price (number).                     |

**Rules:**

- **Validation:** `basePrice` must be positive. `orderHour` must be 0-23.

| Challenge 📢 | If the final price exceeds 1500 BDT, give a flat 100 BDT "Eid Mubarak" discount after the surge. |
| :----------- | :----------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateSurgePrice(1000, 22)` ➔ `1400` (1000 \* 1.5 - 100)
- `calculateSurgePrice(500, 19)` ➔ `600` (500 \* 1.2)

---

## 🧩 PROBLEM–02: 💰 Fitra Distribution Equalizer

⚠️ **Function Name:** `distributeFitra()`

A charity organization has collected a total amount of Fitra. They want to distribute it equally among a set number of families, but they want to keep the "Change" (remainder) for office costs.

| Input      | `totalFitra` (number) and `numFamilies` (number).       |
| :--------- | :------------------------------------------------------ |
| **Output** | Return object: `{ amountPerFamily: X, officeFund: Y }`. |

**Rules:**

- **Logic:** Each family gets an equal whole-number amount. The remainder goes to the office.
- **Validation:** Both must be positive numbers. `numFamilies` cannot be 0.

**Sample Input & Output:**

- `distributeFitra(10050, 10)` ➔ `{ amountPerFamily: 1005, officeFund: 0 }`
- `distributeFitra(5003, 5)` ➔ `{ amountPerFamily: 1000, officeFund: 3 }`

---

## 🧩 PROBLEM–03: 🍽️ The "Perfect Semai" Ratio

⚠️ **Function Name:** `calculateCookingIngredients()`

To make the perfect Eid dessert (Semai), you follow a specific ratio: For every **100g of Semai**, you need **500ml of Milk** and **50g of Sugar**.

| Input      | `semaiWeight` (number in grams).                   |
| :--------- | :------------------------------------------------- |
| **Output** | Return string: `"Need [X]ml Milk and [Y]g Sugar"`. |

**Rules:**

- **Validation:** `semaiWeight` must be a positive number.

| Challenge 📢 | If `semaiWeight` is more than 500g, return the Milk amount in Liters (L) instead of ml. |
| :----------- | :-------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateCookingIngredients(200)` ➔ `"Need 1000ml Milk and 100g Sugar"`
- `calculateCookingIngredients(600)` ➔ `"Need 3L Milk and 300g Sugar"`

---

## 🧩 PROBLEM–04: 🕌 Eid Prayer Attendance Optimizer

⚠️ **Function Name:** `findBestJamaat()`

A person wants to attend the earliest possible Eid Jamaat but needs at least **45 minutes** to travel from home.

| Input      | `leavingTime` (string "HH:MM") and `jamaatTimes` (array of strings: `["07:00", "08:30"]`). |
| :--------- | :----------------------------------------------------------------------------------------- |
| **Output** | Return string: `"Attend [Time]"` or `"Too Late"`.                                          |

**Rules:**

- **Logic:** Convert all times to total minutes. Find the first Jamaat that is at least 45 minutes after the `leavingTime`.
- **Validation:** `leavingTime` must be "HH:MM". `jamaatTimes` must be a non-empty array.

**Sample Input & Output:**

- `findBestJamaat("07:00", ["07:30", "08:00", "09:00"])` ➔ `"Attend 08:00"`
- `findBestJamaat("08:30", ["07:00", "08:00"])` ➔ `"Too Late"`

---

## 🧩 PROBLEM–05: 💵 Salami (Eidi) High-Value Tracker

⚠️ **Function Name:** `getTopSalami()`

After receiving Salami from various relatives, you want to see which 3 relatives gave you the most.

| Input      | `salamiData` (array of objects: `[{name: "Uncle", amount: 500}]`).  |
| :--------- | :------------------------------------------------------------------ |
| **Output** | Return array of strings: `["Name1: Amount", "Name2: Amount", ...]`. |

**Rules:**

- **Logic:** Sort the array by `amount` in descending order and take the top 3.
- **Validation:** Input must be an array.

| Challenge 📢 | If there are fewer than 3 relatives, return all of them sorted, but do not crash. |
| :----------- | :-------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getTopSalami([{name: "A", amount: 100}, {name: "B", amount: 1000}, {name: "C", amount: 500}])`
  ➔ `["B: 1000", "C: 500", "A: 100"]`

---
