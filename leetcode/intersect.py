class Solution:
    def intersect(
            self, nums1: List[int],
            nums2: List[int]) -> List[int]:
        return _intersect(nums1, nums2)


def _intersect(nums1, nums2):
    m = dict()
    for i in nums1:
        m[i] = m.setdefault(i, 0) + 1

    res = []
    for i in nums2:
        if i in m and m[i] >= 1:
            res.append(i)
            m[i] -= 1
    return res
