def miniMaxSum(arr):
    # Write your code here
    s = sum(arr)
    mn = s
    mx = 0
    for a in arr:
        mn = min(mn, s - a)
        mx = max(mx, s - a)
    print(f'{mn} {mx}')
