# 🌙 JS DAILY PRACTICE – DAY 69

📅 **Goal:** Eid Social Coordination & Charity Logic
🎯 **Focus:** Object Manipulation • Logic Gates • Array Search • Mathematical Rounding

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🍲 Eid Dessert Portions

⚠️ **Function Name:** `calculateDessertServings()`

You have made a large bowl of Sheer Khurma. You need to know if it's enough for your expected guests.

| Input      | `totalVolumeML` (number) and `guestCount` (number). |
| :--------- | :-------------------------------------------------- |
| **Output** | Return string: `"Enough"` or `"Need [X] ML more"`.  |

**Rules:**

- **Logic:** Each guest is served exactly **150 ML**.
- **Validation:** Both inputs must be positive numbers.

| Challenge 📢 | If the total volume is exactly double what is needed, return `"Enough for Seconds!"`. |
| :----------- | :------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `calculateDessertServings(1500, 10)` ➔ `"Enough"`
- `calculateDessertServings(3000, 10)` ➔ `"Enough for Seconds!"`
- `calculateDessertServings(1000, 10)` ➔ `"Need 500 ML more"`

---

## 🧩 PROBLEM–02: 🎁 Anonymous Charity (Sadaqah) Mixer

⚠️ **Function Name:** `getAnonymousDonations()`

To maintain privacy, a mosque's software hides the names of donors and only lists the amounts. Filter out any donation that is below a certain threshold to focus on high-impact gifts.

| Input      | `donations` (array of numbers) and `minAmount` (number). |
| :--------- | :------------------------------------------------------- |
| **Output** | Return an array of numbers.                              |

**Rules:**

- **Logic:** Return only the donations that are greater than or equal to `minAmount`.
- **Validation:** `donations` must be an array, `minAmount` must be a positive number.

| Challenge 📢 | Use the `.filter()` method and sort the resulting array in **descending order** (highest to lowest). |
| :----------- | :--------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getAnonymousDonations([100, 500, 50, 1000], 100)` ➔ `[1000, 500, 100]`

---

## 🧩 PROBLEM–03: 🏡 Village Trip Packing Check

⚠️ **Function Name:** `checkPackingWeight()`

You are traveling to your village for Eid. Your car has a maximum weight limit for luggage.

| Input      | `luggageWeights` (array of numbers) and `maxLimit` (number). |
| :--------- | :----------------------------------------------------------- |
| **Output** | Return `true` (if within limit) or `false` (if exceeded).    |

**Rules:**

- **Logic:** Sum up all weights in the `luggageWeights` array.
- **Validation:** `maxLimit` must be positive. Array must contain only numbers.

| Challenge 📢 | If the total weight is within 5% of the `maxLimit`, return the string `"Warning: Near Limit"` instead of `true`. |
| :----------- | :--------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkPackingWeight([10, 20, 15], 50)` ➔ `"Warning: Near Limit"` (Total 45 is within 5% of 50)
- `checkPackingWeight([10, 10], 50)` ➔ `true`

---

## 🧩 PROBLEM–04: 🤝 Eid Mubarak SMS Batcher

⚠️ **Function Name:** `calculateSMSCost()`

You want to send Eid greetings to your contact list. Each SMS has a character limit and a cost.

| Input      | `messageLength` (number) and `contactCount` (number). |
| :--------- | :---------------------------------------------------- |
| **Output** | Return total cost (number).                           |

**Rules:**

- **Logic:** - 1 SMS = 160 characters.
  - If `messageLength` is 1-160, it costs 1 SMS per contact.
  - If `messageLength` is 161-320, it costs 2 SMS per contact.
  - Base cost per SMS is **0.50 BDT**.
- **Validation:** Both inputs must be positive integers.

**Sample Input & Output:**

- `calculateSMSCost(100, 50)` ➔ `25` (50 contacts _ 1 SMS _ 0.5)
- `calculateSMSCost(200, 10)` ➔ `10` (10 contacts _ 2 SMS _ 0.5)

---

## 🧩 PROBLEM–05: 👵 Seniority Salami Bonus

⚠️ **Function Name:** `getSpecialSalami()`

In many families, the oldest and youngest members get a special "bonus" Salami.

| Input      | `relatives` (array of objects: `[{name: "Zayan", age: 5}]`). |
| :--------- | :----------------------------------------------------------- |
| **Output** | Return an object: `{ youngest: "Name", oldest: "Name" }`.    |

**Rules:**

- **Logic:** Find the person with the minimum age and the person with the maximum age.
- **Validation:** Input must be an array with at least 2 objects.

| Challenge 📢 | If there is a tie in age, return the name that comes first alphabetically. |
| :----------- | :------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getSpecialSalami([{name: "Abir", age: 25}, {name: "Zayan", age: 5}, {name: "Dadi", age: 70}])` ➔ `{ youngest: "Zayan", oldest: "Dadi" }`

---
