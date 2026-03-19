# 🌙 JS DAILY PRACTICE – DAY-79

📅 **Goal:** Advanced Array Methods & Data Integrity
🎯 **Focus:** Array.every() • Object Comparison • Data Sanitization • Nested Logic

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🚦 System Health Check

⚠️ **Function Name:** `isSystemStable()`

In your "Smart Ticketing" server, you need to check if all microservices are currently "Online".

| Input      | `services` (Array of objects). |
| :--------- | :----------------------------- |
| **Output** | Return boolean.                |

**Rules:**

- **Validation:** Input must be a non-empty array of objects.
- **Logic:** Each object has a `status` property. Return `true` only if **every** service status is `"Online"`.

| Challenge 📢 | If any service has a property `critical: true` and its status is `"Offline"`, return the string `"CRITICAL FAILURE"`. |
| :----------- | :-------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `isSystemStable([{status: "Online"}, {status: "Online"}])` ➔ `true`
- `isSystemStable([{status: "Online"}, {status: "Offline", critical: true}])` ➔ `"CRITICAL FAILURE"`

---

## 🧩 PROBLEM–02: 🎫 Multi-City Trip Validator

⚠️ **Function Name:** `isValidTripChain()`

A user is booking a multi-stop trip. Ensure the destination of one ticket matches the departure of the next.

| Input      | `trips` (Array of objects). |
| :--------- | :-------------------------- |
| **Output** | Return boolean.             |

**Rules:**

- **Validation:** Input must be an array with at least 2 trip objects.
- **Logic:** Check if `trips[i].to === trips[i+1].from` for the entire array.

| Challenge 📢 | The comparison should be case-insensitive and ignore leading/trailing spaces in the city names. |
| :----------- | :---------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `isValidTripChain([{from: "Dhaka", to: "Sylhet"}, {from: "sylhet ", to: "Chittagong"}])` ➔ `true`

---

## 🧩 PROBLEM–03: 🧹 API Response Sanitizer

⚠️ **Function Name:** `sanitizeUserData()`

Clean up sensitive user data before sending it to the frontend UI.

| Input      | `userObj` (Object).            |
| :--------- | :----------------------------- |
| **Output** | Return a new sanitized Object. |

**Rules:**

- **Validation:** Input must be a valid object.
- **Logic:** Remove the keys `password`, `token`, and `salt`.

| Challenge 📢 | If the object contains a key `role` with the value `"admin"`, add a new property `accessLevel: "high"`. Otherwise, set `accessLevel: "standard"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `sanitizeUserData({name: "Ahsan", password: "123", role: "admin"})` ➔ `{name: "Ahsan", role: "admin", accessLevel: "high"}`

---

## 🧩 PROBLEM–04: 📊 Average Rating Calculator

⚠️ **Function Name:** `calculateAverageRating()`

Calculate the average star rating for a bus service based on user reviews.

| Input      | `ratings` (Array of numbers).                 |
| :--------- | :-------------------------------------------- |
| **Output** | Return number (Average rounded to 1 decimal). |

**Rules:**

- **Validation:** Input must be an array of numbers between 1 and 5.
- **Logic:** Sum all ratings and divide by the total count.

| Challenge 📢 | If the array is empty, return `0`. If the average is exactly 5.0, return the string `"Top Rated Service"`. |
| :----------- | :--------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateAverageRating([4, 5, 5, 4])` ➔ `4.5`
- `calculateAverageRating([5, 5, 5])` ➔ `"Top Rated Service"`

---

## 🧩 PROBLEM–05: 🕒 Session Timeout Checker

⚠️ **Function Name:** `hasSessionExpired()`

Determine if a user's login session has timed out based on the last activity timestamp.

| Input      | `lastActivity` (number/timestamp) and `limitInMinutes` (number). |
| :--------- | :--------------------------------------------------------------- |
| **Output** | Return boolean.                                                  |

**Rules:**

- **Validation:** `lastActivity` must be a valid timestamp (ms). `limitInMinutes` must be a positive number.
- **Logic:** Return `true` if `(CurrentTime - lastActivity)` is greater than the limit converted to milliseconds.

| Challenge 📢 | If the `lastActivity` is in the future compared to the current time, return `"Invalid Timestamp"`. |
| :----------- | :------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `hasSessionExpired(Date.now() - 600000, 5)` ➔ `true` (10 mins passed, limit was 5)
- `hasSessionExpired(Date.now() + 5000, 10)` ➔ `"Invalid Timestamp"`

---
