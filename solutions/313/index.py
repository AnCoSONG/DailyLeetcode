import heapq
# 丑数 * 丑数依然是丑数
# 每次取出最小的丑数，依次乘以primes中的丑数
# 得到新的丑数，用最小堆自动输出当前最小的丑数
# 循环这个过程
def nthSuperUglyNumber(n, primes) -> int:
    hash = set()
    heap = [1]
    heapq.heapify(heap)
    res = heapq.heappop(heap)
    hash.add(res)
    for i in range(n - 1):
        # print()
        # print(i)
        for prime in primes:
            if res * prime not in hash:
                heapq.heappush(heap, res * prime)
                hash.add(res * prime)  # prime
        # print(heap)
        # print(hash)
        res = heapq.heappop(heap)
        # print(res)

    return res

print(nthSuperUglyNumber(12, [2,7, 13, 19]))