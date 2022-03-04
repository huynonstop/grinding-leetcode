class Solution:
    def findSmallestSetOfVertices(
            self, n: int, edges: List[List[int]]) -> List[int]:
        # zero_in_degree_vertex = set(range(n))
        # for u, v in edges:
        #     zero_in_degree_vertex.discard(v)
        # return zero_in_degree_vertex
        return set(range(n)) - set(v for u, v in edges)
