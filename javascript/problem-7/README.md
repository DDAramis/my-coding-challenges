# Problem 6: Remove Duplicates

## Problem
Given an array of integers, return a new array with all duplicates removed, keeping only the first occurrence of each number, in the original order.

## Solution
- **File**: RemoveDuplicates.js
- **Approach**: Used a Set to track seen numbers, iterated through the array, added unseen numbers to the result, and returned the array with unique numbers.
- **Key Concepts**: Arrays, Set, iteration, conditionals.

## Example
- **Input**: `[1, 2, 2, 3, 1, 4, 2]`
- **Output**: `[1, 2, 3, 4]`