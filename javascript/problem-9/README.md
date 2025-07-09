# Problem 8: Longest Increasing Sequence

## Problem
Given an array of integers, find the length of the longest strictly increasing subsequence (a sequence where each number is greater than the previous one).

## Solution
- **File**: solution.js
- **Approach**: Used binary search to maintain an array of the smallest numbers that end increasing subsequences of various lengths, updating it for each number, and returned the array length as the result.
- **Key Concepts**: Arrays, binary search, iteration, longest increasing subsequence.

## Example
- **Input**: `[10, 9, 2, 5, 3, 7, 101, 18]`
- **Output**: `4`