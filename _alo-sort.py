import random
from typing import List
import collections


def sortArray(self, nums):
    return sorted(nums)


class Node:
    def __init__(self, val):
        self.val = val

    # lt means less than, le means less or equal than etc.
    def __lt__(self, other):
        return self.val < other.val

    # incase you need more logic
    # def __le__(self, other):
    #     return self.val <= other.val
    # def __eq__(self, other):
    #     return self.val == other.val
    # def __ne__(self, other):
    #     return self.val != other.val
    # def __gt__(self, other):
    #     return self.val > other.val
    # def __ge__(self, other):
    #     return self.val >= other.val


class SortObject:
    def sortArray(self, nums: List[int]) -> List[int]:
        nodes = [Node(n) for n in nums]
        return [node.val for node in sorted(nodes)]


class SortSolution:
    def bubbleSort(self, nums):
        n = len(nums)
        for i in range(n):
            for j in range(0, n - i - 1):
                if nums[j] > nums[j + 1]:
                    nums[j], nums[j + 1] = nums[j + 1], nums[j]

    def bubbleSort(self, nums: List[int]) -> List[int]:
        L, B = len(nums), 1
        while B:
            B = 0
            for i in range(L - 1):
                if nums[i] > nums[i + 1]:
                    nums[i], nums[i + 1], B = nums[i + 1], nums[i], 1

    def selectionSort(self, nums):
        for i in range(len(nums)):
            _min = min(nums[i:])
            min_index = nums[i:].index(_min)
            nums[i + min_index] = nums[i]
            nums[i] = _min
        # L = len(N)
        # return [N.pop(min(range(L-i), key = lambda x: N[x])) for i in range(L)]

    def insertionSort(self, nums):
        for i in range(1, len(nums)):
            key = nums[i]
            j = i - 1
            while j >= 0 and key < nums[j]:
                nums[j + 1] = nums[j]
                j -= 1
            nums[j + 1] = key

    def insertionSort(self, nums):
        L = len(nums)
        for i in range(1, L):
            for j in range(0, i):
                if nums[i] < nums[j]:
                    nums.insert(j, nums.pop(i))
                    break

    def quicksort(self, nums):
        if len(nums) <= 1:
            return nums

        pivot = random.choice(nums)
        lt = [v for v in nums if v < pivot]
        eq = [v for v in nums if v == pivot]
        gt = [v for v in nums if v > pivot]

        return self.quicksort(lt) + eq + self.quicksort(gt)

    def quickSort(self, nums):
        def helper(head, tail):
            if head >= tail: return
            l, r = head, tail
            m = (r - l) // 2 + l
            pivot = nums[m]
            while r >= l:
                while r >= l and nums[l] < pivot:
                    l += 1
                while r >= l and nums[r] > pivot:
                    r -= 1
                if r >= l:
                    nums[l], nums[r] = nums[r], nums[l]
                    l += 1
                    r -= 1
            helper(head, r)
            helper(l, tail)

        helper(0, len(nums) - 1)
        return nums

    def quickSort(self, N: List[int]) -> List[int]:
        def helper(A, low, high):
            if low >= high: return
            p = partition(A, low, high)
            helper(A, low, p - 1), helper(A, p + 1, high)

        def partition(A, low, high):
            mid = (low + high) // 2
            A[high], A[mid], i = A[mid], A[high], low
            for j in range(low, high + 1):
                if A[j] < A[high]: A[i], A[j], i = A[j], A[i], i + 1
            A[high], A[i] = A[i], A[high]
            return i

        helper(N, 0, len(N) - 1)
        return N

    def mergeSort(self, nums):
        if len(nums) > 1:
            mid = len(nums) // 2
            L = nums[:mid]
            R = nums[mid:]

            self.mergeSort(L)
            self.mergeSort(R)

            i = j = k = 0

            while i < len(L) and j < len(R):
                if L[i] < R[j]:
                    nums[k] = L[i]
                    i += 1
                else:
                    nums[k] = R[j]
                    j += 1
                k += 1

            while i < len(L):
                nums[k] = L[i]
                i += 1
                k += 1

            while j < len(R):
                nums[k] = R[j]
                j += 1
                k += 1

    def heapSort(self, nums):
        def heapify(nums, n, i):
            l = 2 * i + 1
            r = 2 * i + 2

            largest = i
            if l < n and nums[largest] < nums[l]:
                largest = l

            if r < n and nums[largest] < nums[r]:
                largest = r

            if largest != i:
                nums[i], nums[largest] = nums[largest], nums[i]

                heapify(nums, n, largest)

        n = len(nums)

        for i in range(n // 2 + 1)[::-1]:
            heapify(nums, n, i)

        for i in range(n)[::-1]:
            nums[i], nums[0] = nums[0], nums[i]
            heapify(nums, i, 0)

    def countingSort(self, nums):
        C, m, M, S = collections.Counter(nums), min(nums), max(nums), []
        for n in range(m, M + 1):
            S.extend([n] * C[n])
        return S

    def bucketSort(self, nums):
        def insertion_sort(A):
            for i in range(1, len(A)):
                for j in range(0, i):
                    if A[i] < A[j]:
                        A.insert(j, A.pop(i))
                        break
            return A

        buckets, m, S = [[] for _ in range(1000)], min(nums), []
        R = max(nums) - m
        if R == 0: return nums
        for a in nums:
            buckets[999 * (a - m) // R]
        for b in buckets:
            S.extend(insertion_sort(b))
        return S


if __name__ == "__main__":
    solution = SortSolution()
    solution.sortArray([5, 2, 3, 1])