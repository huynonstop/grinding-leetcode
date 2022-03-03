class Solution:
    def average(self, salary: List[int]) -> float:
        n = len(salary)
        mn = salary[0]
        mx = salary[0]
        s = salary[0]
        for i in range(1, n):
            s += salary[i]
            mn = min(mn, salary[i])
            mx = max(mx, salary[i])
        return (s - mn - mx) / (n-2)
