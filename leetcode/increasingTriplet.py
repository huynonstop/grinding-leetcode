class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        return increasing_triplet(nums)


def increasing_triplet_bf(nums):
    n = len(nums)
    for i in range(n - 2):
        for j in range(i + 1, n - 1):
            if nums[i] < nums[j]:
                for k in range(j + 1, n):
                    if nums[j] < nums[k]:
                        return True
    return False


def increasing_triplet(nums):
    a = [float("inf")]*2
    for n in nums:
        # if n < a[0]:
        #     a[0] = n
        # if n > a[0] and n < a[1]:
        #     a[1] = n
        # if n > a[1]:
        #     return True

        if n <= a[0]:
            a[0] = n
        elif n <= a[1]:
            a[1] = n
        else:
            return True
    return False
