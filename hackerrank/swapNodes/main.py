import os
from swapNodes import swapNodes


if __name__ == '__main__':
    indexes = []
    queries = []

    with open('./out.txt', 'w') as outfile, open('./case11.txt', 'r') as infile:

        n = int(infile.readline())
        for _ in range(n):
            indexes.append(list(map(int, infile.readline().split())))
        queries_count = int(infile.readline())

        for _ in range(queries_count):
            queries_item = int(infile.readline().strip())
            queries.append(queries_item)
        result = swapNodes(indexes, queries)

        outfile.write(
            '\n'.join([' '.join(map(str, x)) for x in result]))
        outfile.write('\n')
