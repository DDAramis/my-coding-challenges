# Problem 7: Find Missing Number

## Problem
Given an array of integers from 1 to n with one number missing, return the missing number. The array is unsorted, and n is the length of the array plus 1.

## Solution
- **File**: findMissingNumeber.js
- **Approach**: Calculated n (array length + 1), computed the expected sum of numbers from 1 to n using the formula n * (n + 1) / 2, summed the array numbers, and returned the difference as the missing number.
- **Key Concepts**: Arrays, iteration, arithmetic.

## Example
- **Input**: `[3, 1, 4, 5]`
- **Output**: `2`