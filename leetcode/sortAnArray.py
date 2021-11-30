from typing import List


class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        # Merge sort
        return merge_sort_in_place(nums)


def merge_sort(nums):
    list_nums = []
    for n in nums:
        list_nums.append([n])

    while len(list_nums) != 1:
        t = []
        for i in range(0, len(list_nums), 2):
            if i + 1 < len(list_nums):
                t.append(merge(list_nums[i], list_nums[i+1]))
            else:
                t.append(list_nums[i])
        list_nums = t

    return list_nums.pop()


def merge(left_list, right_list):
    left_cursor = right_cursor = 0
    ret = []
    while left_cursor < len(left_list) and right_cursor < len(right_list):
        if left_list[left_cursor] < right_list[right_cursor]:
            ret.append(left_list[left_cursor])
            left_cursor += 1
        else:
            ret.append(right_list[right_cursor])
            right_cursor += 1

    # append what is remained in either of the lists
    ret.extend(left_list[left_cursor:])
    ret.extend(right_list[right_cursor:])

    return ret


def merge_sort_in_place(nums: List[int]):
    size = 1
    while size < len(nums):
        for i in range(0, len(nums) - size, 2 * size):
            mid = i + size - 1
            r = min(i + 2 * size - 1, len(nums) - 1)
            nums[i: r + 1] = merge_2(nums, i, mid, r)
        size *= 2
    return nums


def merge_2(nums, l, mid, r):
    t = []
    i = l
    j = mid + 1

    while(i <= mid or j <= r):
        if(i > mid or (j <= r and nums[i] > nums[j])):
            t.append(nums[j])
            j += 1
        else:
            t.append(nums[i])
            i += 1

    return t


def merge_sort_recursive(nums):
    if(len(nums) > 1):
        mid = len(nums) >> 1
        L = nums[:mid]
        R = nums[mid:]

        merge_sort_recursive(L)
        merge_sort_recursive(R)

        i = j = k = 0

        while(i < len(L) and j < len(R)):
            if (L[i] < R[j]):
                nums[k] = L[i]
                i += 1
            else:
                nums[k] = R[j]
                j += 1
            k += 1

        while(i < len(L)):
            nums[k] = L[i]
            i += 1
            k += 1

        while(j < len(R)):
            nums[k] = R[j]
            j += 1
            k += 1


def quicksort(nums: List[int], l, r):
    if (l >= r):
        return
    mid = partition(nums, l, r)
    quicksort(nums, l, mid)
    quicksort(nums, mid + 1, r)


def partition(nums: List[int], l, r):
    pivot = nums[l]
    while(l < r):
        while(l < r and nums[r] >= pivot):
            r -= 1
        nums[l] = nums[r]
        while(l < r and nums[l] <= pivot):
            l += 1
        nums[r] = nums[l]

    nums[l] = pivot
    return l


def quickSort(nums):
    def helper(head, tail):
        if head >= tail:
            return
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
    helper(0, len(nums)-1)
    return nums


def heapSort(nums):
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
    for i in range(n//2+1)[::-1]:
        heapify(nums, n, i)
    for i in range(n)[::-1]:
        nums[i], nums[0] = nums[0], nums[i]
        heapify(nums, i, 0)


def bubble_sort(nums):
    for i in range(len(nums)):
        for j in range(0, len(nums) - i - 1):
            if nums[j] > nums[j+1]:
                nums[j], nums[j + 1] = nums[j + 1], nums[j]


def insertion_sort(nums):
    for i in range(1, len(nums)):
        key = nums[i]
        j = i-1
        while(j >= 0 and key < nums[j]):
            nums[j + 1] = nums[j]
            j -= 1
        nums[j + 1] = key


def selection_sort(nums):
    for i in range(0, len(nums) - 1):
        min = i
        for j in range(i + 1, len(nums)):
            if nums[j] < nums[min]:
                min = j
        if min != i:
            nums[i], nums[min] = nums[min], nums[i]


selection_sort([5, 1, 1, 2, 0, 0])
