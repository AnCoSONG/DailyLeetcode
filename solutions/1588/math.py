class Solution:
    def sumOddLengthSubarrays(self, arr: List[int]) -> int:
        n = len(arr)
        res = 0
        for i in range(n):
            # i 的左边有i个元素，右边有n-i-1个元素
            lo = (i+1)//2
            ro = (n-i)//2
            le = (i//2)+1
            re = (n-i-1)//2 + 1
            res += (lo*ro + le*re) * arr[i]

        return res