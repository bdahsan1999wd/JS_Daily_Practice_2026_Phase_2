# 🌙 JS DAILY PRACTICE – DAY-72

📅 **Goal:** Post-Eid Travel & Bike Tour Logistics
🎯 **Focus:** Array Search • Object Updates • Math Precision • Logical Sequencing

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🚗 Fuel Cost Splitter

⚠️ **Function Name:** `calculateFuelCost()`

You and your cousins are renting a car to visit a relative's house. You need to calculate the total fuel cost and the share per person.

| Input      | `distanceKm` (number), `mileage` (km per liter), `fuelPrice` (per liter), and `personCount` (number). |
| :--------- | :---------------------------------------------------------------------------------------------------- |
| **Output** | Return string: `"Total [X] BDT, Each pays [Y] BDT"`.                                                  |

**Rules:**

- **Validation:** All inputs must be positive numbers. `personCount` cannot be 0.

| Challenge 📢 | If the `distanceKm` is more than 150km, add a 500 BDT "Driver Allowance" to the total cost before splitting. |
| :----------- | :----------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateFuelCost(100, 10, 125, 5)` ➔ `"Total 1250 BDT, Each pays 250 BDT"`
- `calculateFuelCost(200, 10, 120, 4)` ➔ `"Total 2900 BDT, Each pays 725 BDT"`

---

## 🧩 PROBLEM–02: 🏍️ Bike Tour Expense Tracker

⚠️ **Function Name:** `manageTourBudget()`

You are on a bike tour and have a set budget. You need to track your remaining balance after refueling or spending on food/maintenance.

| Input      | `initialBudget` (number), `expenseAmount` (number), and `expenseType` (string: "Refuel", "Food", "Service"). |
| :--------- | :----------------------------------------------------------------------------------------------------------- |
| **Output** | Return number (Remaining Balance).                                                                           |

**Rules:**

- **Validation:** Budget and amount must be positive. Type must match the three categories.
- **Logic:** If `expenseAmount` is more than `initialBudget`, return `"Insufficient Budget"`.

| Challenge 📢 | If the `expenseType` is "Service" and the amount is over 1000 BDT, you get a 10% "Tour Discount" on that service charge. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `manageTourBudget(5000, 1200, "Service")` ➔ `3920` (Discounted 1200 is 1080. 5000 - 1080 = 3920)
- `manageTourBudget(2000, 2500, "Refuel")` ➔ `"Insufficient Budget"`

---

## 🧩 PROBLEM–03: 🏠 Relative's House Finder

⚠️ **Function Name:** `findRelative()`

You are looking through a list of relatives to find someone who lives in a specific city.

| Input      | `relatives` (Array of objects: `[{name: "Karim", city: "Dhaka"}]`) and `targetCity` (string). |
| :--------- | :-------------------------------------------------------------------------------------------- |
| **Output** | Return string: `"[Name] lives in [City]"` or `"Not Found"`.                                   |

**Rules:**

- **Validation:** `relatives` must be an array, `targetCity` must be a string.
- **Logic:** Return the **first** relative found in that city.

| Challenge 📢 | The search should be **case-insensitive** (e.g., "dhaka" should match "Dhaka"). |
| :----------- | :------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `findRelative([{name: "Abir", city: "Sylhet"}], "SYLHET")` ➔ `"Abir lives in Sylhet"`

---

## 🧩 PROBLEM–04: 🚂 Train Ticket Seat Booking

⚠️ **Function Name:** `checkSeatAvailability()`

You are booking train tickets for a group. Tickets are sold in "Cabins" (4 seats) or "Chairs" (1 seat).

| Input      | `requestedSeats` (number) and `availableSeats` (number). |
| :--------- | :------------------------------------------------------- |
| **Output** | Return boolean: `true` or `false`.                       |

**Rules:**

- **Validation:** Both must be positive numbers.
- **Logic:** `true` if `availableSeats` >= `requestedSeats`.

| Challenge 📢 | If `requestedSeats` is exactly 4, check if `availableSeats` is a multiple of 4 (to ensure a full cabin). Return `true` only if both conditions met. |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkSeatAvailability(4, 10)` ➔ `false` (10 is not a multiple of 4)
- `checkSeatAvailability(4, 12)` ➔ `true`

---

## 🧩 PROBLEM–05: 🕒 Arrival Time Predictor

⚠️ **Function Name:** `predictArrival()`

You are traveling by bus. Given the starting time and the estimated delay due to Eid traffic.

| Input      | `startTime` (string "HH:MM") and `travelMinutes` (number) and `trafficDelay` (number). |
| :--------- | :------------------------------------------------------------------------------------- |
| **Output** | Return string: `"Arriving at HH:MM"`.                                                  |

**Rules:**

- **Validation:** `startTime` format "HH:MM", numbers must be positive.

| Challenge 📢 | If the total travel time (including delay) exceeds 5 hours (300 mins), return: `"Long Journey: Arriving at HH:MM"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `predictArrival("10:00", 120, 30)` ➔ `"Arriving at 12:30"`
- `predictArrival("08:00", 250, 60)` ➔ `"Long Journey: Arriving at 13:10"`

---
