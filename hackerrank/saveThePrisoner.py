def saveThePrisoner(n, m, s):
    # Write your code here
    # return (m % n + (s - 1)) % n or n
    return ((s - 1) + m) % n or n


print(saveThePrisoner(3, 7, 3))
