def countSort(s):
    alphabet = [0] * 26
    for c in s:
        alphabet[ord(c) - ord('a')] += 1
    sortedS = ''
    for i in range(len(alphabet)):
        count = alphabet[i]
        sortedS += count * chr(ord('a')+i)
    return sortedS


def checkCol(grid, j):
    R = len(grid)
    for i in range(1, R):
        if grid[i-1][j] > grid[i][j]:
            return False
    return True


def gridChallenge(grid):
    # Write your code here
    R = len(grid)
    C = len(grid[0])
    for i in range(R):
        grid[i] = countSort(grid[i])
    for j in range(C):
        if not checkCol(grid, j):
            return 'NO'
    return 'YES'
