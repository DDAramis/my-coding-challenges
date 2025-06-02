def double_odds(numbers):
    result = []

    for num in numbers:
        if num % 2 == 1:
            double = num * 2
            result.append(double)
    return result

result = double_odds([1, 2, 3, 4, 5, 6, 7])
print(result)