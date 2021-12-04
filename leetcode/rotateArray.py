from typing import List


class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        return rotate_reverse_2(nums, k)


def reverse(nums, l, r):
    while l < r:
        nums[l], nums[r] = nums[r], nums[l]
        l += 1
        r -= 1
    return nums


def rotate_reverse(nums, k):
    n = len(nums)
    mid = (n - 1 + k) % n
    reverse(nums, 0, n - 1)
    reverse(nums, mid + 1, n - 1)
    reverse(nums, 0, mid)


def rotate_reverse_2(nums, k):
    n = len(nums)
    t = k % n

    # Reverse the first n - k numbers.
    # Index i(0 <= i < n - k) becomes n - k - i.
    reverse(nums, 0, n - 1 - t)
    # Reverse the last k numbers.
    # Index n - k + i (0 <= i < k) becomes n - i.
    reverse(nums, n - t, n - 1)
    # Reverse all the numbers.
    # Index i (0 <= i < n - k) becomes n - (n - k - i) = i + k.
    # Index n - k + i (0 <= i < k) becomes n - (n - i) = i.
    reverse(nums, 0, n - 1)

# def rotate_temp_array(nums, k):
#     t = nums.copy()
#     n = len(nums)
#     mid = (n - 1 + k) % n
#     for i in range(0, mid):
#         nums[i] = t[n + i - mid - 1]
#     for i in range(mid, n):
#         nums[i] = t[i - mid - 1]


def rotate_temp_array(nums, k):
    t = nums.copy()
    n = len(nums)
    for i in range(0, n):
        nums[(i+k) % n] = t[i]


def rotate_cycle(nums, k):
    n = len(nums)
    cur = 0
    s = 0
    num = nums[0]

    for i in range(n):
        num, nums[(cur + k) % n] = nums[(cur + k) % n], num
        cur = (cur + k) % n

        if cur == s and cur < n - 1:
            num = nums[cur + 1]
            cur += 1
            s += 1


def rotate_swap(nums, k):
    n = len(nums)
    f = 0
    l = n
    if (k % n == 0):
        return
    mid = n-k % n
    nxt = mid
    while(f != nxt):
        nums[f], nums[nxt] = nums[nxt], nums[f]
        f += 1
        nxt += 1
        if (nxt == l):
            nxt = mid
        elif (f == mid):
            mid = nxt


a = [0, 1, 2, 3, 4, 5, 6]
rotate_swap(a, 3)
print(a)
