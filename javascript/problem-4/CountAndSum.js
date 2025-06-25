function CountAndSum(numbers, k) {
    let count = 0;
    let sumMultiplies = 0;

    for (let number of numbers){
        if (number % k == 0) {
            count += 1;
            sumMultiplies += number;
        }
    }
    return [count, sumMultiplies];
}

result = CountAndSum([1, 2, 3, 4, 5, 6, 9], 3)

console.log(result)