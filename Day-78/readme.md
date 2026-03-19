# 🌙 JS DAILY PRACTICE – DAY-78

📅 **Goal:** Advanced Data Mapping & Logic Branching
🎯 **Focus:** Array.map() • Nested Objects • Logic Sequencing • String Sanitization

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🚌 Bus Trip Fare Estimator

⚠️ **Function Name:** `estimateBusFare()`

Calculate the total fare for a group trip based on distance and passenger type.

| Input      | `distance` (number in km) and `passengerCount` (number). |
| :--------- | :------------------------------------------------------- |
| **Output** | Return number (Total Estimated Fare).                    |

**Rules:**

- **Validation:** Both must be positive numbers.
- **Logic:** The base rate is 5 BDT per km per passenger.

| Challenge 📢 | If the total distance is over 200km, apply a 10% discount on the total. If the trip is for students (assume a third parameter `isStudent` boolean), apply an additional 20% discount on the already discounted price. |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `estimateBusFare(100, 2, false)` ➔ `1000`
- `estimateBusFare(300, 1, true)` ➔ `1080` (1500 - 10% = 1350, then 1350 - 20% = 1080)

---

## 🧩 PROBLEM–02: 👤 User Profile Formatter

⚠️ **Function Name:** `formatUserProfile()`

You are receiving raw data from a registration form. Format it into a clean object.

| Input      | `firstName` (string), `lastName` (string), and `age` (number). |
| :--------- | :------------------------------------------------------------- |
| **Output** | Return an Object: `{ fullName: "First Last", age: 25 }`.       |

**Rules:**

- **Validation:** Names must be non-empty strings. Age must be a positive integer.
- **Logic:** Combine first and last name with a space.

| Challenge 📢 | Add a property `isSenior` which is `true` if the age is 60 or above. Ensure the `fullName` is returned in all CAPITAL letters. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `formatUserProfile("Ahsan", "Habib", 65)` ➔ `{ fullName: "AHSAN HABIB", age: 65, isSenior: true }`

---

## 🧩 PROBLEM–03: 🔍 Discount Code Validator

⚠️ **Function Name:** `validatePromoCode()`

Your "Smart Ticketing" app offers promo codes. Check if a code is valid for use.

| Input      | `promoCode` (string) and `orderAmount` (number). |
| :--------- | :----------------------------------------------- |
| **Output** | Return boolean.                                  |

**Rules:**

- **Validation:** `promoCode` must be a string. `orderAmount` must be a positive number.
- **Logic:** A code is valid if its length is exactly 8 characters.

| Challenge 📢 | If the promo code starts with "SAVE", it is only valid if the `orderAmount` is 500 BDT or more. The check should be case-sensitive. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `validatePromoCode("SAVE2026", 600)` ➔ `true`
- `validatePromoCode("SAVE2026", 400)` ➔ `false`

---

## 🧩 PROBLEM–04: 📂 File Extension Extractor

⚠️ **Function Name:** `getFileType()`

To manage your project assets, you need to identify the file type from a file name string.

| Input      | `fileName` (string).            |
| :--------- | :------------------------------ |
| **Output** | Return string (Extension only). |

**Rules:**

- **Validation:** Input must be a string containing at least one dot `.`.
- **Logic:** Extract the extension (e.g., "index.html" ➔ "html").

| Challenge 📢 | If the extension is "js" or "ts", return `"Developer File"`. Otherwise, return the extension in lowercase. |
| :----------- | :--------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getFileType("script.JS")` ➔ `"Developer File"`
- `getFileType("photo.JPG")` ➔ `"jpg"`

---

## 🧩 PROBLEM–05: 💹 Portfolio Growth Calculator

⚠️ **Function Name:** `calculateFinalBalance()`

Calculate the final balance of an investment after a specific growth period.

| Input      | `initialAmount` (number) and `growthRates` (Array of numbers). |
| :--------- | :------------------------------------------------------------- |
| **Output** | Return number (Final Balance rounded to 2 decimal places).     |

**Rules:**

- **Validation:** `initialAmount` must be positive. `growthRates` must be an array of numbers representing percentages (e.g., 5 means 5% growth).
- **Logic:** Apply each growth rate sequentially to the balance.

| Challenge 📢 | If any growth rate in the array is negative (loss), stop the calculation immediately and return the string `"Investment Risk Detected"`. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateFinalBalance(1000, [10, 5])` ➔ `1155.00` (1000 + 10% = 1100, then 1100 + 5% = 1155)
- `calculateFinalBalance(1000, [10, -2])` ➔ `"Investment Risk Detected"`

---
