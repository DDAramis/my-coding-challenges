def max_consecutive_repeats(numbers):
    if not numbers:
        return 0
    elif len(numbers) == 1:
        return 1
    
    count = 1
    max_count = 1
    previous = numbers[0]

    for num in numbers[1:]:
        if num == previous:
            count += 1
        else: 
            count = 1
        max_count = max(max_count, count)
        previos = num
    return max_count

result = max_consecutive_repeats([1, 2, 2, 3, 3, 3, 2, 1, 1])
print(result)