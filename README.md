# TypeScript Interview Practice: 7 Array & Object Tasks

This repository contains **7 TypeScript problems** commonly asked in interviews. Each problem demonstrates **array manipulation, object handling, function composition, sorting, and functional programming concepts**. The code is written in **TypeScript** with proper interfaces and prints results for each task.

---

## Tasks Overview

### 1️⃣ Array Filtering and Mapping
- **Problem:** Filter out all females from an array of people and return an array of the remaining people's names.
- **Solution:** Uses `filter` to exclude females and `map` to get the names.
- **Result:** Prints the array of male names.

### 2️⃣ Object Manipulation
- **Problem:** Extract only the book titles from an array of book objects.
- **Solution:** Uses `map` to return only the `title` property.
- **Result:** Prints an array of book titles.

### 3️⃣ Function Composition
- **Problem:** Write three functions — square a number, double a number, add 5 — and compose them into a single function.
- **Solution:** Applies `square` → `double` → `addFive` in order.
- **Result:** Prints the final computed value.

### 4️⃣ Sorting Objects
- **Problem:** Sort an array of car objects by their year of manufacture in ascending order.
- **Solution:** Uses `sort` on the `year` property.
- **Result:** Prints the sorted array of cars.

### 5️⃣ Find and Modify
- **Problem:** Search for a person by name in an array and update their age if found.
- **Solution:** Uses `find` to locate the person and updates the `age`.
- **Result:** Prints the updated array.

### 6️⃣ Array Reduction
- **Problem:** Calculate the sum of all even numbers in an array.
- **Solution:** Uses `filter` to select even numbers and `reduce` to sum them.
- **Result:** Prints the sum of even numbers.

### 7️⃣ Unique Values
- **Problem:** Remove duplicate numbers from an array and return only unique numbers.
- **Solution:** Converts the array to a `Set` to remove duplicates, then back to an array.
- **Result:** Prints the array of unique numbers.

---

## Code Usage

1. Install Node.js if you don’t already have it: [https://nodejs.org](https://nodejs.org)
2. Save the code in a file called `index.ts`.
3. Compile TypeScript to JavaScript:
```bash
tsc index.ts
