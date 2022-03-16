def whatFlavors(cost, money):
    # Write your code here
    mp = dict()
    for i, c in enumerate(cost):
        if c in mp:
            print(f'{mp[c] + 1} {i + 1}')
        else:
            mp[money - c] = i
