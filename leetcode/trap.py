from turtle import left


class Solution:
    def trap(self, height: List[int]) -> int:
        return trap_min_max(height)

# A ith bar can trap the water if and only if
# there exists a higher bar to the left and a higher bar to the right of ith bar.

# trap[i] = min(left_max[i], right_max[i]) - height[i]


def trap_min_max(height):
    n = len(height)
    left_max = [0] * n
    for i in range(1, n):
        left_max[i] = max(height[i-1], left_max[i-1])
    right_max = [0] * n
    for i in range(n-2, -1, -1):
        right_max[i] = max(height[i+1], right_max[i+1])

    res = 0
    for i in range(n):
        res += min(left_max[i], right_max[i]) - height[i]
    return res


def trap_2_pointer(height):
    n = len(height)
    left_max, right_max = height[0], height[-1]
    l, r = 1, n-2
    res = 0
    while l <= r:
        left_max = max(left_max, height[l])
        right_max = max(right_max, height[r])
        if left_max < right_max:
            res += left_max - height[l]
            l += 1
        else:
            res += right_max - height[r]
            r -= 1
    return res
