from typing import List


class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, newColor: int) -> List[List[int]]:
        flood_fill(image, sr, sc, newColor)
        return image


def flood_fill(image, sr, sc, new_color):
    stack = []
    stack.append((sr, sc))
    old_color = image[sr][sc]
    while stack:
        cr, cc = stack.pop()
        if check_fill_valid(
                image, cr, cc, new_color, old_color):
            image[cr][cc] = new_color
            stack.extend(
                [(cr - 1, cc),
                 (cr, cc + 1),
                 (cr + 1, cc),
                 (cr, cc - 1)])
    return image


def flood_fill_optimize(image, sr, sc, new_color):
    stack = []
    stack.append((sr, sc))
    start_color = image[sr][sc]
    R = len(image)
    C = len(image[0])
    while stack:
        cr, cc = stack.pop()
        if image[cr][cc] == start_color and image[cr][cc] != new_color:
            image[cr][cc] = new_color
            if cr >= 1:
                stack.append((cr - 1, cc))
            if cr + 1 < R:
                stack.append((cr + 1, cc))
            if cc >= 1:
                stack.append((cr, cc - 1))
            if cc + 1 < C:
                stack.append((cr, cc + 1))
    return image


def flood_fill_dfs(image, sr, sc, new_color):
    R, C = len(image), len(image[0])
    start_color = image[sr][sc]

    def dfs(i, j):
        if i < 0 or i >= R or j < 0 or j >= C:
            return
        if image[i][j] == new_color or image[i][j] != start_color:
            return
        image[i][j] = new_color
        dfs(i+1, j)
        dfs(i-1, j)
        dfs(i, j+1)
        dfs(i, j-1)
    dfs(sr, sc)
    return image


def check_fill_valid(image, r, c, color, old_color):
    R = len(image)
    C = len(image[0])
    if r < 0 or r >= R or c < 0 or c >= C or image[r][c] != old_color or image[r][c] == color:
        return False
    return True


image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]]
sr = 1
sc = 1
newColor = 2
flood_fill(image, sr, sc, newColor)
