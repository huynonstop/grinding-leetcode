def angryProfessor(k, a):
    # Write your code here
    c = 0
    for t in a:
        if t <= 0:
            c += 1
    return 'YES' if c < k else 'NO'


print(angryProfessor(2, [0, -1, 2, 1]))
