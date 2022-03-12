def commonChild(s1, s2):  # longest common sequence
    # Write your code here
    n1 = len(s1)
    n2 = len(s2)

    dp = [[0] * (n2+1) for _ in range(n1 + 1)]

    for i, ch1 in enumerate(s1):
        for j, ch2 in enumerate(s2):
            if ch1 == ch2:
                dp[i+1][j+1] = dp[i][j] + 1
            else:
                dp[i+1][j+1] = max(dp[i][j+1], dp[i+1][j])

    return dp[-1][-1]
