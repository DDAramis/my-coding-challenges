def max_consecutive_numbers(numbers):
    if not numbers:
        return 0
    elif len(numbers) == 1:
        return 1

    count = 1
    max_repeats = 1
    previous = numbers[0]

    for number in numbers[1:]:
        if number == previous:
            count += 1
        else:
            count = 1
        max_repeats = max(max_repeats, count)
        previous = number
    return max_repeats

result = max_consecutive_numbers([1, 2, 2, 3, 3, 3, 2, 1, 1])

print(result)
