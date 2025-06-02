def filter_and_square(numbers):
    result = []
    for num in numbers:
        if num > 0:
            square = num ** 2
            result.append(square)
    return result
result = filter_and_Square([-2, 0, 3, -1, 4, 5])
print(result)

