# The isBadVersion API is already defined for you.
# @param version, an integer
# @return an integer
def isBadVersion(version):
    return version == 2


class Solution:
    def first_bad_version_opt(self, n):
        """
        :type n: int
        :rtype: int
        """
        return first_bad_version(n)


def first_bad_version_opt(n):
    l = 1
    r = n
    while l < r:
        m = l + ((r - l) >> 1)
        if isBadVersion(m) and not isBadVersion(m - 1):
            return m
        elif isBadVersion(m):
            r = m - 1
        else:
            l = m + 1
    return l

# lower bound


def first_bad_version(n):
    l = 1
    r = n
    while l < r:
        m = (l + n) >> 1
        if isBadVersion(m):
            r = m
        else:
            l = m + 1
    return l


first_bad_version_opt(2)
