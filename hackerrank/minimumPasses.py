import math
import sys


def minimumPasses(machines, workers, price, target):
    # Write your code here
    candy = 0
    invest = 0
    spend = sys.maxsize
    while candy < target:
        passes = (price - candy) // (machines * workers)
        # if enough candies to inverst price - candy <= 0, buy more
        # else skip until have enough money
        if passes <= 0:
            production = (candy // price) + machines + workers
            half = math.ceil(production / 2)
            # try balance production power
            if machines > workers:
                machines = max(machines, half)
                workers = production - machines
            else:
                workers = max(workers, half)
                machines = production - workers
            # save remain candy
            candy %= price
            # buy more = skip 1 day
            passes = 1
        # product candy
        candy += passes * machines * workers
        invest += passes
        spend = min(
            spend, invest + math.ceil((target - candy) / (machines * workers)))
    return min(invest, spend)
