def count_sum(numbers, k):
    count = 0
    sum_multiplies = 0

    for number in numbers:
        if number % k == 0:
            count += 1
            sum_multiplies += number
    return(count, sum_multiplies)

result = count_sum([1, 2, 3, 4, 5, 6, 9], 3)
print(result)