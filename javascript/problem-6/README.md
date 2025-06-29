# Problem 5: Group By Parity

## Problem
Given an array of integers, return an object with two properties: `odds` (an array of odd numbers) and `evens` (an array of even numbers), sorted in ascending order.

## Solution
- **File**: groupByParity.js
- **Approach**: Initialized an object with two arrays, iterated through the input array, separated numbers into odds and evens, sorted both arrays, and returned the object.
- **Key Concepts**: Arrays, objects, conditionals, sorting, iteration.

## Example
- **Input**: `[3, 1, 4, 6, 2, 5]`
- **Output**: `{ odds: [1, 3, 5], evens: [2, 4, 6] }`