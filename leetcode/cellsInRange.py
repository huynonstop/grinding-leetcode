class Solution:
    def cellsInRange(self, s: str) -> List[str]:
        s_cell, e_cell = s.split(':')
        s_col, s_row = s_cell[0], s_cell[1]
        e_col, e_row = e_cell[0], e_cell[1]

        res = []
        for j in range(ord(s_col), ord(e_col) + 1):
            for i in range(ord(s_row), ord(e_row) + 1):
                res.append(chr(j)+chr(i))
        return res
