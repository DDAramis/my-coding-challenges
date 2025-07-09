function findMissingNumber(numbers) {
    const n = numbers.length + 1; // Calculate n (array length + 1 for missing number)
    const expectedSum = (n * (n + 1)) / 2; // Sum of numbers from 1 to n
    let actualSum = 0; // Initialize sum of array numbers

    for (let number of numbers) { // Iterate through each number
        actualSum += number; // Add to sum
    }

    return expectedSum - actualSum; // Return the missing number
}

// Tests
console.log(findMissingNumber([3, 1, 4, 5])); // Output: 2
console.log(findMissingNumber([2, 3, 1, 5, 6])); // Output: 4