function longestIncreasingSequence(numbers) {
    // Handle edge cases
    if (!numbers || numbers.length === 0) return 0;
    if (numbers.length === 1) return 1;

    const tails = []; // Array to store the smallest number that ends an increasing subsequence of length i+1

    for (let number of numbers) { // Iterate through each number
        let left = 0;
        let right = tails.length; // Use 'right' instead of 'rigth'

        // Binary search to find the position to insert or replace
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (tails[mid] < number) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        // Insert or replace the number at position 'left'
        tails[left] = number;
        if (left === tails.length) {
            tails.push(number); // Extend tails if number is added at the end
        }
    }

    return tails.length; // Return the length of the longest increasing subsequence
}

// Tests
console.log(longestIncreasingSequence([10, 9, 2, 5, 3, 7, 101, 18])); // Output: 4
console.log(longestIncreasingSequence([])); // Output: 0
console.log(longestIncreasingSequence([5])); // Output: 1
console.log(longestIncreasingSequence([1, 2, 3, 4])); // Output: 4