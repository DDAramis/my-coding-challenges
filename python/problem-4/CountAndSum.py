
def count_and_sum_multiples(numbers, k):
    count = 0
    sum_multiples = 0

    for num in numbers:
        if num % k == 0:
            count += 1
            sum_multiples += num
    return (count, sum_multiples)

result = count_and_sum_multiples([1, 2, 3, 4, 5, 6, 9], 3)
print(result)