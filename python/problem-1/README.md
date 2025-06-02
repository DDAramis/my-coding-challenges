# Problem 1: Reverse and Filter Words

## Problem
Given a list of strings and a minimum length, return a new list containing only the strings longer than the minimum length, with each string reversed.

## Solution
- **File**: solution.py
- **Approach**: Iterated through the list, filtered strings by length using a condition, reversed each valid string with slicing, and stored results in a new list.
- **Key Concepts**: Lists, string slicing, iteration, filtering.

## Example
- **Input**: `["hello", "cat", "world", "hi"]`, `3`
- **Output**: `["olleh", "dlrow"]`