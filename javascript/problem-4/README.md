# Problem 4: Count and Sum Multiples
 
## Problem
Given a list of integers and a number K, return a tuple containing two values: (1) the count of numbers that are multiples of k, and (2) the sum of those multiplies.

## Solution
- **File**: CountAndSum.js
- **Approach**: Iterated through the list, checked for multiples of k using the modulo operator, incremented a counter, added each multiple to a sum, and returned both in a tuple.

## Example
- **Input**: ´[1, 2, 3, 4, 5, 6, 9]´, ´3´
- **Output+**: (3, 18)