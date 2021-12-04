from typing import List


class Solution:
    def twoSum(
            self, numbers: List[int],
            target: int) -> List[int]:
        return two_sum_two_pointer(numbers, target)


def two_sum_two_pointer(numbers, target):
    # numbers sorted
    # time O(n), space O(1)
    n = len(numbers)
    l = 0
    r = n - 1
    while l < r:
        if numbers[l] + numbers[r] > target:
            r -= 1
        elif numbers[l] + numbers[r] < target:
            l += 1
        else:
            return [l, r]
    return [-1, -1]


def two_sum_dict(numbers, target):
    # time O(n), space O(n)
    n = len(numbers)
    dic = {}
    for i, num in enumerate(n):
        if target-num in dic:
            return [dic[target-num]+1, i+1]
        dic[num] = i
    return [-1, -1]


def two_sum_search(numbers, target):
    # time O(nlogn), space O(1)
    n = len(numbers)
    for i in range(n):
        l, r = i+1, n-1
        tmp = target - numbers[i]
        while l <= r:
            mid = l + (r-l) >> 1
            if numbers[mid] == tmp:
                return [i+1, mid+1]
            elif numbers[mid] < tmp:
                l = mid+1
            else:
                r = mid-1
