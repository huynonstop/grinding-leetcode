class Solution:
    def isHappy(self, n: int) -> bool:
        return is_happy(n)


def sum_square_digit(n):
    s = 0
    while n:
        s += (n % 10) ** 2
        n //= 10
    return s


def is_happy(n):
    s = set()

    def helper(n):
        if n == 1:
            return True
        if n in s:
            return False
        s.add(n)
        return helper(sum_square_digit(n))

    return helper(n)


def is_happy_two_pointer(n):
    fast = sum_square_digit(sum_square_digit(n))
    slow = sum_square_digit(n)
    while fast != 1 and fast != slow:
        fast = sum_square_digit(sum_square_digit(fast))
        slow = sum_square_digit(slow)
    return fast == 1


def is_happy_math(n):
    cycle = set([4, 16, 37, 58, 89, 145, 42, 20])
    while n != 1 and n not in cycle:
        n = sum_square_digit(n)
    return n == 1


is_happy_two_pointer(19)
